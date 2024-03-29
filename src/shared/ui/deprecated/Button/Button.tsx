import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    CANCEL = 'cancel',
    SQUARE = 'square',
    BACKGROUND = 'background',
    BACKGROUND_INVERTRD = 'backgroundInverted',
    HIGHLIGHT = 'highlight',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    themeButton?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    children: ReactNode;
}

/**
 * @deprecated
 * Этот компонент устарел и больше не поддерживается
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (props, ref) => {
        const {
            className,
            children,
            themeButton = ButtonTheme.CLEAR,
            square,
            size = ButtonSize.M,
            ...otherProps
        } = props;

        const mods: Mods = {
            [cls.square]: square,
            [cls[size]]: true,
        };

        return (
            <button
                type="button"
                className={classNames(cls.Button, mods, [
                    className,
                    cls[themeButton],
                ])}
                ref={ref}
                {...otherProps}
            >
                {children}
            </button>
        );
    },
);
