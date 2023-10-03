import React, { memo, useCallback } from 'react';
import { ARTICLE_SCROLL_TO_INDEX_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { ArticleListItemTypeGrid } from './ArticleListItemTypeGrid/ArticleListItemTypeGrid';
import { ArticleListItemTypeList } from './ArticleListItemTypeList/ArticleListItemTypeList';
import { ArticleView } from '../../model/consts/articleViewConst';
import { Article } from '../../model/types/article';

export interface ArticleItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: string;
    index?: number;
}

export const ArticleListItem = memo((props: ArticleItemProps) => {
    const { view } = props;

    const onSaveIndex = useCallback(
        (index?: number) => () => {
            if (index) {
                localStorage.setItem(
                    ARTICLE_SCROLL_TO_INDEX_LOCALSTORAGE_KEY,
                    String(index),
                );
            }
        },
        [],
    );

    if (view === ArticleView.LIST) {
        return <ArticleListItemTypeList {...props} onSaveIndex={onSaveIndex} />;
    }

    return <ArticleListItemTypeGrid {...props} onSaveIndex={onSaveIndex} />;
});
