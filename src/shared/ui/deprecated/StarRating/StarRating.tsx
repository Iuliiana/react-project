import { memo, useState } from 'react';
import Star from '@/shared/assets/icons/star.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TestsProps } from '@/shared/lib/types/tests';
import cls from './StarRating.module.scss';
import { Icon } from '../Icon/Icon';

interface StarRatingProps extends TestsProps {
    className?: string;
    onSelect?: (starCount: number) => void;
    selectesStars?: number;
    size?: number;
}

const stars: number[] = [1, 2, 3, 4, 5];

/**
 * @deprecated
 * Этот компонент устарел и больше не поддерживается
 */
export const StarRating = memo((props: StarRatingProps) => {
    const {
        className,
        onSelect,
        size = 25,
        selectesStars = 0,
        'data-testid': dataTestId = 'StarRating',
    } = props;
    const [isSelected, setIsSelected] = useState(Boolean(selectesStars));
    const [currentStar, setCurrentStar] = useState(selectesStars);
    const onHover = (star: number) => () => {
        if (!isSelected) {
            setCurrentStar(star);
        }
    };

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStar(selectesStars);
        }
    };
    const onClickHandler = (star: number) => () => {
        if (!isSelected) {
            onSelect?.(star);
            setIsSelected(true);
            setCurrentStar(star);
        }
    };

    return (
        <div
            className={classNames(cls.StarRating, {}, [className])}
            data-testid={dataTestId}
        >
            {stars.map((starNumber) => (
                <Icon
                    Svg={Star}
                    width={size}
                    height={size}
                    key={starNumber}
                    className={classNames(cls.StarRatingItem, {
                        [cls.hovered]: starNumber <= currentStar,
                        [cls.selected]: isSelected,
                    })}
                    onClick={onClickHandler(starNumber)}
                    onMouseEnter={onHover(starNumber)}
                    onMouseLeave={onLeave}
                    data-testid={`${dataTestId}.${starNumber}`}
                    data-selected={starNumber <= currentStar}
                />
            ))}
        </div>
    );
});