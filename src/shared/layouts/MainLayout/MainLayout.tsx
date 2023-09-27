import { memo, ReactElement } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './MainLayout.module.scss';

interface MainLayoutProps {
    className?: string;
    header: ReactElement;
    sidebar: ReactElement;
    toolbar?: ReactElement;
    content: ReactElement;
}

export const MainLayout = memo((props: MainLayoutProps) => {
    const { header, sidebar, content, toolbar, className } = props;
    return (
        <div className={classNames(cls.MainLayout, {}, [className])}>
            <div className={cls.sidebar}>{sidebar}</div>
            <div className={cls.content}>{content}</div>
            <div className={cls.rightbar}>
                <div className={cls.header}>{header}</div>
                <div className={cls.toolbar}>{toolbar}</div>
            </div>
        </div>
    );
});
