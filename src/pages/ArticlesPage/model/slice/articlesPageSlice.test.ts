import {
    Article, ArticleBlockType, ArticleSortField, ArticleType, ArticleView,
} from '@/entities/Article';
import {
    fetchArticlesList,
} from '../services/fetchArticlesList/fetchArticlesList';
import {
    articlesPageReducer,
} from './articlesPageSlice';
import { ArticlesPageSchema } from '../types/ArticlesPageSchema';

const article: Article = {
    id: '1',
    title: 'Javascript news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '26.02.2022',
    type: [ArticleType.IT],
    user: {
        id: '1',
        username: 'admin',
        avatar: 'https://sun1-95.userapi.com/s/v1/ig2/xzx1BbeV9lr8KAWLbMiKM6fnfCD0H2p8R8xUUx25QcZHh4a8H4hjFSGrBKDd7O-_BkZmwM2-eokVbZWliFqknf47.jpg?size=400x400&quality=95&crop=95,79,426,426&ava=1',
    },
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: [
                'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
            ],
        },
        {
            id: '4',
            type: ArticleBlockType.CODE,
            code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
        },
        {
            id: '5',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: [
                'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
            ],
        },
        {
            id: '2',
            type: ArticleBlockType.IMAGE,
            src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
            title: 'Рисунок 1 - скриншот сайта',
        },
        {
            id: '3',
            type: ArticleBlockType.CODE,
            code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
        },
        {
            id: '7',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: [
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
            ],
        },
        {
            id: '8',
            type: ArticleBlockType.IMAGE,
            src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
            title: 'Рисунок 1 - скриншот сайта',
        },
        {
            id: '9',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: [
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
            ],
        },
    ],
};
const articles: Article[] = new Array(3)
    .fill(0)
    .map((item, index) => ({
        ...article,
        id: String(index),
    }));
const articles2: Article[] = new Array(3)
    .fill(0)
    .map((item, index) => ({
        ...article,
        id: String(index + 3),
    }));

describe('articlesPageSlice.test', () => {
    test('undefined state', () => {
        expect(
            articlesPageReducer(undefined, fetchArticlesList.pending('', {})),
        ).toEqual({
            ids: [],
            entities: {},
            error: undefined,
            isLoading: true,
            view: ArticleView.GRID,
            hasMore: true,
            page: 1,
            _inited: false,
            limit: 9,
            type: ArticleType.ALL,
            order: 'asc',
            search: '',
            sort: ArticleSortField.CREATED,
        });
    });

    test('fetchArticleDetailsData.fulfilled replace: true', () => {
        const state: ArticlesPageSchema = {
            ids: [],
            entities: {},
            error: undefined,
            isLoading: false,
            view: ArticleView.GRID,
            hasMore: true,
            page: 1,
            _inited: true,
            limit: 9,
            type: ArticleType.ALL,
            order: 'asc',
            search: '',
            sort: ArticleSortField.CREATED,
        };

        expect(
            articlesPageReducer(state, fetchArticlesList.fulfilled(articles, '', { replace: true })),
        ).toEqual({
            ids: ['0', '1', '2'],
            entities: {
                0: articles[0],
                1: articles[1],
                2: articles[2],
            },
            error: undefined,
            isLoading: false,
            view: ArticleView.GRID,
            hasMore: false,
            page: 1,
            _inited: true,
            limit: 9,
            type: ArticleType.ALL,
            order: 'asc',
            search: '',
            sort: ArticleSortField.CREATED,
        });
    });

    test('fetchArticleDetailsData.fulfilled replace: false', () => {
        const state: ArticlesPageSchema = {
            ids: ['0', '1', '2'],
            entities: {
                0: articles[0],
                1: articles[1],
                2: articles[2],
            },
            error: undefined,
            isLoading: false,
            view: ArticleView.GRID,
            hasMore: true,
            page: 1,
            _inited: true,
            limit: 9,
            type: ArticleType.ALL,
            order: 'asc',
            search: '',
            sort: ArticleSortField.CREATED,
        };

        expect(
            articlesPageReducer(state, fetchArticlesList.fulfilled([...articles, ...articles2], '', { replace: false })),
        ).toEqual({
            ids: ['0', '1', '2', '3', '4', '5'],
            entities: {
                0: articles[0],
                1: articles[1],
                2: articles[2],
                3: articles2[0],
                4: articles2[1],
                5: articles2[2],
            },
            error: undefined,
            isLoading: false,
            view: ArticleView.GRID,
            hasMore: false,
            page: 1,
            _inited: true,
            limit: 9,
            type: ArticleType.ALL,
            order: 'asc',
            search: '',
            sort: ArticleSortField.CREATED,
        });
    });
});
