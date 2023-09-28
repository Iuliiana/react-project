import { forwardRef, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export type AppLinkVariant = 'primary' | 'red';

interface AppLinkProps extends LinkProps {
    className?: string;
    variant?: AppLinkVariant;
    children?: ReactNode;
}

export const AppLink = forwardRef<HTMLAnchorElement, AppLinkProps>(
    (props: AppLinkProps, ref) => {
        const {
            // eslint-disable-next-line react/prop-types
            to,
            className,
            children,
            variant = 'primary',
            ...otherProps
        } = props;
        return (
            <Link
                className={classNames(cls.AppLink, {}, [
                    className,
                    cls[variant],
                ])}
                to={to}
                ref={ref}
                {...otherProps}
            >
                {children}
            </Link>
        );
    },
);
