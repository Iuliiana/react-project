export function addComment(text: string) {
    cy.selectByDataTestId('AddCommentForm.Input').type(text);
    cy.selectByDataTestId('AddCommentForm.Button').click();
}

declare global {
    namespace Cypress {
        interface Chainable {
            addComment(text: string): Chainable<void>;
        }
    }
}
