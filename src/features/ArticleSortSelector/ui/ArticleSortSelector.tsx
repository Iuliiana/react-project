import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleSortField } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatureFlag } from '@/shared/lib/features';
import { OrderBy } from '@/shared/lib/types/order';
import { Select, SelectOption } from '@/shared/ui/deprecated/Select';
import { Listbox } from '@/shared/ui/redesigned/Popups';
import { Text } from '@/shared/ui/redesigned/Text';
import { VStack } from '@/shared/ui/Stack';

interface ArticleSortSelectorProps {
    className?: string;
    onChangeSort: (sort: ArticleSortField) => void;
    onChangeOrder: (order: OrderBy) => void;
    currentSort: ArticleSortField;
    currentOrder: OrderBy;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const {
        className,
        currentSort,
        onChangeSort,
        onChangeOrder,
        currentOrder,
    } = props;
    const { t } = useTranslation('articles');

    const sortOptions: SelectOption<ArticleSortField>[] = useMemo(
        () => [
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
        ],
        [t],
    );
    const orderOptions: SelectOption<OrderBy>[] = useMemo(
        () => [
            {
                value: 'asc',
                text: t('Возрастанию'),
            },
            {
                value: 'desc',
                text: t('Убыванию'),
            },
        ],
        [t],
    );

    return (
        <ToggleFeatureFlag
            feature="isAppRedesigned"
            on={
                <VStack
                    className={classNames('', {}, [className])}
                    gap="8"
                    data-testid="ArticleSortSelector"
                    align="start"
                >
                    <Text text={t('Сортировать по')} />
                    <Listbox<ArticleSortField>
                        options={sortOptions}
                        value={currentSort}
                        onChange={onChangeSort}
                        data-testid="ArticleSortSelect"
                    />
                    <Listbox<OrderBy>
                        options={orderOptions}
                        value={currentOrder}
                        onChange={onChangeOrder}
                        data-testid="ArticleOrderSelect"
                    />
                </VStack>
            }
            off={
                <div
                    className={classNames('', {}, [className])}
                    data-testid="ArticleSortSelector"
                >
                    <Select<ArticleSortField>
                        label={t('Сортировать по')}
                        options={sortOptions}
                        value={currentSort}
                        onChange={onChangeSort}
                        data-testid="ArticleSortSelect"
                    />
                    <Select<OrderBy>
                        label={t('Упорядочить по')}
                        options={orderOptions}
                        value={currentOrder}
                        onChange={onChangeOrder}
                        data-testid="ArticleOrderSelect"
                    />
                </div>
            }
        />
    );
});
