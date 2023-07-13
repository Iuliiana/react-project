import { User } from '@/entities/User';
import { ArticleType } from '../consts/articleTypeConst';
import { ArticleBlockType } from '../consts/articleBlockTypeConst';

interface ArticleBlocksBase {
    id: string,
    type: ArticleBlockType,
}

export interface ArticleBlocksText extends ArticleBlocksBase {
    type: ArticleBlockType.TEXT;
    title?: string;
    paragraphs: string[]
}

export interface ArticleBlocksCode extends ArticleBlocksBase {
    type: ArticleBlockType.CODE;
    code: string;
}

export interface ArticleBlocksImage extends ArticleBlocksBase {
    type: ArticleBlockType.IMAGE,
    src: string,
    title?: string
}

export type ArticleBlock = ArticleBlocksText | ArticleBlocksImage | ArticleBlocksCode;
export interface Article {
    id: string;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: ArticleType[];
    user: User;
    blocks: ArticleBlock[];
}
