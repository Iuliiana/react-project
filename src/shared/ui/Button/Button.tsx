import {ButtonHTMLAttributes, FC} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear'
}


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    themeButton?: ThemeButton
}

export const Button: FC<ButtonProps> = (props) => {
    const {className, children, themeButton = ThemeButton.CLEAR, ...otherProps} = props;
    return (
        <button
            className={classNames(cls.Button, {}, [className, cls[themeButton]])}
            {...otherProps}>
            {children}
        </button>
    );
};
