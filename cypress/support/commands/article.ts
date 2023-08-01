import { Article } from '@/entities/Article';
import { defaultArticle } from '../../helpers/data';

export function createArticle(article?:Article) {
    return cy.request({
        url: 'http://localhost:8000/articles',
        method: 'post',
        body: article ?? defaultArticle,
        headers: {
            Authorization: '123',
        },
    }).then(({ body }) => body);
}

export function deleteArticle(articleId: string) {
    return cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/articles/${articleId}`,
        headers: { Authorization: '123' },
    });
}

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?: Article): Chainable<Article>;
            deleteArticle(articleId: string): Chainable<void>;
        }
    }
}
