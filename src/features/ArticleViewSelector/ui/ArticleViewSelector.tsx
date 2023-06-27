import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleView } from 'entities/Article';
import { Icon } from 'shared/ui/Icon/Icon';
import { Button } from 'shared/ui/Button/Button';
import { articleViewButtons } from '../model/articleViewButtons';
import cls from './ArticleViewSelector.module.scss';

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
