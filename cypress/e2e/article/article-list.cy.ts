import { TEST_PASSWORD, TEST_USERNAME } from '../../helpers/data';
import { selectTestId } from '../../helpers/selectTestId';

describe('Пользователь переходит на страницу со статьями', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login(TEST_USERNAME, TEST_PASSWORD).then(() => {
            cy.visit('/articles');
        });
    });

    it('Cтатьи успешно загрузились', () => {
        cy.selectByDataTestId('ArticleList.Virtuoso').should('exist');
        cy.selectByDataTestId('ArticleItem').should(($items) => {
            expect($items).have.length.gte(3);
        });
    });

    it('Сортировка статей по просмотрам', () => {
        cy.selectByDataTestId('ArticleSortSelect').select('views');
        cy.selectByDataTestId('ArticleItem')
            .first()
            .find(selectTestId('ArticleListItem.views'))
            .should('have.text', '1');
    });
    it('Сортировка статей по убыванию', () => {
        cy.selectByDataTestId('ArticleSortSelect').select('views');
        cy.selectByDataTestId('ArticleOrderSelect').select('desc');
        cy.selectByDataTestId('ArticleItem')
            .first()
            .find(selectTestId('ArticleListItem.views'))
            .should('have.text', '991');
    });
});
