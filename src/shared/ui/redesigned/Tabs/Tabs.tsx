import { memo, ReactNode, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Tabs.module.scss';
import {
    Flex,
    FlexAlignItems,
    FlexDirection,
    FlexGap,
    FlexJustify,
} from '../../Stack/Flex/Flex';
import { Card } from '../Card/Card';

export interface TabItem {
    value: string;
    text: ReactNode;
}

interface TabsProps {
    className?: string;
    tabsList: TabItem[];
    onTabClick: (tab: TabItem) => void;
    currentTab: string;
    direction?: FlexDirection;
    justify?: FlexJustify;
    align?: FlexAlignItems;
    gap?: FlexGap;
}

export const Tabs = memo((props: TabsProps) => {
    const {
        className,
        currentTab,
        tabsList,
        onTabClick,
        gap = '8',
        direction = 'row',
        justify = 'between',
        align = 'start',
    } = props;

    const onClickTabHandler = useCallback(
        (tab: TabItem) => () => {
            onTabClick(tab);
        },
        [onTabClick],
    );

    return (
        <Flex
            direction={direction}
            justify={justify}
            gap={gap}
            align={align}
            className={classNames(cls.Tabs, {}, [className])}
        >
            {tabsList.map((item) => (
                <Card
                    onClick={onClickTabHandler(item)}
                    variant={currentTab === item.value ? 'light' : 'standard'}
                    className={classNames(cls.TabItem)}
                    key={item.value}
                >
                    {item.text}
                </Card>
            ))}
        </Flex>
    );
});
