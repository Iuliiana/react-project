import React, { memo } from 'react';
import { ArticleView } from '@/entities/Article';
import ViewGridIcon from '@/shared/assets/icons/new/grid.svg';
import ViewListIcon from '@/shared/assets/icons/new/list.svg';
import ViewGridIconDeprecated from '@/shared/assets/icons/view_grid.svg';
import ViewListIconDeprecated from '@/shared/assets/icons/view_list.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { toggleFeatureFlag, ToggleFeatureFlag } from '@/shared/lib/features';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Button } from '@/shared/ui/redesigned/Button';
import { Icon } from '@/shared/ui/redesigned/Icon';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewButton {
    view: ArticleView;
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const articleViewButtons: ArticleViewButton[] = [
    {
        view: ArticleView.LIST,
        Icon: toggleFeatureFlag({
            name: 'isAppRedesigned',
            on: () => ViewListIcon,
            off: () => ViewListIconDeprecated,
        }),
    },
    {
        view: ArticleView.GRID,
        Icon: toggleFeatureFlag({
            name: 'isAppRedesigned',
            on: () => ViewGridIcon,
            off: () => ViewGridIconDeprecated,
        }),
    },
];

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onChangeViewArticles?: (view: ArticleView) => void;
}

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { className, view, onChangeViewArticles } = props;

    const onChangeViewArticlesHandler = (view: ArticleView) => () => {
        onChangeViewArticles?.(view);
    };

    return (
        <ToggleFeatureFlag
            feature="isAppRedesigned"
            on={
                <div
                    className={classNames(
                        cls.ArticleViewSelectorRedesigned,
                        {},
                        [className],
                    )}
                >
                    {articleViewButtons.map((item) => (
                        <Button
                            variant="clear"
                            onClick={onChangeViewArticlesHandler(item.view)}
                            className={cls.Button}
                            key={item.view}
                        >
                            <Icon
                                Svg={item.Icon}
                                className={classNames(cls.Icon, {
                                    [cls.selected]: view === item.view,
                                })}
                            />
                        </Button>
                    ))}
                </div>
            }
            off={
                <div
                    className={classNames(cls.ArticleViewSelector, {}, [
                        className,
                    ])}
                >
                    {articleViewButtons.map((item) => (
                        <ButtonDeprecated
                            key={item.view}
                            onClick={onChangeViewArticlesHandler(item.view)}
                            className={cls.btn}
                        >
                            <IconDeprecated
                                Svg={item.Icon}
                                className={classNames('', {
                                    [cls.selected]: view === item.view,
                                })}
                            />
                        </ButtonDeprecated>
                    ))}
                </div>
            }
        />
    );
});
