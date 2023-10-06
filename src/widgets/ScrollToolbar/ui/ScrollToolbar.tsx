import { memo } from 'react';
import { ScrollTopButton } from '@/features/ScrollTopButton';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import cls from './ScrollToolbar.module.scss';

interface ScrollToolbarProps {
    className?: string;
}

export const ScrollToolbar = memo((props: ScrollToolbarProps) => {
    const { className } = props;
    return (
        <VStack
            justify="center"
            align="center"
            className={classNames(cls.ScrollToolbar, {}, [className])}
        >
            <ScrollTopButton
                className={classNames(cls.ScrollButton, {}, [cls.icon])}
            />
        </VStack>
    );
});
