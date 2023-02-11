import React from 'react';
import { useTranslation } from 'react-i18next';

const MainPage: React.FC = () => {
    const { t } = useTranslation('mainPage');

    return (
        <div>
            {t('Главная страница')}
        </div>
    );
};

export default MainPage;
