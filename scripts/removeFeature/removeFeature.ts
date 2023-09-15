import process from 'process';
import { Project, SyntaxKind, Node } from 'ts-morph';
import {
    getAttributeByName,
    getFeatureName,
    getObjectComponentText,
    getObjectText,
    isToggleComponent,
    isToggleFunction,
} from './helper';

const removedFeatureName = process.argv[2]; // isCounterEnabled
const featuresState = process.argv[3]; // off/on

if (!removedFeatureName) {
    throw new Error('Укажите название фича-флага');
}

if (!featuresState) {
    throw new Error('Укажите состояние фичи');
}

if (featuresState !== 'on' && featuresState !== 'off') {
    throw new Error('Укажите корректное состояние on или off');
}

const project = new Project({});
project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

// project.addSourceFilesAtPaths('src/**/ArticleDetailsPage.tsx');
const files = project.getSourceFiles();

function functionReplace(node: Node) {
    const propExpression = node.getFirstDescendantByKind(
        SyntaxKind.ObjectLiteralExpression,
    );
    if (!propExpression) return;

    const featuresNameProperty = propExpression.getProperty('name');

    const onFunctionProperty = propExpression.getProperty('on');
    const offFunctionProperty = propExpression.getProperty('off');

    const featuresFlagName = getFeatureName(featuresNameProperty);

    if (featuresFlagName !== removedFeatureName) return;

    if (featuresState === 'on') {
        node.replaceWithText(getObjectText(onFunctionProperty));
    }

    if (featuresState === 'off') {
        node.replaceWithText(getObjectText(offFunctionProperty));
    }
}

function componentReplace(node: Node) {
    const allAttributes = node.getDescendantsOfKind(SyntaxKind.JsxAttribute);

    if (!allAttributes) return;

    const featureNameAttr = getAttributeByName(allAttributes, 'feature');

    const featureName = getFeatureName(featureNameAttr);
    if (featureName !== removedFeatureName) return;

    const onFunctionAttr = getAttributeByName(allAttributes, 'on');
    const offFunctionAttr = getAttributeByName(allAttributes, 'off');

    if (featuresState === 'on') {
        node.replaceWithText(getObjectComponentText(onFunctionAttr));
    }

    if (featuresState === 'off') {
        node.replaceWithText(getObjectComponentText(offFunctionAttr));
    }
}

files.forEach((sourceFile) => {
    sourceFile.forEachDescendant((node) => {
        if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
            functionReplace(node);
        } else if (
            node.isKind(SyntaxKind.JsxSelfClosingElement) &&
            isToggleComponent(node)
        ) {
            componentReplace(node);
        }
    });
});

project.save();
