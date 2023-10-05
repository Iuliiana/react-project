import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getArticleDetailsData } from '@/entities/Article';
import { getRouteArticlesEdit } from '@/shared/const/route';
import { ToggleFeatureFlag } from '@/shared/lib/features';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Button } from '@/shared/ui/redesigned/Button';

interface ArticleDetailsEditButtonProps {
    className?: string;
}

export const ArticleDetailsEditButton = memo(
    (props: ArticleDetailsEditButtonProps) => {
        const { className } = props;
        const { t } = useTranslation('article-details');
        const navigate = useNavigate();
        const article = useSelector(getArticleDetailsData);

        const onEditArticle = useCallback(() => {
            if (article?.id) {
                navigate(getRouteArticlesEdit(article.id));
            }
        }, [article?.id, navigate]);

        return (
            <ToggleFeatureFlag
                feature="isAppRedesigned"
                on={
                    <Button
                        className={className}
                        onClick={onEditArticle}
                        variant="outline"
                        max
                    >
                        {t('Редактировать')}
                    </Button>
                }
                off={
                    <ButtonDeprecated
                        themeButton={ButtonTheme.HIGHLIGHT}
                        className={className}
                        onClick={onEditArticle}
                    >
                        {t('Редактировать')}
                    </ButtonDeprecated>
                }
            />
        );
    },
);
