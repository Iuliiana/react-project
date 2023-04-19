import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { ArticleSortBy } from 'entities/Article';
import { OrderBy } from 'shared/lib/types';

interface ArticleSortSelectorProps {
    className?: string,
    onChangeSort: (sort: ArticleSortBy) => void,
    onChangeOrder: (order: OrderBy) => void,
    currentSort: ArticleSortBy,
    currentOrder: OrderBy
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const {
        className, currentSort, onChangeSort, onChangeOrder, currentOrder,
    } = props;
    const { t } = useTranslation('articles');

    const sortOptions: SelectOption[] = useMemo(() => [
        {
            value: ArticleSortBy.VIEWS,
            text: t('Просмотрам'),
        },
        {
            value: ArticleSortBy.TITLE,
            text: t('Заголовку'),
        },
        {
            value: ArticleSortBy.CREATED,
            text: t('Дате создания'),
        },
    ], [t]);
    const orderOptions: SelectOption[] = useMemo(() => [
        {
            value: 'asc',
            text: t('Возрастанию'),
        },
        {
            value: 'desc',
            text: t('Убыванию'),
        },
    ], [t]);

    const onChangeSortHandler = useCallback((sort: string) => {
        onChangeSort(sort as ArticleSortBy);
    }, [onChangeSort]);

    const onChangeOrderHandler = useCallback((order: string) => {
        onChangeOrder(order as OrderBy);
    }, [onChangeOrder]);

    return (
        <div className={classNames('', {}, [className])}>
            <Select
                label={t('Сортировать по')}
                options={sortOptions}
                value={currentSort}
                onChange={onChangeSortHandler}
            />
            <Select
                label={t('Упорядочить по')}
                options={orderOptions}
                value={currentOrder}
                onChange={onChangeOrderHandler}
            />
        </div>
    );
});
