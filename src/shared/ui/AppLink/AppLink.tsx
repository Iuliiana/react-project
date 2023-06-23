import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { forwardRef, ReactNode } from 'react';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    NORMAL = 'normal',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string,
    theme?: AppLinkTheme,
    children?: ReactNode
}

export const AppLink = forwardRef<HTMLAnchorElement, AppLinkProps>((props: AppLinkProps, ref) => {
    const {
        // eslint-disable-next-line react/prop-types
        to, className, children, theme = AppLinkTheme.PRIMARY, ...otherProps
    } = props;
    return (
        <Link
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            to={to}
            ref={ref}
            {...otherProps}
        >
            {children}
        </Link>
    );
});
