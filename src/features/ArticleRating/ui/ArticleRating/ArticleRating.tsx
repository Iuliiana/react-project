import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '@/entities/Article';
import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { ToggleFeatureFlag } from '@/shared/lib/features';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import {
    getArticleRateByUser,
    useSetArticleRateMutation,
} from '../../api/articleRatingApi';

export interface ArticleRatingProps {
    className?: string;
    articleId: string;
}

const ArticleRating = memo((props: ArticleRatingProps) => {
    const { className, articleId } = props;
    const { t } = useTranslation();
    const userData = useSelector(getUserAuthData);
    const { data, isLoading } = getArticleRateByUser({
        articleId,
        userId: userData?.id || '',
    });
    const rate = data?.[0];
    const [setArticleRate] = useSetArticleRateMutation();
    const isLoadingArticleDetail = useSelector(getArticleDetailsIsLoading);
    const errorArticleDetail = useSelector(getArticleDetailsError);

    const handleSendForm = useCallback(
        (stars: number, text?: string) => {
            try {
                setArticleRate({
                    articleId,
                    userId: userData?.id || '',
                    rate: stars,
                    feedback: text,
                });
            } catch (e) {
                // handle error
            }
        },
        [articleId, setArticleRate, userData?.id],
    );

    const onCancel = useCallback(
        (stars: number) => {
            handleSendForm(stars);
        },
        [handleSendForm],
    );

    const onSendForm = useCallback(
        (stars: number, text?: string) => {
            handleSendForm(stars, text);
        },
        [handleSendForm],
    );

    if (!isLoadingArticleDetail && errorArticleDetail) {
        return null;
    }

    if (isLoading) {
        return (
            <ToggleFeatureFlag
                feature="isAppRedesigned"
                on={<Skeleton height={170} width="100%" />}
                off={<SkeletonDeprecated height={170} width="100%" />}
            />
        );
    }

    return (
        <RatingCard
            className={className}
            title={t('Оцените статью')}
            feedbackTitle={t('Ваш отзыв о статье')}
            hasFeedback
            onCancel={onCancel}
            onSendForm={onSendForm}
            rate={rate?.rate}
        />
    );
});

export default ArticleRating;
