import React, { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string,
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
        setCollapsed((prevState) => !prevState);
    };
    return (

        <div className={
            classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])
        }
        >
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <button type="button" onClick={toggleCollapsed}>
                toggleCollapsed
            </button>
            <div className={cls.switcherContainer}>
                <LangSwitcher />
                <ThemeSwitcher />
            </div>
        </div>
    );
};
