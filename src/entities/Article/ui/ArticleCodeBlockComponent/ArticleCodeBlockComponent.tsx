import { memo } from 'react';
import { Code } from '@/shared/ui/deprecated/Code';
import { ArticleBlocksCode } from '../../model/types/article';

interface ArticleCodeBlockComponentProps {
    className?: string;
    block: ArticleBlocksCode;
}

export const ArticleCodeBlockComponent = memo(
    (props: ArticleCodeBlockComponentProps) => {
        const { className, block } = props;
        return (
            <div className={className}>
                <Code text={block.code} />
            </div>
        );
    },
);
