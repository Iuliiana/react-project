import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextAlign, TextSize } from '@/shared/ui/Text';
import cls from './ArticleImageBlockComponent.module.scss';
import { ArticleBlocksImage } from '../../model/types/article';

interface ArticleImageBlockComponentProps {
    className?: string,
    block: ArticleBlocksImage
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
    const { className, block } = props;
    return (
        <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
            <img src={block.src} alt={block.title} />
            {block.title && (
                <Text text={block.title} align={TextAlign.CENTER} size={TextSize.M} />
            )}
        </div>
    );
});
