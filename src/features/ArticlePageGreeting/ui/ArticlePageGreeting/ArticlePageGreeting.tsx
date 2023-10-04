import React, { memo, useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { setJsonSettings, useJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { useDetectDevice } from '@/shared/hooks/useDetectDevice/useDetectDevice';
import { ToggleFeatureFlag } from '@/shared/lib/features';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Drawer } from '@/shared/ui/Drawer';
import { Modal } from '@/shared/ui/Modals';
import { Card } from '@/shared/ui/redesigned/Card';
import { Text } from '@/shared/ui/redesigned/Text';

export const ArticlePageGreeting = memo(() => {
    const { t } = useTranslation('articles');
    const [isOpen, setIsOpen] = useState(false);
    const { isVisitedArticlesPage } = useJsonSettings();
    const dispatch = useAppDispatch();
    const isMobil = useDetectDevice();

    useEffect(() => {
        if (!isVisitedArticlesPage) {
            setIsOpen(true);
            dispatch(
                setJsonSettings({
                    isVisitedArticlesPage: true,
                }),
            );
        }
    }, [dispatch, isVisitedArticlesPage]);

    const onClose = useCallback(() => {
        setIsOpen(false);
    }, []);

    const text = (
        <ToggleFeatureFlag
            feature="isAppRedesigned"
            on={
                <Card padding="32">
                    <Text
                        title={t('Страница статей')}
                        text={t('Здесь можно просматривать любые статьи')}
                    />
                </Card>
            }
            off={
                <CardDeprecated>
                    <TextDeprecated
                        title={t('Страница статей')}
                        text={t('Здесь можно просматривать любые статьи')}
                    />
                </CardDeprecated>
            }
        />
    );

    if (isMobil) {
        return (
            <Drawer onClose={onClose} isOpen={isOpen} lazy>
                {text}
            </Drawer>
        );
    }
    return (
        <Modal onClose={onClose} isOpen={isOpen} lazy>
            {text}
        </Modal>
    );
});
