import { ArticleView } from 'entities/Article';
import ViewGridIcon from 'shared/assets/icons/view_grid.svg';
import ViewListIcon from 'shared/assets/icons/view_list.svg';
import React from 'react';

interface ArticleViewButton {
    view: ArticleView,
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const articleViewButtons: ArticleViewButton[] = [
    {
        view: ArticleView.GRID,
        Icon: ViewGridIcon,
    },
    {
        view: ArticleView.LIST,
        Icon: ViewListIcon,
    },
];
