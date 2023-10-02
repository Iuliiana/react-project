import React, { memo } from 'react';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useArticlePage } from '../../lib/hooks/useArticlePage';

interface ViewSelectorContanerProps {
    className?: string;
}

export const ViewSelectorContaner = memo((props: ViewSelectorContanerProps) => {
    const { className } = props;
    const { view, onChangeViewArticles } = useArticlePage();

    return (
        <ArticleViewSelector
            view={view}
            onChangeViewArticles={onChangeViewArticles}
            className={classNames('', {}, [className])}
        />
    );
});
