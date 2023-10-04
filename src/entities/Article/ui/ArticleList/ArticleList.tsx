import React, { memo, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
    Virtuoso,
    VirtuosoGrid,
    VirtuosoGridHandle,
    VirtuosoHandle,
} from 'react-virtuoso';
import { ARTICLE_SCROLL_TO_INDEX_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { classNames } from '@/shared/lib/classNames/classNames';
import { toggleFeatureFlag } from '@/shared/lib/features';
import { Text } from '@/shared/ui/deprecated/Text';
import cls from './ArticleList.module.scss';
import { ArticlesListFooter, getSkeletons } from './ArticlesListFooter';
import { ArticleView } from '../../model/consts/articleViewConst';
import { Article } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    view?: ArticleView;
    isLoading?: boolean;
    target?: string;
    onScrollEnd?: () => void;
    isVirtuoso?: boolean;
}

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        target,
        onScrollEnd,
        view = ArticleView.LIST,
        isVirtuoso = false,
    } = props;

    const [articleIndex, setArticleIndex] = useState<number>(0);
    const virtuosoListRef = useRef<VirtuosoHandle>(null);
    const virtuosoGridRef = useRef<VirtuosoGridHandle>(null);
    const { t } = useTranslation('articles');

    useEffect(() => {
        const index = localStorage.getItem(
            ARTICLE_SCROLL_TO_INDEX_LOCALSTORAGE_KEY,
        );
        if (index) {
            setArticleIndex(Number(index));
        }
    }, []);

    useEffect(() => {
        let timer: ReturnType<typeof setTimeout>;
        const currentRef =
            view === ArticleView.GRID ? virtuosoGridRef : virtuosoListRef;
        if (articleIndex !== 0) {
            timer = setTimeout(() => {
                if (currentRef.current) {
                    currentRef.current.scrollToIndex(articleIndex);
                }
            }, 100);
        }

        return () => clearTimeout(timer);
    }, [articleIndex, view]);

    const renderArticles = (
        article: Article,
        isLoading?: boolean,
        index?: number,
    ) => {
        if (isLoading) {
            return <ArticleListItemSkeleton key={index} view={view} />;
        }
        return (
            <ArticleListItem
                key={article.id}
                article={article}
                view={view}
                target={target}
                index={index}
                className={cls.ArticleListItem}
            />
        );
    };

    const classNamePage = toggleFeatureFlag({
        name: 'isAppRedesigned',
        on: () =>
            classNames(cls.ArticleList, {}, [
                className,
                cls.ArticleListRedesigned,
                cls[view],
            ]),
        off: () => classNames(cls.ArticleList, {}, [className, cls[view]]),
    });

    if (!isLoading && articles?.length === 0) {
        return (
            <div className={classNamePage}>
                <Text title={t('Статьи не найдены')} />
            </div>
        );
    }

    if (isVirtuoso) {
        if (isLoading && articles?.length === 0) {
            return (
                <div
                    className={classNamePage}
                    data-testid="ArticleList.Virtuoso"
                >
                    {getSkeletons(view, cls.ArticleListItem)}
                </div>
            );
        }
        return (
            <div className={classNamePage} data-testid="ArticleList.Virtuoso">
                {view === ArticleView.LIST ? (
                    <Virtuoso
                        ref={virtuosoListRef}
                        context={{ isLoading }}
                        style={{
                            height: 'calc(100vh - var(--head-articles-height))',
                        }}
                        data={articles}
                        endReached={onScrollEnd}
                        components={{
                            Footer: ArticlesListFooter,
                        }}
                        useWindowScroll={toggleFeatureFlag({
                            name: 'isAppRedesigned',
                            on: () => true,
                            off: () => false,
                        })}
                        itemContent={(index, article, { isLoading }) =>
                            renderArticles(article, isLoading, index)
                        }
                    />
                ) : (
                    <VirtuosoGrid
                        ref={virtuosoGridRef}
                        context={{ isLoading }}
                        style={{
                            height: 'calc(100vh - var(--head-articles-height))',
                            width: '100%',
                        }}
                        totalCount={articles?.length}
                        data={articles}
                        listClassName={classNames(cls.ArticleListGrid)}
                        itemClassName={classNames(cls.ArticleListGridItem)}
                        itemContent={(index, article, { isLoading }) =>
                            renderArticles(article, isLoading, index)
                        }
                        endReached={onScrollEnd}
                        components={{
                            Footer: ArticlesListFooter,
                        }}
                        useWindowScroll={toggleFeatureFlag({
                            name: 'isAppRedesigned',
                            on: () => true,
                            off: () => false,
                        })}
                    />
                )}
            </div>
        );
    }
    return (
        <div className={classNamePage} data-testid="ArticleList.Normal">
            {Boolean(articles?.length) &&
                articles.map((article) => renderArticles(article))}
            {isLoading && getSkeletons(view)}
        </div>
    );
});
