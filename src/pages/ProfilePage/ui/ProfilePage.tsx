import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { EditableProfileCard } from '@/features/EditableProfileCard';
import { ProfileRating } from '@/features/ProfileRating';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/deprecated/Text';
import { Card } from '@/shared/ui/redesigned/Card';
import { Page } from '@/widgets/Page';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = memo((props: ProfilePageProps) => {
    const { className } = props;
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation('profile');

    if (!id) {
        return <Text title={t('Профиль не найден')} />;
    }

    return (
        <Page
            className={classNames('', {}, [className])}
            data-testid="ProfilePage"
        >
            <Card max variant="dark" padding="24">
                <EditableProfileCard id={id} />
                <ProfileRating profileId={id} />
            </Card>
        </Page>
    );
});
export default ProfilePage;
