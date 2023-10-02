import { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

type CardVariant = 'outline' | 'standard' | 'light';
type CardPadding = '0' | '8' | '16' | '24' | '32';

const cardPaddingMap: Record<CardPadding, string> = {
    '0': 'p-0',
    '8': 'p-8',
    '16': 'p-16',
    '24': 'p-24',
    '32': 'p-32',
};
interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    variant?: CardVariant;
    padding?: CardPadding;
    max?: boolean;
}
export const Card = memo((props: CardProps) => {
    const {
        className,
        children,
        variant = 'standard',
        padding = '16',
        max,
        ...otherProps
    } = props;

    const paddingClass = cardPaddingMap[padding];
    const additionalClasses = [className, cls[paddingClass], cls[variant]];

    return (
        <div
            className={classNames(
                cls.Card,
                { [cls.max]: max },
                additionalClasses,
            )}
            {...otherProps}
        >
            {children}
        </div>
    );
});
