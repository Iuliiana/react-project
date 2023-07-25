import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleSortField } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { OrderBy } from '@/shared/lib/types';
import { Select, SelectOption } from '@/shared/ui/Select';

interface ArticleSortSelectorProps {
    className?: string,
    onChangeSort: (sort: ArticleSortField) => void,
    onChangeOrder: (order: OrderBy) => void,
    currentSort: ArticleSortField,
    currentOrder: OrderBy
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const {
        className, currentSort, onChangeSort, onChangeOrder, currentOrder,
    } = props;
    const { t } = useTranslation('articles');

    const sortOptions: SelectOption<ArticleSortField>[] = useMemo(() => [
        {
            value: ArticleSortField.VIEWS,
            text: t('Просмотрам'),
        },
        {
            value: ArticleSortField.TITLE,
            text: t('Заголовку'),
        },
        {
            value: ArticleSortField.CREATED,
            text: t('Дате создания'),
        },
    ], [t]);
    const orderOptions: SelectOption<OrderBy>[] = useMemo(() => [
        {
            value: 'asc',
            text: t('Возрастанию'),
        },
        {
            value: 'desc',
            text: t('Убыванию'),
        },
    ], [t]);

    return (
        <div className={classNames('', {}, [className])}>
            <Select<ArticleSortField>
                label={t('Сортировать по')}
                options={sortOptions}
                value={currentSort}
                onChange={onChangeSort}
            />
            <Select<OrderBy>
                label={t('Упорядочить по')}
                options={orderOptions}
                value={currentOrder}
                onChange={onChangeOrder}
            />
        </div>
    );
});
