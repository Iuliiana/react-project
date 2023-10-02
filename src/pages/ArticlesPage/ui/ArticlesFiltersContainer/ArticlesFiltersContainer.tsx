import { memo } from 'react';
import { ArticlesFilters } from '@/widgets/ArticlesFilters';
import { useArticlePage } from '../../lib/hooks/useArticlePage';

interface ArticlesFiltersContainerProps {
    className?: string;
}

export const ArticlesFiltersContainer = memo(
    (props: ArticlesFiltersContainerProps) => {
        const { className } = props;
        const {
            onChangeSearch,
            onChangeTab,
            onChangeOrder,
            search,
            onChangeSort,
            sort,
            order,
            type,
        } = useArticlePage();

        return (
            <ArticlesFilters
                className={className}
                onChangeSearch={onChangeSearch}
                valueSearch={search}
                onChangeTab={onChangeTab}
                currentType={type}
                onChangeSort={onChangeSort}
                onChangeOrder={onChangeOrder}
                currentSort={sort}
                currentOrder={order}
            />
        );
    },
);
