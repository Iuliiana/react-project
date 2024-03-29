import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Text.module.scss';

type HeadTagType = 'h3' | 'h2' | 'h1';
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

export const HeadTagBySize: Record<TextSizeType, HeadTagType> = {
    [TextSize.S]: 'h3',
    [TextSize.M]: 'h2',
    [TextSize.L]: 'h1',
} as const;
type HeadTagBySizeType = ValueOf<typeof HeadTagBySize>;

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    textTheme?: TextThemeType;
    align?: TextAlignType;
    size?: TextSizeType;
    'data-testid'?: string;
}

/**
 * @deprecated
 * Этот компонент устарел и больше не поддерживается
 */
export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        textTheme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,
        'data-testid': dataTestId = 'Text',
    } = props;

    const HeadTag: HeadTagBySizeType = HeadTagBySize[size];

    return (
        <div
            className={classNames(cls.Text, {}, [
                className,
                cls[textTheme],
                cls[align],
                cls[size],
            ])}
        >
            {title && (
                <HeadTag
                    className={classNames(cls.TextTitle, {}, [cls.TextItem])}
                    data-testid={`${dataTestId}.Head`}
                >
                    {title}
                </HeadTag>
            )}
            {text && (
                <p
                    className={classNames(cls.TextParagraph, {}, [
                        cls.TextItem,
                    ])}
                    data-testid={`${dataTestId}.Paragraph`}
                >
                    {text}
                </p>
            )}
        </div>
    );
});
