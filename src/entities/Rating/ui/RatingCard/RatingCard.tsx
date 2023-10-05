import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDetectDevice } from '@/shared/hooks/useDetectDevice/useDetectDevice';
import { classNames } from '@/shared/lib/classNames/classNames';
import { toggleFeatureFlag, ToggleFeatureFlag } from '@/shared/lib/features';
import { TestsProps } from '@/shared/lib/types/tests';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Drawer } from '@/shared/ui/Drawer';
import { Modal } from '@/shared/ui/Modals';
import { Button } from '@/shared/ui/redesigned/Button';
import { Input } from '@/shared/ui/redesigned/Input';
import { Text } from '@/shared/ui/redesigned/Text';
import { HStack, VStack } from '@/shared/ui/Stack';
import { StarRating } from '@/shared/ui/StarRating';
import cls from './RatingCard.module.scss';

interface RatingCardProps extends TestsProps {
    className?: string;
    title?: string;
    hasFeedback?: boolean;
    feedbackTitle?: string;
    onCancel?: (stars: number) => void;
    onSendForm?: (stars: number, text?: string) => void;
    rate?: number;
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
        'data-testid': dataTestId = 'RatingCard',
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

    const onSelect = useCallback(
        (starCount: number) => {
            setStarsCount(starCount);
            if (hasFeedback) {
                setIsShowModel(true);
            } else {
                onSendForm?.(starCount);
            }
        },
        [hasFeedback, onSendForm],
    );

    const onSendFormHandler = useCallback(() => {
        onSendForm?.(starsCount, feedbackInput);
        setFeedbackInput('');
        setIsShowModel(false);
    }, [feedbackInput, onSendForm, starsCount]);

    const inputProps = {
        autoFocus: true,
        value: feedbackInput,
        onChange: setFeedbackInput,
        required: hasFeedback,
        'data-testid': `${dataTestId}.Input`,
    };

    const formContent = (
        <ToggleFeatureFlag
            feature="isAppRedesigned"
            on={
                <>
                    <Text title={feedbackTitle} align="center" />
                    <Input {...inputProps} labelText={t('Ваш отзыв')} />
                </>
            }
            off={
                <>
                    <TextDeprecated title={feedbackTitle} align="center" />
                    <InputDeprecated
                        {...inputProps}
                        placeholder={t('Ваш отзыв')}
                    />
                </>
            }
        />
    );

    const rootClassname = toggleFeatureFlag({
        name: 'isAppRedesigned',
        on: () => cls.RatingCardRedesigned,
        off: () => cls.RatingCard,
    });

    return (
        <VStack
            className={classNames(rootClassname, {}, [className])}
            align="center"
            gap="16"
            data-testid={dataTestId}
        >
            <ToggleFeatureFlag
                feature="isAppRedesigned"
                on={
                    <Text title={starsCount ? t('Спасибо за оценку') : title} />
                }
                off={
                    <TextDeprecated
                        title={starsCount ? t('Спасибо за оценку') : title}
                    />
                }
            />

            <StarRating
                onSelect={onSelect}
                selectesStars={starsCount}
                size={40}
                data-testid={`${dataTestId}.StarRating`}
            />

            {!isMobilDevice && (
                <Modal
                    isOpen={isShowModel}
                    className={cls.RatingCardModalForm}
                    onClose={cancelHandle}
                    lazy
                >
                    <VStack max align="stretch" gap="24">
                        {formContent}

                        <ToggleFeatureFlag
                            feature="isAppRedesigned"
                            on={
                                <HStack
                                    max
                                    gap="16"
                                    justify="center"
                                    align="stretch"
                                >
                                    <Button
                                        variant="cancel"
                                        onClick={cancelHandle}
                                        max
                                    >
                                        {t('Отменить')}
                                    </Button>
                                    <Button
                                        variant="save"
                                        onClick={onSendFormHandler}
                                        data-testid={`${dataTestId}.Button`}
                                        max
                                    >
                                        {t('Отправить')}
                                    </Button>
                                </HStack>
                            }
                            off={
                                <>
                                    <ButtonDeprecated
                                        themeButton={
                                            ButtonTheme.BACKGROUND_INVERTRD
                                        }
                                        onClick={onSendFormHandler}
                                        data-testid={`${dataTestId}.Button`}
                                    >
                                        {t('Отправить')}
                                    </ButtonDeprecated>
                                    <ButtonDeprecated
                                        themeButton={ButtonTheme.CANCEL}
                                        onClick={cancelHandle}
                                    >
                                        {t('Отменить')}
                                    </ButtonDeprecated>
                                </>
                            }
                        />
                    </VStack>
                </Modal>
            )}
            {isMobilDevice && (
                <Drawer isOpen={isShowModel} onClose={cancelHandle}>
                    <VStack
                        className={cls.RatingCardModalForm}
                        max
                        align="stretch"
                        gap="24"
                    >
                        {formContent}

                        <ToggleFeatureFlag
                            feature="isAppRedesigned"
                            on={
                                <Button
                                    variant="save"
                                    onClick={onSendFormHandler}
                                    data-testid={`${dataTestId}.Button`}
                                    max
                                >
                                    {t('Отправить')}
                                </Button>
                            }
                            off={
                                <ButtonDeprecated
                                    themeButton={
                                        ButtonTheme.BACKGROUND_INVERTRD
                                    }
                                    onClick={onSendFormHandler}
                                >
                                    {t('Отправить')}
                                </ButtonDeprecated>
                            }
                        />
                    </VStack>
                </Drawer>
            )}
        </VStack>
    );
});
