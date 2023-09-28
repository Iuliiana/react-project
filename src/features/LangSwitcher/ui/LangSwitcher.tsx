import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatureFlag } from '@/shared/lib/features';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Button } from '@/shared/ui/redesigned/Button';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = memo((props: LangSwitcherProps) => {
    const { className, short } = props;
    const { t, i18n } = useTranslation();
    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <ToggleFeatureFlag
            feature="isAppRedesigned"
            on={
                <Button
                    className={classNames(cls.LangSwitcherRedesigned, {}, [
                        className,
                    ])}
                    variant="clear"
                    onClick={toggleLang}
                >
                    {t('Сокращение языка')}
                </Button>
            }
            off={
                <ButtonDeprecated
                    className={classNames(cls.LangSwitcher, {}, [className])}
                    themeButton={ButtonTheme.CLEAR}
                    onClick={toggleLang}
                >
                    {t(short ? 'Язык' : 'Сокращение языка')}
                </ButtonDeprecated>
            }
        />
    );
});
