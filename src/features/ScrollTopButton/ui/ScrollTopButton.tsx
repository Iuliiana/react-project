import { memo } from 'react';
import ArrowButton from '@/shared/assets/icons/new/arrow-circle-up-rounded.svg';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface ScrollTopButtonProps {
    className?: string;
    scrollToTopCustom?: () => void;
}

export const ScrollTopButton = memo((props: ScrollTopButtonProps) => {
    const { className, scrollToTopCustom } = props;
    const scrollToTop = () => {
        if (scrollToTopCustom) {
            scrollToTopCustom?.();
        } else {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
    };

    return (
        <Icon
            isClickable
            className={className}
            Svg={ArrowButton}
            onClick={scrollToTop}
        />
    );
});
