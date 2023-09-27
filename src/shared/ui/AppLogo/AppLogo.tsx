import { memo } from 'react';
import MainLogo from '@/shared/assets/icons/logo.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLogo.module.scss';
import { Icon } from '../deprecated/Icon';

interface AppLogoProps {
    className?: string;
}

export const AppLogo = memo((props: AppLogoProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.AppLogo, {}, [className])}>
            <Icon
                Svg={MainLogo}
                width={80}
                height={80}
                className={cls.AppLogoIcon}
            />
        </div>
    );
});
