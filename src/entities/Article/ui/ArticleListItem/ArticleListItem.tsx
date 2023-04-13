import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo, useCallback } from 'react';
import { Text } from 'shared/ui/Text/Text';
import ViewsIcon from 'shared/assets/icons/view.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { Card } from 'shared/ui/Card/Card';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/configs/routerConfig/routerConfig';
import {
    Article, ArticleBlocksText, ArticleBlocksType, ArticleViewType,
} from '../../model/types/article';
import cls from './ArticleListItem.module.scss';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleItemProps {
    className?: string,
    article: Article,
    view: ArticleViewType
}

export const ArticleListItem = memo((props: ArticleItemProps) => {
    const {
        className, article, view,
    } = props;
    const { t } = useTranslation();
    const navigate = useNavigate();

    const onOpenArticleDetail = useCallback(() => {
        navigate(RoutePath.articles_details + article.id);
    }, [article.id, navigate]);

    if (view === ArticleViewType.LIST) {
        const block = article.blocks.find((block) => block.type === ArticleBlocksType.TEXT) as ArticleBlocksText;
        return (
            <Card className={classNames(cls.ArticleItem, {}, [className, cls[view]])}>
                <div className={cls.header}>
                    <div className={cls.headerInfo}>
                        <div className={cls.headerInfoUser}>
                            <Avatar
                                pic={article.user.avatar}
                                alt={article.user.username}
                                className={cls.headerInfoUserAvatar}
                                size={32}
                            />
                            <Text text={article.user.username} className={cls.headerInfoUserUsername} />
                        </div>
                        <Text text={article.createdAt} className={cls.headerInfoDate} />
                    </div>
                    <Text title={article.title} className={cls.headerTitle} />
                    <Text text={article.type.join(', ')} className={cls.headerTypes} />
                </div>

                <div className={cls.mainImg}>
                    <img alt={article.title} src={article.img} />
                </div>

                { block && <ArticleTextBlockComponent block={block} className={cls.blockText} /> }

                <div className={cls.footer}>
                    <Button
                        themeButton={ButtonTheme.BACKGROUND_INVERTRD}
                        onClick={onOpenArticleDetail}
                    >
                        {t('Читать далее...')}
                    </Button>
                    <div className={cls.view}>
                        <span>{article.views}</span>
                        <Icon Svg={ViewsIcon} />
                    </div>
                </div>
            </Card>
        );
    }

    return (
        <div className={classNames(cls.ArticleItem, {}, [className, cls[view]])}>
            <Card onClick={onOpenArticleDetail}>
                <div className={cls.img}>
                    <img className={cls.imgPic} alt={article.title} src={article.img} />
                    <Text text={article.createdAt} className={cls.imgDate} />
                </div>
                <div className={cls.content}>
                    <div className={cls.heading}>
                        <Text text={article.type.join(', ')} className={cls.headingTypes} />
                        <div className={cls.view}>
                            <span>{article.views}</span>
                            <Icon Svg={ViewsIcon} />
                        </div>
                    </div>
                    <Text title={article.title} className={cls.text} />
                </div>
            </Card>
        </div>

    );
});
