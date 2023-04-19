import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Article, ArticleViewType } from '../../model/types/article';
import cls from './ArticleList.module.scss';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
    className?: string,
    articles: Article[],
    view?: ArticleViewType,
    isLoading?: boolean,
}

const getSkeletons = (view: ArticleViewType) => new Array(view === ArticleViewType.GRID ? 15 : 5)
    .fill(0)
    .map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <ArticleListItemSkeleton key={index} view={view} />
    ));

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className, articles, isLoading, view = ArticleViewType.LIST,
    } = props;

    const { t } = useTranslation('articles');

    const renderArticles = (article: Article) => <ArticleListItem key={article.id} article={article} view={view} />;

    if (!isLoading && articles.length === 0) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text title={t('Статьи не найдены')} />
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
