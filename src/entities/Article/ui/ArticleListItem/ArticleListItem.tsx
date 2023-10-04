import React, { memo, useCallback } from 'react';
import { ARTICLE_SCROLL_TO_INDEX_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { ToggleFeatureFlag } from '@/shared/lib/features';
import { ArticleListItemDeprecated } from './ArticleListItemDeprecated/ArticleListItemDeprecated';
import { ArticleListItemRedesigned } from './ArticleListItemRedesigned/ArticleListItemRedesigned';
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

    return (
        <ToggleFeatureFlag
            feature="isAppRedesigned"
            on={
                <ArticleListItemRedesigned
                    {...props}
                    onSaveIndex={onSaveIndex}
                />
            }
            off={
                <ArticleListItemDeprecated
                    {...props}
                    onSaveIndex={onSaveIndex}
                />
            }
        />
    );
});
