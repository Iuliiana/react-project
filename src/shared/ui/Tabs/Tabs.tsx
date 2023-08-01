import { memo, ReactNode, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Tabs.module.scss';
import { Card, CardTheme } from '../Card/Card';

export interface TabItem {
    value: string;
    text: ReactNode;
}

interface TabsProps {
    className?: string;
    tabsList: TabItem[];
    onTabClick: (tab: TabItem) => void;
    currentTab: string;
}

export const Tabs = memo((props: TabsProps) => {
    const { className, currentTab, tabsList, onTabClick } = props;

    const onClickTabHandler = useCallback(
        (tab: TabItem) => () => {
            onTabClick(tab);
        },
        [onTabClick],
    );

    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabsList.map((item) => (
                <Card
                    onClick={onClickTabHandler(item)}
                    theme={
                        currentTab === item.value
                            ? CardTheme.OUTLINE
                            : CardTheme.STANDARD
                    }
                    className={classNames(cls.TabItem)}
                    key={item.value}
                >
                    {item.text}
                </Card>
            ))}
        </div>
    );
});
