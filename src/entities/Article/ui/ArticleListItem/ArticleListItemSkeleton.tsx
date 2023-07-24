import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card';
import { Skeleton } from '@/shared/ui/Skeleton';
import { ArticleView } from '../../model/consts/articleViewConst';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
    className?: string,
    view: ArticleView
}

export const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {
    const { className, view } = props;

    if (view === ArticleView.LIST) {
        return (
            <Card className={classNames(cls.ArticleItem, {}, [className, cls[view]])}>
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
                    <Skeleton width={100} height={16} className={cls.mBottomSkeleton} />
                </div>

                <Skeleton width="100%" height={200} className={cls.mBottomSkeleton} />

                <Skeleton width="100%" height={30} className={cls.mBottomSkeleton} />
                <Skeleton width="100%" height={50} className={cls.mBottomSkeleton} />

                <div className={cls.footer}>
                    <Skeleton width={80} height={24} />
                    <div className={cls.view}>
                        <Skeleton width={60} height={24} />
                    </div>
                </div>
            </Card>
        );
    }

    return (
        <Card
            className={classNames(cls.ArticleItem, {}, [className, cls[view], cls.gridSkeletonItem])}
        >
            <div className={cls.img}>
                <Skeleton width="100%" height={250} />
            </div>
            <div className={cls.content}>
                <div className={classNames(cls.heading, {}, [cls.mBottomSkeleton])}>
                    <Skeleton width={120} height={16} className={cls.headingTypes} />
                    <div className={cls.view}>
                        <Skeleton width={40} height={16} className={cls.headingTypes} />
                    </div>
                </div>
                <Skeleton width="100%" height={16} className={cls.headingTypes} />
            </div>
        </Card>
    );
});
