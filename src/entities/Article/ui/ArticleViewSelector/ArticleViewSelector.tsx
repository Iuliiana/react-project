import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '@/shared/ui/Icon/Icon';
import { Button } from '@/shared/ui/Button/Button';
import ViewGridIcon from '@/shared/assets/icons/view_grid.svg';
import ViewListIcon from '@/shared/assets/icons/view_list.svg';
import { ArticleView } from '../../model/consts/articleViewConst';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewButton {
    view: ArticleView,
    Icon: React.FC<React.SVGProps<SVGSVGElement>>
}

const articleViewButtons: ArticleViewButton[] = [
    {
        view: ArticleView.GRID,
        Icon: ViewGridIcon,
    },
    {
        view: ArticleView.LIST,
        Icon: ViewListIcon,
    },
];

interface ArticleViewSelectorProps {
    className?: string,
    view: ArticleView,
    onChangeViewArticles?: (view: ArticleView) => void
}

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { className, view, onChangeViewArticles } = props;

    const onChangeViewArticlesHandler = (view: ArticleView) => () => {
        onChangeViewArticles?.(view);
    };

    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {articleViewButtons.map((item) => (
                <Button
                    key={item.view}
                    onClick={onChangeViewArticlesHandler(item.view)}
                    className={cls.btn}
                >
                    <Icon
                        Svg={item.Icon}
                        className={classNames('', { [cls.selected]: view === item.view })}
                    />
                </Button>

            ))}
        </div>
    );
});
