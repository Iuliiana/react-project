import process from 'process';
import { Project, SyntaxKind, Node } from 'ts-morph';

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

function istoggleFunction(expression: Node) {
    let isToggleFeatureFlag = false;

    const identifiers = expression.getDescendantsOfKind(SyntaxKind.Identifier);
    identifiers.forEach((identifier) => {
        if (identifier.getText() === 'toggleFeatureFlag') {
            isToggleFeatureFlag = true;
        }
    });
    return isToggleFeatureFlag;
}

const files = project.getSourceFiles();
files.forEach((sourceFile) => {
    const expressions = sourceFile.getDescendantsOfKind(
        SyntaxKind.CallExpression,
    );

    expressions.forEach((expression) => {
        if (istoggleFunction(expression)) {
            const propExpression = expression.getFirstChildByKind(
                SyntaxKind.ObjectLiteralExpression,
            );
            if (!propExpression) return;

            const featuresNameProperty = propExpression.getProperty('name');

            const onFunctionProperty = propExpression.getProperty('on');
            const offFunctionProperty = propExpression.getProperty('off');

            const featuresFlagName = featuresNameProperty
                ?.getFirstChildByKind(SyntaxKind.StringLiteral)
                ?.getText()
                ?.slice(1, -1);

            if (featuresFlagName !== removedFeatureName) return;

            if (featuresState === 'on') {
                const onFunction = onFunctionProperty
                    ?.getFirstChildByKind(SyntaxKind.ArrowFunction)
                    ?.getBody()
                    ?.getText();

                expression.replaceWithText(onFunction ?? '');
            }

            if (featuresState === 'off') {
                const offFunction = offFunctionProperty
                    ?.getFirstChildByKind(SyntaxKind.ArrowFunction)
                    ?.getBody()
                    ?.getText();

                expression.replaceWithText(offFunction ?? '');
            }
        }
    });
});

project.save();
