import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { toggleFeatureFlag } from '@/shared/lib/features';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Card as CardRedesigned } from '@/shared/ui/redesigned/Card';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/Stack';
import cls from './ArticleListItemDeprecated/ArticleListItemDeprecated.module.scss';
import { ArticleView } from '../../model/consts/articleViewConst';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

export const ArticleListItemSkeleton = memo(
    (props: ArticleListItemSkeletonProps) => {
        const { className, view } = props;

        const Skeleton = toggleFeatureFlag({
            name: 'isAppRedesigned',
            off: () => SkeletonDeprecated,
            on: () => SkeletonRedesigned,
        });

        const Card = toggleFeatureFlag({
            name: 'isAppRedesigned',
            off: () => CardDeprecated,
            on: () => CardRedesigned,
        });

        if (view === ArticleView.LIST) {
            return (
                <Card
                    className={classNames(cls.ArticleListItemTypeList, {}, [
                        className,
                    ])}
                >
                    <div className={cls.header}>
                        <div className={cls.headerInfo}>
                            <div className={cls.headerInfoUser}>
                                <Skeleton
                                    className={cls.headerInfoUserAvatar}
                                    width={32}
                                    height={32}
                                    radius="50%"
                                />
                                <Skeleton width={50} height={16} />
                            </div>
                            <Skeleton width={50} height={16} />
                        </div>
                        <Skeleton
                            width={300}
                            height={24}
                            className={cls.mBottomSkeleton}
                        />
                        <Skeleton
                            width={100}
                            height={16}
                            className={cls.mBottomSkeleton}
                        />
                    </div>

                    <Skeleton
                        width="100%"
                        height={200}
                        className={cls.mBottomSkeleton}
                    />

                    <Skeleton
                        width="100%"
                        height={30}
                        className={cls.mBottomSkeleton}
                    />
                    <Skeleton
                        width="100%"
                        height={50}
                        className={cls.mBottomSkeleton}
                    />

                    <div className={cls.footer}>
                        <Skeleton width={80} height={24} />
                        <Skeleton width={60} height={24} />
                    </div>
                </Card>
            );
        }

        return (
            <Card
                className={classNames(cls.ArticleItemGridCard, {}, [className])}
            >
                <Skeleton
                    width="100%"
                    height={250}
                    className={cls.mBottomSkeleton}
                />
                <VStack gap="16">
                    <HStack align="center" justify="between" max>
                        <Skeleton width={40} height={16} />
                        <Skeleton width={40} height={16} />
                    </HStack>
                    <Skeleton width="100%" height={16} />
                </VStack>
            </Card>
        );
    },
);
