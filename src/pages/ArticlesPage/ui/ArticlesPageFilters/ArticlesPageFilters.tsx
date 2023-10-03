import React, { memo } from 'react';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/deprecated/Card';
import { Input } from '@/shared/ui/deprecated/Input';
import cls from './ArticlesPageFilters.module.scss';
import { useArticlePage } from '../../lib/hooks/useArticlePage';

interface ArticlesPageFiltersProps {
    className?: string;
}

// const typedMemo: <T>(c: T) => T = memo;
// export const Select = typedMemo(<T extends string>(props: ISelectProps<T>) => {...}

export const ArticlesPageFilters = memo((props: ArticlesPageFiltersProps) => {
    const { className } = props;
    const {
        t,
        sort,
        onChangeSort,
        onChangeSearch,
        search,
        onChangeTab,
        onChangeOrder,
        order,
        type,
        view,
        onChangeViewArticles,
    } = useArticlePage();

    return (
        <div
            className={classNames(cls.ArticlesPageFilters, {}, [className])}
            data-testid="ArticlesPageFilters"
        >
            <div className={cls.selectors}>
                <ArticleSortSelector
                    onChangeSort={onChangeSort}
                    onChangeOrder={onChangeOrder}
                    currentSort={sort}
                    currentOrder={order}
                />
                <ArticleViewSelector
                    view={view}
                    onChangeViewArticles={onChangeViewArticles}
                    className={cls.btnsViewArticles}
                />
            </div>
            <Card className={cls.search}>
                <Input
                    className={cls.searchInput}
                    value={search}
                    onChange={onChangeSearch}
                    placeholder={t('Поиск')}
                />
            </Card>

            <ArticleTypeTabs
                onChangeTab={onChangeTab}
                currentType={type}
                className={cls.tabs}
            />
        </div>
    );
});
