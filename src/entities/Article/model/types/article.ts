export enum ArticleBlocksType {
    TEXT = 'TEXT',
    CODE = 'CODE',
    IMAGE = 'IMAGE',
}

interface ArticleBlocksBase {
    id: string,
    type: ArticleBlocksType,
}

export interface ArticleBlocksText extends ArticleBlocksBase {
    type: ArticleBlocksType.TEXT;
    title?: string;
    paragraphs: string[]
}

export interface ArticleBlocksCode extends ArticleBlocksBase {
    type: ArticleBlocksType.CODE;
    code: string;
}

export interface ArticleBlocksImage extends ArticleBlocksBase {
    type: ArticleBlocksType.IMAGE,
    src: string,
    title?: string
}

export type ArticleBlock = ArticleBlocksText | ArticleBlocksImage | ArticleBlocksCode;
export enum ArticleType {
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    POLICY = 'POLICY',
    ECONOMY = 'ECONOMY',
}
export interface Article {
    id: string;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: ArticleType[];
    blocks: ArticleBlock[]
}