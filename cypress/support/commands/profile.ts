import { testProfile } from '../../helpers/data';

export function changeProfileData(first: string, lastname: string) {
    cy.selectByDataTestId('EditableProfileCardHeader.EditButton').click();
    cy.selectByDataTestId('ProfileCard.firstname').clear().type(first);
    cy.selectByDataTestId('ProfileCard.lastname').clear().type(lastname);
    cy.selectByDataTestId('EditableProfileCardHeader.SaveButton').click();
}

export function resetProfile(profileId: string) {
    return cy.request({
        url: `http://localhost:8000/profile/${profileId}`,
        method: 'PUT',
        body: testProfile,
        headers: {
            Authorization: '123',
        },
    });
}

declare global {
    namespace Cypress {
        interface Chainable {
            changeProfileData(first: string, lastname: string): Chainable<void>;
            resetProfile(profileId: string): Chainable<void>;
        }
    }
}
