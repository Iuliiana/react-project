import React, { memo, useState } from 'react';
import Star from '@/shared/assets/icons/star.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatureFlag, toggleFeatureFlag } from '@/shared/lib/features';
import { TestsProps } from '@/shared/lib/types/tests';
import cls from './StarRating.module.scss';
import { Icon as IconDeprecated } from '../deprecated/Icon/Icon';
import { Icon } from '../redesigned/Icon/Icon';

interface StarRatingProps extends TestsProps {
    className?: string;
    onSelect?: (starCount: number) => void;
    selectesStars?: number;
    size?: number;
}

const stars: number[] = [1, 2, 3, 4, 5];

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
            className={classNames(
                toggleFeatureFlag({
                    name: 'isAppRedesigned',
                    on: () => cls.StarRatingRedesigned,
                    off: () => cls.StarRating,
                }),
                {},
                [className],
            )}
            data-testid={dataTestId}
        >
            {stars.map((starNumber) => {
                const commonProps = {
                    className: classNames(cls.StarRatingItem, {
                        [cls.hovered]: starNumber <= currentStar,
                        [cls.selected]: isSelected,
                    }),
                    Svg: Star,
                    key: starNumber,
                    width: size,
                    height: size,
                    onMouseLeave: onLeave,
                    onMouseEnter: onHover(starNumber),
                    onClick: onClickHandler(starNumber),
                    'data-testid': `${dataTestId}.${starNumber}`,
                    'data-selected': starNumber <= currentStar,
                };

                return (
                    <ToggleFeatureFlag
                        feature="isAppRedesigned"
                        on={<Icon isClickable={!isSelected} {...commonProps} />}
                        off={<IconDeprecated {...commonProps} />}
                        key={starNumber}
                    />
                );
            })}
        </div>
    );
});
