import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ArticleDetailsEditButton } from '@/features/ArticleDetailsEditButton';
import { getRouteArticles } from '@/shared/const/route';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { HStack } from '@/shared/ui/Stack';
import cls from './ArticleDetailsHeader.module.scss';
import { isCanEdit } from '../../model/selectors/article/article';

interface ArticleDetailsHeaderProps {
    className?: string;
}

export const ArticleDetailsHeader = memo((props: ArticleDetailsHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation('article-details');
    const navigate = useNavigate();
    const canEdit = useSelector(isCanEdit);

    const onBackToArticles = useCallback(() => {
        navigate(getRouteArticles());
    }, [navigate]);

    return (
        <HStack className={classNames('', {}, [className])}>
            <Button
                onClick={onBackToArticles}
                themeButton={ButtonTheme.HIGHLIGHT}
                className={cls.btnBack}
            >
                {t('Назад к списку статей')}
            </Button>

            {canEdit && <ArticleDetailsEditButton />}
        </HStack>
    );
});
