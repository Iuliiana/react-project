import { CSSProperties, memo, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string;
    width?: string | number;
    height?: string | number;
    radius?: string;
    isAnimated?: boolean;
}

/**
 * @deprecated
 * Этот компонент устарел и больше не поддерживается
 */
export const Skeleton = memo((props: SkeletonProps) => {
    const { className, width, height, radius, isAnimated = true } = props;

    const styles = useMemo<CSSProperties>(
        () => ({
            width,
            height,
            borderRadius: radius,
        }),
        [height, radius, width],
    );

    return (
        <div
            className={classNames(cls.Skeleton, { [cls.static]: !isAnimated }, [
                className,
            ])}
            style={styles}
        />
    );
});
