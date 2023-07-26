import { CSSProperties, useMemo } from 'react';
import DefaultUserAvatar from '@/shared/assets/icons/carbon_user-avatar-filled.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { AppImage } from '../AppImage';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';

interface AvatarProps {
    className?: string,
    pic?: string,
    alt?: string,
    size?: number
}

export const Avatar = (props: AvatarProps) => {
    const {
        className, pic, alt, size = 100,
    } = props;

    const styles = useMemo<CSSProperties>(() => ({ width: size, height: size }), [size]);
    return (
        <AppImage
            className={classNames(cls.Avatar, {}, [className])}
            src={pic}
            alt={alt}
            style={styles}
            isLoadingFallback={<Skeleton width={size} height={size} radius="50%" />}
            errorFallback={(
                <Icon
                    Svg={DefaultUserAvatar}
                    width={size}
                    height={size}
                    className={cls.Avatar}
                />
            )}
        />
    );
};
