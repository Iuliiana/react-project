import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { AppImage } from '@/shared/ui/AppImage';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { Text } from '@/shared/ui/redesigned/Text';
import { HStack, VStack } from '@/shared/ui/Stack';
import cls from './ArticleDetailsContentRedesign.module.scss';
import { Article } from '../../..';
import { renderArticlesBlocks } from '../renderArticlesBlocks';

interface ArticleDetailsContentRedesignProps {
    isLoading?: boolean;
    error?: string;
    data?: Article;
}

export const ArticleDetailsContentRedesign = memo(
    (props: ArticleDetailsContentRedesignProps) => {
        const { error, data, isLoading } = props;
        const { t } = useTranslation('article-details');

        if (isLoading) {
            return (
                <VStack gap="16" max align="start">
                    <Skeleton width="200px" height="32px" />
                    <Skeleton width="100%" height="50px" />
                    <Skeleton width="100%" height={32} />
                    <Skeleton width="100%" height={420} />
                    <Skeleton width="100%" height={100} />
                    <Skeleton width="100%" height={200} />
                    <Skeleton width="100%" height={100} />
                    <Skeleton width="100%" height={200} />
                </VStack>
            );
        }

        if (error) {
            return (
                <Text
                    title={t('Произошла ошибка при загрузке статьи')}
                    align="center"
                />
            );
        }

        return (
            <VStack gap="16" max align="start">
                <HStack gap="8" align="center" justify="start">
                    <Avatar
                        src={data?.user?.avatar}
                        alt={data?.user?.username}
                        size={32}
                    />
                    <Text text={data?.user?.username} marginBottom="0" bold />
                    <Text text={data?.createdAt} marginBottom="0" />
                </HStack>

                <Text
                    title={data?.title}
                    size="l"
                    data-testid="ArticleDetails.Title"
                    marginBottom="0"
                />

                <Text title={data?.subtitle} marginBottom="0" />

                <AppImage
                    src={data?.img}
                    className={cls.appImage}
                    errorFallback={
                        <Skeleton
                            width="100%"
                            height="420px"
                            isAnimated={false}
                        />
                    }
                    isLoadingFallback={<Skeleton width="100%" height="420px" />}
                />
                {data?.blocks.map(renderArticlesBlocks)}
            </VStack>
        );
    },
);
