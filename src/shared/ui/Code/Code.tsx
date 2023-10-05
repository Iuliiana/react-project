import { memo, useCallback } from 'react';
import IconCopyDeprecated from '@/shared/assets/icons/copy.svg';
import IconCopy from '@/shared/assets/icons/new/Copy-outline.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatureFlag } from '@/shared/lib/features';
import cls from './Code.module.scss';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '../deprecated/Button/Button';
import { Button } from '../redesigned/Button';
import { Icon } from '../redesigned/Icon';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = memo((props: CodeProps) => {
    const { className, text } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <ToggleFeatureFlag
            feature="isAppRedesigned"
            on={
                <pre
                    className={classNames(cls.CodeRedesigned, {}, [className])}
                >
                    <Button className={cls.btnCopy} onClick={onCopy}>
                        <Icon Svg={IconCopy} />
                    </Button>

                    <code>{text}</code>
                </pre>
            }
            off={
                <pre className={classNames(cls.Code, {}, [className])}>
                    <ButtonDeprecated
                        themeButton={ButtonTheme.CLEAR}
                        className={cls.btnCopy}
                        onClick={onCopy}
                    >
                        <IconCopyDeprecated className={cls.icon} />
                    </ButtonDeprecated>
                    <code>{text}</code>
                </pre>
            }
        />
    );
});
