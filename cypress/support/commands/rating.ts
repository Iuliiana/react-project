import { selectTestId } from '../../helpers/selectTestId';

export function addRate(rate: number, feedback?: string) {
    cy.selectByDataTestId('RatingCard')
        .find(selectTestId(`RatingCard.StarRating.${rate}`))
        .click();
    cy.selectByDataTestId('RatingCard.Input').type(feedback ?? '');
    cy.selectByDataTestId('RatingCard.Button').click();
}
declare global {
    namespace Cypress {
        interface Chainable {
            addRate(rate: number, feedback?: string): Chainable<void>;
        }
    }
}
