import { forwardRef, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    NORMAL = 'normal',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
    children?: ReactNode;
}

/**
 * @deprecated
 * Этот компонент устарел и больше не поддерживается
 */
export const AppLink = forwardRef<HTMLAnchorElement, AppLinkProps>(
    (props: AppLinkProps, ref) => {
        const {
            // eslint-disable-next-line react/prop-types
            to,
            className,
            children,
            theme = AppLinkTheme.PRIMARY,
            ...otherProps
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
    },
);
