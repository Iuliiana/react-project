import { selectTestId } from '../../helpers/selectTestId';

let articleId = '';
describe('Пользователь открывает статью', () => {
    beforeEach(() => {
        cy.login();
        cy.createArticle().then((article) => {
            articleId = article.id;
            cy.visit(`/articles/${article.id}`);
        });
    });

    afterEach(() => {
        cy.deleteArticle(articleId);
    });

    it('Страница успешно открывается', () => {
        cy.selectByDataTestId('ArticleDetailsPage').should('exist');
        cy.selectByDataTestId('ArticleDetails.Title.Head').should('have.text', 'Test article');
    });

    it('На странице отображаются рекоммендации', () => {
        cy.selectByDataTestId('ArticleRecommendationsList').should('exist');
    });

    it('Пользователь оставляет комментарий', () => {
        const text = 'Test comment';
        cy.selectByDataTestId('ArticleRecommendationsList').scrollIntoView();
        cy.addComment(text);
        cy.wait(5000);
        cy.selectByDataTestId('CommentItem').should('have.length', 1);
        cy.selectByDataTestId('CommentItem')
            .first()
            .find(selectTestId('CommentItem.Text.Paragraph'))
            .should('have.text', text);
    });
    it('Пользователь оценивает статью', () => {
        //  cy.intercept('GET', '**/articles/*', { fixture: 'article-details.json' });
        const rate = 4;
        cy.selectByDataTestId('RatingCard').scrollIntoView();
        cy.addRate(rate, 'Test feedback');
        cy.get('[data-selected=true]').should('have.length', rate);
    });
});
