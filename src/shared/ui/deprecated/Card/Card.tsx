import { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export enum CardTheme {
    OUTLINE = 'outline',
    STANDARD = 'standard',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    theme?: CardTheme;
}

/**
 * @deprecated
 * Этот компонент устарел и больше не поддерживается
 */
export const Card = memo((props: CardProps) => {
    const {
        className,
        children,
        theme = CardTheme.STANDARD,
        ...otherProps
    } = props;
    return (
        <div
            className={classNames(cls.Card, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </div>
    );
});
