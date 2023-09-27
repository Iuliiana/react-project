import React, { memo, useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { setJsonSettings, useJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { useDetectDevice } from '@/shared/hooks/useDetectDevice/useDetectDevice';
import { Card } from '@/shared/ui/deprecated/Card';
import { Drawer } from '@/shared/ui/deprecated/Drawer';
import { Modal } from '@/shared/ui/deprecated/Modals';
import { Text } from '@/shared/ui/deprecated/Text';

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
        <Card>
            <Text
                title={t('Страница статей')}
                text={t('Здесь можно просматривать любые статьи')}
            />
        </Card>
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
