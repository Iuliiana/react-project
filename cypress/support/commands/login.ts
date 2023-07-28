import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';

export function login(username: string, password: string) {
    cy.request({
        url: 'http://localhost:8000/login',
        method: 'POST',
        body: {
            username,
            password,
        },
    })
        .then(({ body }) => {
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(body));
        });
}
