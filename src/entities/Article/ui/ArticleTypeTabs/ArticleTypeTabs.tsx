import React, { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { SelectOption } from '@/shared/ui/Select';
import { TabItem, Tabs } from '@/shared/ui/Tabs';
import { ArticleType } from '../../model/consts/articleTypeConst';

interface ArticleTypeTabsProps {
    className?: string,
    onChangeTab: (tabItem: ArticleType) => void,
    currentType: ArticleType
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
    const { className, currentType, onChangeTab } = props;
    const { t } = useTranslation('articles');

    const tabsList:SelectOption[] = useMemo(() => [
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
    ], [t]);

    const onChangeTabHandler = useCallback((tab: TabItem) => {
        onChangeTab(tab.value as ArticleType);
    }, [onChangeTab]);

    return (
        <Tabs
            tabsList={tabsList}
            onTabClick={onChangeTabHandler}
            currentTab={currentType}
            className={className}
        />
    );
});
