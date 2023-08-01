import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Flex.module.scss';

export type FlexJustify = 'start' | 'center' | 'between' | 'around' | 'end';
export type FlexAlignItems = 'stretch' | 'start' | 'center' | 'end';
export type FlexGap = '4' | '8' | '16' | '24' | '32';
export type FlexDirection = 'row' | 'column';

const justifyMap: Record<FlexJustify, string> = {
    start: 'justifyStart',
    center: 'justifyCenter',
    between: 'justifyBetween',
    around: 'justifySpaceAround',
    end: 'justifyEnd',
};

const alignMap: Record<FlexAlignItems, string> = {
    start: 'alignStart',
    center: 'alignCenter',
    end: 'alignEnd',
    stretch: 'alignStretch',
};
const gapMap: Record<FlexGap, string> = {
    4: 'gap4',
    8: 'gap8',
    16: 'gap16',
    24: 'gap24',
    32: 'gap32',
};

const directionMap: Record<FlexDirection, string> = {
    row: 'directionRow',
    column: 'directionColumn',
};

type DivType = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>;

export interface FlexProps extends DivType {
    className?: string;
    children?: ReactNode;
    justify?: FlexJustify;
    align?: FlexAlignItems;
    gap?: FlexGap;
    direction: FlexDirection;
    max?: boolean;
}

export const Flex = (props: FlexProps) => {
    const {
        children,
        className,
        justify = 'between',
        align = 'center',
        gap,
        direction,
        max,
        ...otherProps
    } = props;

    const classes = [
        className,
        cls[justifyMap[justify]],
        cls[alignMap[align]],
        gap && cls[gapMap[gap]],
        cls[directionMap[direction]],
    ];

    return (
        <div
            className={classNames(cls.Flex, { [cls.max]: max }, classes)}
            {...otherProps}
        >
            {children}
        </div>
    );
};
