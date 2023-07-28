import { selectTestId } from '../../helpers/selectTestId';

describe('Проверка роутинга', () => {
    describe('Пользователь авторизован', () => {
        beforeEach(() => {
            // вынести в отдельный файл + добавить тестового пользователя в db
            cy.login('admin', '123');
        });
        it('Переход страницу профиля', () => {
            cy.visit('/profile/1');
            cy.get(selectTestId('ProfilePage')).should('exist');
        });
        it('Переход страницу администратора', () => {
            cy.visit('/admin');
            cy.get(selectTestId('AdminPanelPage')).should('exist');
        });
        it('Переход открывает страницу со списком статей', () => {
            cy.visit('/articles');
            cy.get(selectTestId('ArticlesPage')).should('exist');
        });
    });
    describe('Пользователь не авторизован', () => {
        it('Переход на главную страницу', () => {
            cy.visit('/');
            cy.get(selectTestId('MainPage')).should('exist');
        });
        it('Попытка перехода на страницу профиля', () => {
            cy.visit('/profile/1');
            cy.get(selectTestId('MainPage')).should('exist');
        });
        it('Переход открывает несуществующий маршрут ', () => {
            cy.visit('/fasfasfasf');
            cy.get(selectTestId('NotFoundPage')).should('exist');
        });
    });
});
