import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import CalendarIcon from '@/shared/assets/icons/calendar.svg';
import ViewsIcon from '@/shared/assets/icons/view.svg';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Icon } from '@/shared/ui/deprecated/Icon';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { Text, TextAlign, TextSize } from '@/shared/ui/deprecated/Text';
import cls from './ArticleDetailsContentDeprecated.module.scss';
import { Article } from '../../..';
import { renderArticlesBlocks } from '../renderArticlesBlocks';

interface ArticleDetailsContentDeprecatedProps {
    className?: string;
    isLoading?: boolean;
    error?: string;
    data?: Article;
}

export const ArticleDetailsContentDeprecated = memo(
    (props: ArticleDetailsContentDeprecatedProps) => {
        const { error, data, isLoading, className } = props;
        const { t } = useTranslation('article-details');

        if (isLoading) {
            return (
                <>
                    <Skeleton
                        width="200px"
                        height="200px"
                        radius="50%"
                        className={cls.avatar}
                    />
                    <Skeleton
                        width={300}
                        height={32}
                        className={cls.mBottom2Rem}
                    />
                    <Skeleton
                        width={600}
                        height={24}
                        className={cls.mBottom2Rem}
                    />
                    <Skeleton
                        width="100px"
                        height={20}
                        className={cls.articleInfo}
                    />
                    <Skeleton
                        width="100px"
                        height={20}
                        className={cls.mBottom2Rem}
                    />
                    <Skeleton
                        width="100%"
                        height={200}
                        className={cls.mBottom2Rem}
                    />
                    <Skeleton
                        width="100%"
                        height={200}
                        className={cls.mBottom2Rem}
                    />
                </>
            );
        }

        if (error) {
            return (
                <Text
                    title={t('Произошла ошибка при загрузке статьи')}
                    align={TextAlign.CENTER}
                    className={className}
                />
            );
        }

        return (
            <>
                <Avatar pic={data?.img} size={200} className={cls.avatar} />
                <Text
                    title={data?.title}
                    align={TextAlign.LEFT}
                    size={TextSize.L}
                    data-testid="ArticleDetails.Title"
                />
                <Text
                    title={data?.subtitle}
                    align={TextAlign.LEFT}
                    size={TextSize.M}
                />
                <div className={cls.articleInfo}>
                    <Icon Svg={ViewsIcon} className={cls.icon} />
                    <Text
                        className={cls.iconTitle}
                        text={String(data?.views)}
                        size={TextSize.M}
                    />
                </div>
                <div className={cls.articleInfo}>
                    <Icon Svg={CalendarIcon} className={cls.icon} />
                    <Text
                        className={cls.iconTitle}
                        text={data?.createdAt}
                        size={TextSize.M}
                    />
                </div>
                {data?.blocks.map(renderArticlesBlocks)}
            </>
        );
    },
);
