import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleViewType } from 'entities/Article';
import { articleViewButtons } from 'features/ArticleViewSelector/model/articleViewButtons';
import { Icon } from 'shared/ui/Icon/Icon';
import { Button } from 'shared/ui/Button/Button';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
    className?: string,
    view: ArticleViewType,
    onChangeViewArticles?: (view: ArticleViewType) => void
}

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { className, view, onChangeViewArticles } = props;

    const onChangeViewArticlesHandler = (view: ArticleViewType) => () => {
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
