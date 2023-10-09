import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/redesigned/Button';
import { Text } from '@/shared/ui/redesigned/Text';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError: FC<PageErrorProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <Text title={t('Произошла непредвиденная ошибка!')} />
            <Button type="button" variant="outline" onClick={reloadPage}>
                {t('Перезагрузить страницу')}
            </Button>
        </div>
    );
};
