import { memo } from 'react';
import { ToggleFeatureFlag } from '@/shared/lib/features';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { ArticleBlocksText } from '../../model/types/article';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleBlocksText;
}

export const ArticleTextBlockComponent = memo(
    (props: ArticleTextBlockComponentProps) => {
        const { className, block } = props;

        return (
            <ToggleFeatureFlag
                feature="isAppRedesigned"
                on={
                    <div className={className}>
                        {block.title && <Text title={block.title} />}
                        {block.paragraphs.map((paragraph) => (
                            <Text text={paragraph} key={paragraph} />
                        ))}
                    </div>
                }
                off={
                    <div className={className}>
                        {block.title && (
                            <TextDeprecated
                                title={block.title}
                                size={TextSize.M}
                            />
                        )}
                        {block.paragraphs.map((paragraph) => (
                            <TextDeprecated
                                text={paragraph}
                                key={paragraph}
                                size={TextSize.M}
                            />
                        ))}
                    </div>
                }
            />
        );
    },
);
