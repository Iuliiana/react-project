import { TEST_PASSWORD, TEST_USERNAME } from '../../helpers/data';

let profileID = '';

describe('Пользователь открывает страницу профиля', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login(TEST_USERNAME, TEST_PASSWORD).then((data) => {
            profileID = data.id;
            cy.visit(`/profile/${profileID}`);
        });
    });

    afterEach(() => {
        cy.resetProfile(profileID);
    });

    it('Открывает успешно страницу своего профиля', () => {
        cy.selectByDataTestId('EditableProfileCard.ProfileCard').should('exist');
    });

    it('Редактирует её', () => {
        const newFirstname = 'newFirst';
        const newLastname = 'newLast';
        cy.changeProfileData(newFirstname, newLastname);
        cy.selectByDataTestId('ProfileCard.firstname').should('have.value', newFirstname);
        cy.selectByDataTestId('ProfileCard.lastname').should('have.value', newLastname);
    });
});
