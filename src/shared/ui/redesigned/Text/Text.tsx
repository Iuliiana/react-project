import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Text.module.scss';

type HeadTagType = 'h3' | 'h2' | 'h1';
type TextVariant = 'primary' | 'error' | 'accent';
type TextAlign = 'center' | 'right' | 'left';
type TextSize = 's' | 'm' | 'l';

export const mapHeadTagBySize: Record<TextSize, HeadTagType> = {
    s: 'h3',
    m: 'h2',
    l: 'h1',
};

export const mapSizeToClass: Record<TextSize, string> = {
    s: 'size_s',
    m: 'size_m',
    l: 'size_l',
};
interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    variant?: TextVariant;
    align?: TextAlign;
    size?: TextSize;
    'data-testid'?: string;
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        variant = 'primary',
        align = 'left',
        size = 'm',
        'data-testid': dataTestId = 'Text',
    } = props;

    const HeadTag: HeadTagType = mapHeadTagBySize[size];
    const sizeClass: string = mapSizeToClass[size];

    const additionalClasses = [
        className,
        cls[variant],
        cls[align],
        cls[sizeClass],
    ];

    return (
        <div className={classNames(cls.Text, {}, additionalClasses)}>
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
