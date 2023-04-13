import { Article, ArticleViewType } from 'entities/Article';
import { EntityState } from '@reduxjs/toolkit';

export interface ArticlesPageSchema extends EntityState<Article>{
    isLoading?: boolean,
    error?: string,
    view: ArticleViewType,

    // pagination
    page: number,
    limit?: number,
    hasMore: boolean

}
