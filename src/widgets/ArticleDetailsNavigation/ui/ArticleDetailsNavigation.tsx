import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleDetailsEditButton } from '@/features/ArticleDetailsEditButton';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Text } from '@/shared/ui/redesigned/Text';
import { HStack, VStack } from '@/shared/ui/Stack';

interface ArticleDetailsNavigationProps {
    className?: string;
    views?: number;
    createdAt?: string;
    username?: string;
    avatar?: string;
}

export const ArticleDetailsNavigation = memo(
    (props: ArticleDetailsNavigationProps) => {
        const { className, username, avatar, views, createdAt } = props;
        const { t } = useTranslation();
        return (
            <VStack gap="16" className={className} align="start" max>
                <ArticleDetailsEditButton />
                <Text />
                <HStack gap="8">
                    <Avatar src={avatar} alt={username} size={32} />
                    <Text text={username} bold marginBottom="0" />
                </HStack>
                <Text text={createdAt} marginBottom="0" />
                {views && (
                    <Text text={t('{{count}} просмотров', { count: views })} />
                )}
            </VStack>
        );
    },
);
