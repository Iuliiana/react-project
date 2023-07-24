import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextSize } from '@/shared/ui/Text';
import cls from './ArticleTextBlockComponent.module.scss';
import { ArticleBlocksText } from '../../model/types/article';

interface ArticleTextBlockComponentProps {
    className?: string,
    block: ArticleBlocksText
}

export const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps) => {
    const { className, block } = props;

    return (
        <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
            {block.title && <Text title={block.title} size={TextSize.M} />}
            {block.paragraphs.map((paragraph) => <Text text={paragraph} key={paragraph} size={TextSize.M} />)}
        </div>
    );
});
