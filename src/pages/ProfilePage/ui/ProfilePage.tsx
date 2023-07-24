import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import {
    EditableProfileCard,
} from '@/features/EditableProfileCard';
import { Text } from '@/shared/ui/Text';
import { ProfileRating } from '@/features/ProfileRating';

interface ProfilePageProps {
    className?: string,
}

const ProfilePage = memo((props:ProfilePageProps) => {
    const { className } = props;
    const { id } = useParams<{id : string}>();
    const { t } = useTranslation('profile');

    if (!id) {
        return <Text title={t('Профиль не найден')} />;
    }

    return (
        <Page className={classNames('', {}, [className])}>
            <EditableProfileCard id={id} />
            <ProfileRating profileId={id} />
        </Page>
    );
});
export default ProfilePage;
