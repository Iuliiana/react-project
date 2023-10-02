import React, { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleType } from '@/entities/Article';
import { ToggleFeatureFlag } from '@/shared/lib/features';
import { SelectOption } from '@/shared/ui/deprecated/Select';
import { TabItem, Tabs as TabsDeprecated } from '@/shared/ui/deprecated/Tabs';
import { Tabs } from '@/shared/ui/redesigned/Tabs';

interface ArticleTypeTabsProps {
    className?: string;
    onChangeTab: (tabItem: ArticleType) => void;
    currentType: ArticleType;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
    const { className, currentType, onChangeTab } = props;
    const { t } = useTranslation('articles');

    const tabsList: SelectOption<ArticleType>[] = useMemo(
        () => [
            {
                value: ArticleType.ALL,
                text: t('Все'),
            },
            {
                value: ArticleType.IT,
                text: t('ИТ'),
            },
            {
                value: ArticleType.SCIENCE,
                text: t('Наука'),
            },
            {
                value: ArticleType.POLICY,
                text: t('Политика'),
            },
            {
                value: ArticleType.ECONOMY,
                text: t('Экономика'),
            },
        ],
        [t],
    );

    const onChangeTabHandler = useCallback(
        (tab: TabItem) => {
            onChangeTab(tab.value as ArticleType);
        },
        [onChangeTab],
    );

    return (
        <ToggleFeatureFlag
            feature="isAppRedesigned"
            on={
                <Tabs
                    tabsList={tabsList}
                    onTabClick={onChangeTabHandler}
                    currentTab={currentType}
                    className={className}
                    direction="column"
                />
            }
            off={
                <TabsDeprecated
                    tabsList={tabsList}
                    onTabClick={onChangeTabHandler}
                    currentTab={currentType}
                    className={className}
                />
            }
        />
    );
});
