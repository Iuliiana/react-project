import { EntityState } from '@reduxjs/toolkit';
import {
    Article,
    ArticleType,
    ArticleView,
    ArticleSortField,
} from '@/entities/Article';
import { OrderBy } from '@/shared/lib/types/order';

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;
    view: ArticleView;

    // pagination
    page: number;
    limit: number;
    hasMore: boolean;
    // filters
    sort: ArticleSortField;
    order: OrderBy;
    search: string;
    type: ArticleType;
    _inited: boolean;
}
