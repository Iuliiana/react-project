import { CSSProperties, useMemo } from 'react';
import DefaultUserAvatar from '@/shared/assets/icons/new/Avatar.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { AppImage } from '../../AppImage';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';

interface AvatarProps {
    className?: string;
    src?: string;
    alt?: string;
    size?: number;
}

export const Avatar = (props: AvatarProps) => {
    const { className, src, alt, size = 100 } = props;

    const styles = useMemo<CSSProperties>(
        () => ({ width: size, height: size }),
        [size],
    );

    const fallback = <Skeleton width={size} height={size} radius="50%" />;
    const errorFallback = (
        <Icon width={size} height={size} Svg={DefaultUserAvatar} />
    );

    return (
        <AppImage
            className={classNames(cls.Avatar, {}, [className])}
            src={src}
            alt={alt}
            style={styles}
            isLoadingFallback={fallback}
            errorFallback={errorFallback}
        />
    );
};
