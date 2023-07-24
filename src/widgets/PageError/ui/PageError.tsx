import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string,
}

export const PageError:FC<PageErrorProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>{t('Произошла непредвиденная ошибка!')}</p>
            <Button type="button" onClick={reloadPage}>
                {t('Перезагрузить страницу')}
            </Button>
        </div>
    );
};
