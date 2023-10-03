import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { ArticleView } from '../../model/consts/articleViewConst';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

export const getSkeletons = (view: ArticleView, className?: string) =>
    new Array(view === ArticleView.GRID ? 15 : 5).fill(0).map((item, index) => (
        <ArticleListItemSkeleton
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            view={view}
            className={className}
        />
    ));

export const ArticlesListFooter = memo(() => (
    <div className={classNames(cls.ArticlesListFooter)} />
));
