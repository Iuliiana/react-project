import { User } from '@/entities/User';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { TEST_PASSWORD, TEST_USERNAME } from '../../helpers/data';
import { selectTestId } from '../../helpers/selectTestId';

export function login(username = TEST_USERNAME, password = TEST_PASSWORD) {
    return cy.request({
        url: 'http://localhost:8000/login',
        method: 'POST',
        body: {
            username,
            password,
        },
    })
        .then(({ body }) => {
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(body));
            return body;
        });
}

export function selectByDataTestId(testId: string) {
    return cy.get(selectTestId(testId));
}

declare global {
    namespace Cypress {
        interface Chainable {
            login(username?: string, password?: string): Chainable<User>;
            selectByDataTestId(testId: string): Chainable<JQuery<HTMLElement>>;
        }
    }
}
