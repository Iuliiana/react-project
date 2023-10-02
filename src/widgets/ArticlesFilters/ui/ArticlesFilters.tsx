import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import SearchIcon from '@/shared/assets/icons/new/search.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { OrderBy } from '@/shared/lib/types/order';
import { Input } from '@/shared/ui/redesigned/Input';
import { VStack } from '@/shared/ui/Stack';
import cls from './ArticlesFilters.module.scss';

interface ArticlesFiltersProps {
    className?: string;
    onChangeSearch: (value: string) => void;
    valueSearch: string | number;
    onChangeTab: (tabItem: ArticleType) => void;
    currentType: ArticleType;
    onChangeSort: (sort: ArticleSortField) => void;
    onChangeOrder: (order: OrderBy) => void;
    currentSort: ArticleSortField;
    currentOrder: OrderBy;
}

export const ArticlesFilters = memo((props: ArticlesFiltersProps) => {
    const {
        className,
        currentSort,
        onChangeSort,
        onChangeOrder,
        currentOrder,
        onChangeSearch,
        valueSearch,
        onChangeTab,
        currentType,
    } = props;
    const { t } = useTranslation('articles');

    return (
        <VStack
            gap="32"
            align="start"
            className={classNames(cls.ArticlesFilters, {}, [className])}
        >
            <Input
                className={cls.searchInput}
                value={valueSearch}
                onChange={onChangeSearch}
                placeholder={t('Поиск')}
                addonLeft={<SearchIcon />}
            />

            <ArticleTypeTabs
                onChangeTab={onChangeTab}
                currentType={currentType}
                className={cls.tabs}
            />
            <ArticleSortSelector
                onChangeSort={onChangeSort}
                onChangeOrder={onChangeOrder}
                currentSort={currentSort}
                currentOrder={currentOrder}
            />
        </VStack>
    );
});
