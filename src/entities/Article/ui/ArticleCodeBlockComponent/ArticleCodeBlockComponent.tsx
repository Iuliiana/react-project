import { memo } from 'react';
import { Code } from '@/shared/ui/Code';
import { HStack } from '@/shared/ui/Stack';
import { ArticleBlocksCode } from '../../model/types/article';

interface ArticleCodeBlockComponentProps {
    className?: string;
    block: ArticleBlocksCode;
}

export const ArticleCodeBlockComponent = memo(
    (props: ArticleCodeBlockComponentProps) => {
        const { className, block } = props;
        return (
            <HStack max className={className}>
                <Code text={block.code} />
            </HStack>
        );
    },
);
