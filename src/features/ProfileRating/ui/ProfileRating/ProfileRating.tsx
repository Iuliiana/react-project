import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatureFlag } from '@/shared/lib/features';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import {
    getProfileRate,
    useSetProfileRateMutation,
} from '../../api/profileRatingApi';

export interface ProfileRatingProps {
    className?: string;
    profileId: string;
}

const ProfileRating = memo((props: ProfileRatingProps) => {
    const { className, profileId } = props;
    const { t } = useTranslation();
    const user = useSelector(getUserAuthData);
    const isCurrentUserProfile = user?.id === profileId;
    const [setProfileRate] = useSetProfileRateMutation();

    const handleSendData = useCallback(
        (stars: number, text?: string) => {
            try {
                setProfileRate({
                    rate: stars,
                    profileId,
                    userId: user?.id || '',
                    feedback: text,
                });
            } catch (e) {
                // handle error
            }
        },
        [profileId, setProfileRate, user?.id],
    );

    const onSendForm = useCallback(
        (stars: number, text?: string) => {
            handleSendData(stars, text);
        },
        [handleSendData],
    );

    const onCancel = useCallback(
        (stars: number) => {
            handleSendData(stars);
        },
        [handleSendData],
    );

    if (isCurrentUserProfile) {
        return null;
    }

    const { data, isLoading, error } = getProfileRate({
        userId: user?.id || '',
        profileId,
    });

    if (isLoading) {
        return (
            <ToggleFeatureFlag
                feature="isAppRedesigned"
                on={<Skeleton width="100%" height={150} />}
                off={<SkeletonDeprecated width="100%" height={170} />}
            />
        );
    }

    if (!data || error) {
        return null;
    }

    const rateProfile = data?.[0];

    return (
        <RatingCard
            className={classNames('', {}, [className])}
            rate={rateProfile?.rate}
            onSendForm={onSendForm}
            onCancel={onCancel}
            title={t('Оцените профиль')}
            feedbackTitle={t('Ваш отзыв о профиле')}
            hasFeedback
        />
    );
});

export default ProfileRating;
