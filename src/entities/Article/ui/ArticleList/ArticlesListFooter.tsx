import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleViewType } from 'entities/Article';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';

export const getSkeletons = (view: ArticleViewType) => new Array(view === ArticleViewType.GRID ? 15 : 5)
    .fill(0)
    .map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <ArticleListItemSkeleton key={index} view={view} />
    ));

export const ArticlesListFooter = memo<FC<{ context?: { isLoading?: boolean; view: ArticleViewType}| undefined}>>(
    ({ context }: { context?: { isLoading?: boolean; view: ArticleViewType } | undefined}) => {
        // @ts-ignore
        const { isLoading, view } = context;
        return (
            <div className={classNames(cls.ArticlesListFooter, {}, [cls[view]])}>
                { isLoading ? getSkeletons(view) : '' }
            </div>
        );
    },
);
