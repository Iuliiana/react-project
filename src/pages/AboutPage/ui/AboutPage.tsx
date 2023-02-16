import React from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';

const AboutPage: React.FC = () => {
    const { t } = useTranslation('about');

    return (
        <div>
            <BugButton />
            {t('О нас')}
        </div>
    );
};

export default AboutPage;
