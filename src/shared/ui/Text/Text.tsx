import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export const TextTheme = {
    ERROR: 'error',
    PRIMARY: 'primary',
} as const;

type ValueOf<T> = T[keyof T];
type TextThemeType = ValueOf<typeof TextTheme>;

interface TextProps {
    className?: string,
    title?: string,
    text?: string,
    textTheme?:TextThemeType
}

export const Text = (props: TextProps) => {
    const {
        className, text, title, textTheme = TextTheme.PRIMARY,
    } = props;

    return (
        <div className={classNames(cls.Text, {}, [className, cls[textTheme]])}>
            {title && <div className={classNames(cls.TextTitle, {}, [cls.TextItem])}>{title}</div>}
            {text && <p className={classNames(cls.TextParagraph, {}, [cls.TextItem])}>{text}</p>}
        </div>
    );
};
