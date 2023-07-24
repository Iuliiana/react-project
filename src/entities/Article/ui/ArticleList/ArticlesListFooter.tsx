import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { ArticleView } from '../../model/consts/articleViewConst';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

export const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.GRID ? 15 : 5)
    .fill(0)
    .map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <ArticleListItemSkeleton key={index} view={view} />
    ));

export const ArticlesListFooter = memo(
    ({ context }: { context?: { isLoading?: boolean; view: ArticleView } | undefined}) => {
        // @ts-ignore
        const { isLoading, view } = context;
        return (
            <div className={classNames(cls.ArticlesListFooter, {}, [cls[view]])}>
                { isLoading ? getSkeletons(view) : '' }
            </div>
        );
    },
);
