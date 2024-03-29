import { memo, ReactElement } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './StickyContentLayout.module.scss';

interface StickyContentLayoutProps {
    className?: string;
    right?: ReactElement;
    content: ReactElement;
    left?: ReactElement;
}

export const StickyContentLayout = memo((props: StickyContentLayoutProps) => {
    const { className, left, right, content } = props;
    return (
        <div className={classNames(cls.StickyContentLayout, {}, [className])}>
            {right && <div className={cls.right}>{right}</div>}
            <div className={cls.content}>{content}</div>
            {left && <div className={cls.left}>{left}</div>}
        </div>
    );
});
