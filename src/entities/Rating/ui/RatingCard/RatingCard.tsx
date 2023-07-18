import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './RatingCard.module.scss';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text/Text';
import { Modal } from '@/shared/ui/Modals/Modal';
import { Input } from '@/shared/ui/Input/Input';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { useDetectDevice } from '@/shared/hooks/useDetectDevice/useDetectDevice';
import { Drawer } from '@/shared/ui/Drawer/Drawer';

interface RatingCardProps {
    className?: string,
    title?: string,
    hasFeedback?: boolean;
    feedbackTitle?: string,
    onCancel?: (stars: number) => void
    onSendForm?: (stars: number, text?: string) => void,
    rate?: number
}

export const RatingCard = memo((props: RatingCardProps) => {
    const {
        className,
        title,
        feedbackTitle,
        onSendForm,
        hasFeedback,
        onCancel,
        rate = 0,
    } = props;
    const { t } = useTranslation();

    const [starsCount, setStarsCount] = useState(rate);
    const [isShowModel, setIsShowModel] = useState(false);
    const [feedbackInput, setFeedbackInput] = useState('');
    const isMobilDevice = useDetectDevice();

    const cancelHandle = useCallback(() => {
        onCancel?.(starsCount);
        setIsShowModel(false);
    }, [onCancel, starsCount]);

    const onSelect = useCallback((starCount: number) => {
        setStarsCount(starCount);
        if (hasFeedback) {
            setIsShowModel(true);
        } else {
            onSendForm?.(starCount);
        }
    }, [hasFeedback, onSendForm]);

    const onSendFormHandler = useCallback(() => {
        onSendForm?.(starsCount, feedbackInput);
        setFeedbackInput('');
        setIsShowModel(false);
    }, [feedbackInput, onSendForm, starsCount]);

    const formContent = (
        <>
            <Text title={feedbackTitle} align="center" />
            <Input
                placeholder={t('Ваш отзыв')}
                autoFocus
                value={feedbackInput}
                onChange={setFeedbackInput}
                required={hasFeedback}
            />
        </>
    );

    return (
        <VStack
            className={classNames(cls.RatingCard, {}, [className])}
            align="center"
            gap="16"
        >
            <Text title={starsCount ? t('Спасибо за оценку') : title} />
            <StarRating
                onSelect={onSelect}
                selectesStars={starsCount}
                size={40}
            />
            {
                !isMobilDevice && (
                    <Modal
                        isOpen={isShowModel}
                        onClose={cancelHandle}
                        lazy
                    >
                        <VStack
                            className={cls.RatingCardModalForm}
                            max
                            align="stretch"
                            gap="24"
                        >
                            {formContent}
                            <Button
                                themeButton={ButtonTheme.BACKGROUND_INVERTRD}
                                onClick={onSendFormHandler}
                            >
                                {t('Отправить')}
                            </Button>
                            <Button
                                themeButton={ButtonTheme.CANCEL}
                                onClick={cancelHandle}
                            >
                                {t('Отменить')}
                            </Button>
                        </VStack>
                    </Modal>
                )
            }
            {
                isMobilDevice && (
                    <Drawer isOpen={isShowModel} onClose={cancelHandle}>
                        <VStack
                            className={cls.RatingCardModalForm}
                            max
                            align="stretch"
                            gap="24"
                        >
                            {formContent}
                            <Button
                                themeButton={ButtonTheme.BACKGROUND_INVERTRD}
                                onClick={onSendFormHandler}
                            >
                                {t('Отправить')}
                            </Button>
                        </VStack>
                    </Drawer>
                )
            }
        </VStack>
    );
});
