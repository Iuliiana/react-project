import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Text.module.scss';

export const TextTheme = {
    ERROR: 'error',
    PRIMARY: 'primary',
    INVERT: 'invert',
} as const;

export const TextAlign = {
    CENTER: 'center',
    RIGHT: 'right',
    LEFT: 'left',
} as const;

export const TextSize = {
    S: 'size_s',
    M: 'size_m',
    L: 'size_l',
} as const;

type ValueOf<T> = T[keyof T];

type TextThemeType = ValueOf<typeof TextTheme>;
type TextAlignType = ValueOf<typeof TextAlign>;
type TextSizeType = ValueOf<typeof TextSize>;

interface TextProps {
    className?: string,
    title?: string,
    text?: string,
    textTheme?:TextThemeType,
    align?: TextAlignType,
    size?: TextSizeType
}

export const Text = memo((props: TextProps) => {
    const {
        className, text, title, textTheme = TextTheme.PRIMARY, align = TextAlign.LEFT, size = TextSize.M,
    } = props;

    return (
        <div className={classNames(cls.Text, {}, [className, cls[textTheme], cls[align], cls[size]])}>
            {title && <div className={classNames(cls.TextTitle, {}, [cls.TextItem])}>{title}</div>}
            {text && <p className={classNames(cls.TextParagraph, {}, [cls.TextItem])}>{text}</p>}
        </div>
    );
});
