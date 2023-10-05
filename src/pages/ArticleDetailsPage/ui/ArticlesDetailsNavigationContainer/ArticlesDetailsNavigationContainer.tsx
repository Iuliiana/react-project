import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import {
    getArticleDetailsData,
    getArticleDetailsIsLoading,
} from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/redesigned/Card';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { ArticleDetailsNavigation } from '@/widgets/ArticleDetailsNavigation';

interface ArticlesDetailsNavigationContainerProps {
    className?: string;
}

export const ArticlesDetailsNavigationContainer = memo(
    (props: ArticlesDetailsNavigationContainerProps) => {
        const { className } = props;
        const article = useSelector(getArticleDetailsData);
        const isLoading = useSelector(getArticleDetailsIsLoading);

        if (isLoading) {
            return <Skeleton width={200} height={268} radius="36px" />;
        }

        if (!article) {
            return null;
        }

        return (
            <Card
                className={classNames('', {}, [className])}
                variant="dark"
                padding="24"
                max
            >
                <ArticleDetailsNavigation
                    createdAt={article.createdAt}
                    views={article.views}
                    username={article.user.username}
                    avatar={article.user?.avatar}
                />
            </Card>
        );
    },
);
