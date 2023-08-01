import { memo, useCallback } from 'react';
import IconCopy from '@/shared/assets/icons/copy.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Code.module.scss';
import { Button, ButtonTheme } from '../Button/Button';

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
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button
                themeButton={ButtonTheme.CLEAR}
                className={cls.btnCopy}
                onClick={onCopy}
            >
                <IconCopy className={cls.icon} />
            </Button>
            <code>{text}</code>
        </pre>
    );
});
