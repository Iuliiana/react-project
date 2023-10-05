import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/redesigned/Card';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleDetailsCardContainerProps {
    className?: string;
}

export const ArticleDetailsCardContainer = memo(
    (props: ArticleDetailsCardContainerProps) => {
        const { className } = props;
        const { t } = useTranslation('article-details');
        const { id } = useParams<{ id: string }>();

        if (!id) {
            return <Text title={t('Статья не найдена')} />;
        }

        return (
            <Card
                variant="dark"
                padding="24"
                className={classNames('', {}, [className])}
                max
            >
                <ArticleDetails id={id} />
            </Card>
        );
    },
);
