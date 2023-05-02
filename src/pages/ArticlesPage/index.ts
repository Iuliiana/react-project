// fixme вынести ArticlesPageFilters из страницы, используется на уровне entity в ArticleList!!!
export {
    ArticlesPageFilters,
} from './ui/ArticlesPageFilters/ArticlesPageFilters';

export {
    ArticlesPageAsync as ArticlesPage,
} from './ui/ArticlesPage/ArticlesPage.async';

export {
    articlesPageReducer,
    articlesPageActions,
} from './model/slice/articlesPageSlice';
