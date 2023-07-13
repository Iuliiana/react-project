import { memo, ReactNode, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card, CardTheme } from '../Card/Card';
import cls from './Tabs.module.scss';

export interface TabItem {
    value: string,
    text: ReactNode
}

interface TabsProps {
    className?: string,
    tabsList: TabItem[],
    onTabClick: (tab: TabItem) => void,
    currentTab: string
}

export const Tabs = memo((props: TabsProps) => {
    const {
        className, currentTab, tabsList, onTabClick,
    } = props;

    const onClickTabHandler = useCallback((tab: TabItem) => () => {
        onTabClick(tab);
    }, [onTabClick]);

    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabsList.map((item) => (
                <Card
                    onClick={onClickTabHandler(item)}
                    theme={currentTab === item.value ? CardTheme.OUTLINE : CardTheme.STANDARD}
                    className={classNames(cls.TabItem)}
                    key={item.value}
                >
                    {item.text}
                </Card>
            ))}
        </div>
    );
});
