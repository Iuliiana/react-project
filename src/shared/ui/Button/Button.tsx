import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    SQUARE = 'square',
    BACKGROUND = 'background',
    BACKGROUND_INVERTRD = 'backgroundInverted',
}

export enum ButtonSize {
    M='size_m',
    L='size_l',
    XL='size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    themeButton?: ButtonTheme,
    square?: boolean,
    size?:ButtonSize,
    children: ReactNode
}

export const Button = memo((props: ButtonProps) => {
    const {
        className, children, themeButton = ButtonTheme.CLEAR, square, size, ...otherProps
    } = props;

    const mods:Record<string, boolean> = {
        [cls.square]: square,
    };

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, [className, cls[themeButton], cls[size]])}
            {...otherProps}
        >
            {children}
        </button>
    );
});
