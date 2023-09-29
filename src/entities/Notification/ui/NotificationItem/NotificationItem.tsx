import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { toggleFeatureFlag, ToggleFeatureFlag } from '@/shared/lib/features';
import { Card as CardDeprecated, CardTheme } from '@/shared/ui/deprecated/Card';
import {
    Text as TextCardDeprecated,
    TextSize,
} from '@/shared/ui/deprecated/Text';
import { Card } from '@/shared/ui/redesigned/Card';
import { Text } from '@/shared/ui/redesigned/Text';
import cls from './NotificationItem.module.scss';
import { Notification } from '../../model/types/notification';

interface NotificationItemProps {
    className?: string;
    item: Notification;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
    const { className, item } = props;

    const content = (
        <ToggleFeatureFlag
            feature="isAppRedesigned"
            on={
                <Card
                    variant="standard"
                    className={classNames(cls.NotificationItemRedesigned, {}, [
                        className,
                    ])}
                >
                    <Text title={item.title} text={item.description} size="m" />
                </Card>
            }
            off={
                <CardDeprecated
                    theme={CardTheme.OUTLINE}
                    className={classNames(cls.NotificationItem, {}, [
                        className,
                    ])}
                >
                    <TextCardDeprecated
                        title={item.title}
                        text={item.description}
                        size={TextSize.M}
                    />
                </CardDeprecated>
            }
        />
    );

    if (item.href) {
        return (
            <a
                className={toggleFeatureFlag({
                    name: 'isAppRedesigned',
                    on: () => cls.linkRedesigned,
                    off: () => cls.link,
                })}
                target="_blank"
                href={item.href}
                rel="noreferrer"
            >
                {content}
            </a>
        );
    }

    return content;
});
