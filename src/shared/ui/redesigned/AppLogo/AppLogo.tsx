import { memo } from 'react';
import MainLogo from '@/shared/assets/icons/logo.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLogo.module.scss';

interface AppLogoProps {
    className?: string;
    size?: string;
    color?: string;
}

export const AppLogo = memo((props: AppLogoProps) => {
    const { className, size = 60, color = '#000' } = props;

    return (
        <div className={classNames(cls.AppLogo, {}, [className])}>
            <MainLogo
                width={size}
                height={size}
                fill={color}
                className={cls.AppLogoIcon}
            />
            <div className={cls.logoEyes} />
        </div>
    );
});
