export const TEST_USERNAME = 'testuser';
export const TEST_PASSWORD = '123';

export const testProfile = {
    id: '4',
    first: 'Test',
    lastname: 'Testlast',
    age: 20,
    currency: 'USD',
    country: 'Россия',
    city: 'Moscow',
    username: 'testuser',
    avatar:
        'https://sun9-11.userapi.com/impg/x1BCzJ8lDEad3xAef-' +
        'dL4MFgA168qasFDpOfFA/4xNFKwt6TDE.jpg?size=523x604&quality=' +
        '96&sign=89c368a882b478fa487741c3feb4f888&type=album',
};

export const defaultArticle = {
    title: 'Test article',
    subtitle: 'Test article subtitle',
    img:
        'https://mx-style.net/wp-content/uploads/2021/08/speczialist' +
        '-kotlin-uroven-2-razrabotka-prilozhenij-2020-marat-hakimov_6121a3c989e3d.png',
    views: 10,
    createdAt: '02.04.2013',
    userId: '2',
    type: ['SCIENCE'],
    blocks: [
        {
            id: '1',
            type: 'TEXT',
            title: 'Заголовок этого блока',
            paragraphs: [
                'Программа, которую по традиции называют' +
                    ' «Hello, world!», очень проста. Она выводит ' +
                    'куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                'JavaScript — это язык, программы на котором ' +
                    'можно выполнять в разных средах. В нашем случае ' +
                    'речь идёт о браузерах и о серверной платформе Node.js. ' +
                    'Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст ' +
                    'в браузере, на настольном компьютере,' +
                    ' это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
            ],
        },
    ],
};
