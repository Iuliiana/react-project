import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    memo, useEffect, useRef, useState,
} from 'react';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import {
    Virtuoso, VirtuosoGrid, VirtuosoGridHandle, VirtuosoHandle,
} from 'react-virtuoso';

import { ARTICLE_SCROLL_TO_INDEX_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { ArticlesPageFilters } from 'pages/ArticlesPage';
import { Article, ArticleViewType } from '../../model/types/article';
import cls from './ArticleList.module.scss';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticlesListFooter, getSkeletons } from './ArticlesListFooter';

interface ArticleListProps {
    className?: string,
    articles: Article[],
    view?: ArticleViewType,
    isLoading?: boolean,
    target?: string,
    onScrollEnd?: () => void,
    isVirtuoso?: boolean
}

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        target,
        onScrollEnd,
        view = ArticleViewType.LIST,
        isVirtuoso = false,
    } = props;

    const [articleIndex, setArticleIndex] = useState<number>(0);
    const virtuosoListRef = useRef<VirtuosoHandle>(null);
    const virtuosoGridRef = useRef<VirtuosoGridHandle>(null);
    const { t } = useTranslation('articles');

    useEffect(() => {
        const index = localStorage.getItem(ARTICLE_SCROLL_TO_INDEX_LOCALSTORAGE_KEY);
        if (index) {
            setArticleIndex(Number(index));
        }
    }, []);

    useEffect(() => {
        let timer: ReturnType<typeof setTimeout>;
        const currentRef = (view === ArticleViewType.GRID) ? virtuosoGridRef : virtuosoListRef;
        if (articleIndex !== 0) {
            timer = setTimeout(() => {
                if (currentRef.current) {
                    currentRef.current.scrollToIndex(articleIndex);
                }
            }, 100);
        }

        return () => clearTimeout(timer);
    }, [articleIndex, view]);

    const renderArticles = (article: Article, index?: number) => (
        <ArticleListItem
            key={article.id}
            article={article}
            view={view}
            target={target}
            index={index}
        />
    );

    if (!isLoading && articles?.length === 0) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className])}>
                <Text title={t('Статьи не найдены')} />
            </div>
        );
    }

    if (isVirtuoso) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className])}>
                {
                    (view === ArticleViewType.LIST) ? (
                        <Virtuoso
                            ref={virtuosoListRef}
                            context={{ isLoading, view }}
                            style={{
                                height: 'calc(100vh - var(--navbar-height))',
                            }}
                            data={articles}
                            endReached={onScrollEnd}
                            components={{
                                Header: ArticlesPageFilters,
                                Footer: ArticlesListFooter,
                            }}
                            itemContent={(index, article) => renderArticles(article, index)}
                        />
                    ) : (
                        <VirtuosoGrid
                            ref={virtuosoGridRef}
                            context={{ isLoading, view }}
                            style={{
                                height: 'calc(100vh - var(--navbar-height))',
                                width: '100%',
                            }}
                            totalCount={articles?.length}
                            data={articles}
                            listClassName={classNames(cls.grid)}
                            itemClassName={classNames(cls.ArticleItem)}
                            itemContent={(index, article) => renderArticles(article, index)}
                            endReached={onScrollEnd}
                            components={{
                                Header: ArticlesPageFilters,
                                Footer: ArticlesListFooter,
                            }}
                        />
                    )
                }
            </div>
        );
    }
    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {
                Boolean(articles?.length) && (
                    articles.map(renderArticles)
                )
            }
            {
                isLoading && getSkeletons(view)
            }
        </div>
    );
});
