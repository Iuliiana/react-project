import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './NavBar.module.scss'
import {AppLink} from "shared/ui/AppLink/AppLink";

interface NavBarProps {
    className?: string
}

export const NavBar = (props: NavBarProps) => {
    const {className} = props;
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.navLinks}>
                <AppLink to={'/'} className={cls.navLinksItem}>Home</AppLink>
                <AppLink to={'/about'}>About</AppLink>
            </div>
        </div>

    );
};


