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
import { Text } from '@/shared/ui/deprecated/Text';
import cls from './ArticleList.module.scss';
import { ArticlesListFooter, getSkeletons } from './ArticlesListFooter';
import { ArticleView } from '../../model/consts/articleViewConst';
import { Article } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';

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
            <div
                className={classNames(cls.ArticleList, {}, [
                    className,
                    cls[view],
                ])}
                data-testid="ArticleList.Virtuoso"
            >
                {view === ArticleView.LIST ? (
                    <Virtuoso
                        ref={virtuosoListRef}
                        context={{ isLoading, view }}
                        style={{
                            height: 'calc(100vh - var(--head-articles-height))',
                        }}
                        data={articles}
                        endReached={onScrollEnd}
                        components={{
                            Footer: ArticlesListFooter,
                        }}
                        //    useWindowScroll
                        itemContent={(index, article) =>
                            renderArticles(article, index)
                        }
                    />
                ) : (
                    <VirtuosoGrid
                        ref={virtuosoGridRef}
                        context={{ isLoading, view }}
                        style={{
                            height: 'calc(100vh - var(--head-articles-height))',
                            width: '100%',
                        }}
                        totalCount={articles?.length}
                        data={articles}
                        listClassName={classNames(cls.grid)}
                        itemClassName={classNames(cls.ArticleItem)}
                        itemContent={(index, article) =>
                            renderArticles(article, index)
                        }
                        endReached={onScrollEnd}
                        components={{
                            Footer: ArticlesListFooter,
                        }}
                        // useWindowScroll
                    />
                )}
            </div>
        );
    }
    return (
        <div
            className={classNames(cls.ArticleList, {}, [className, cls[view]])}
            data-testid="ArticleList.Normal"
        >
            {Boolean(articles?.length) && articles.map(renderArticles)}
            {isLoading && getSkeletons(view)}
        </div>
    );
});
