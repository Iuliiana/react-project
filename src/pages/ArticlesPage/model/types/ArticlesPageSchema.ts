import { Article, ArticleViewType } from 'entities/Article';
import { EntityState } from '@reduxjs/toolkit';
import { ArticleType, ArticleSortBy } from 'entities/Article/model/types/article';
import { OrderBy } from 'shared/lib/types';

export interface ArticlesPageSchema extends EntityState<Article>{
    isLoading?: boolean,
    error?: string,
    view: ArticleViewType,

    // pagination
    page: number,
    limit: number,
    hasMore: boolean,
    // filters
    sort: ArticleSortBy,
    order: OrderBy,
    search: string,
    type: ArticleType
    _inited: boolean

}
