import { CSSProperties, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string,
    pic?: string,
    alt?: string,
    size?: number
}

export const Avatar = (props: AvatarProps) => {
    const {
        className, pic, alt, size,
    } = props;

    const styles = useMemo<CSSProperties>(() => ({ width: size || 100, height: size || 100 }), [size]);
    return (
        <img
            className={classNames(cls.Avatar, {}, [className])}
            src={pic}
            alt={alt}
            style={styles}
        />
    );
};
