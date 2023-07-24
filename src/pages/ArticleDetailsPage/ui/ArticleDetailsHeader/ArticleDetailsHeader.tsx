import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getArticleDetailsData } from '@/entities/Article';
import { RoutePath } from '@/shared/const/route';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';
import cls from './ArticleDetailsHeader.module.scss';
import { isCanEdit } from '../../model/selectors/article/article';

interface ArticleDetailsHeaderProps {
    className?: string,
}

export const ArticleDetailsHeader = memo((props: ArticleDetailsHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation('article-details');
    const navigate = useNavigate();
    const canEdit = useSelector(isCanEdit);
    const article = useSelector(getArticleDetailsData);

    const onBackToArticles = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        navigate(`${RoutePath.articles_details}${article?.id}/edit`);
    }, [article?.id, navigate]);

    return (
        <HStack className={classNames('', {}, [className])}>
            <Button
                onClick={onBackToArticles}
                themeButton={ButtonTheme.HIGHLIGHT}
                className={cls.btnBack}
            >
                {t('Назад к списку статей')}
            </Button>

            {
                canEdit && (
                    <Button
                        themeButton={ButtonTheme.HIGHLIGHT}
                        className={cls.btnEdit}
                        onClick={onEditArticle}
                    >
                        {t('Редактировать')}
                    </Button>
                )
            }

        </HStack>
    );
});
