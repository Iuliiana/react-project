import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

type ButtonVariant = 'clear' | 'save' | 'cancel';
type ButtonSize = 's' | 'm' | 'l' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ButtonVariant;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    children: ReactNode;
    fullWidth?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (props, ref) => {
        const {
            className,
            children,
            variant = 'clear',
            square,
            size = 'm',
            disabled,
            fullWidth,
            ...otherProps
        } = props;

        const mods: Mods = {
            [cls.square]: square,
            [cls[size]]: true,
            [cls.disabled]: disabled,
            [cls.fullWidth]: fullWidth,
        };

        return (
            <button
                type="button"
                className={classNames(cls.Button, mods, [
                    className,
                    cls[variant],
                ])}
                ref={ref}
                disabled={disabled}
                {...otherProps}
            >
                {children}
            </button>
        );
    },
);