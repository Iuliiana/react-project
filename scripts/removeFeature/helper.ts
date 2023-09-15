import {
    JsxAttribute,
    Node,
    ObjectLiteralElementLike,
    SyntaxKind,
} from 'ts-morph';

export const FUNCTION_NAME = 'toggleFeatureFlag';
export const COMPONENT_NAME = 'ToggleFeatureFlag';

export function isToggleFunction(node: Node) {
    let isToggleFeatureFlag = false;

    node.forEachChild((child) => {
        if (
            child.isKind(SyntaxKind.Identifier) &&
            child.getText() === FUNCTION_NAME
        ) {
            isToggleFeatureFlag = true;
        }
    });
    return isToggleFeatureFlag;
}

export function isToggleComponent(node: Node) {
    let isToggleFeatureFlag = false;

    node.forEachChild((child) => {
        if (
            child.isKind(SyntaxKind.Identifier) &&
            child.getText() === COMPONENT_NAME
        ) {
            isToggleFeatureFlag = true;
        }
    });
    return isToggleFeatureFlag;
}

export function getObjectText(object?: ObjectLiteralElementLike) {
    return (
        object
            ?.getFirstDescendantByKind(SyntaxKind.ArrowFunction)
            ?.getBody()
            ?.getText() ?? ''
    );
}

export function getObjectComponentText(attribute?: JsxAttribute) {
    const result =
        attribute
            ?.getFirstDescendantByKind(SyntaxKind.JsxExpression)
            ?.getExpression()
            ?.getText() ?? '';

    if (result.startsWith('(')) {
        return result.slice(1, -1);
    }
    return result;
}

export function getFeatureName(
    object?: ObjectLiteralElementLike | JsxAttribute,
) {
    return object
        ?.getFirstChildByKind(SyntaxKind.StringLiteral)
        ?.getText()
        ?.slice(1, -1);
}

export function getAttributeByName(attributes: JsxAttribute[], name: string) {
    return attributes.find((attr) => attr.getNameNode().getText() === name);
}
