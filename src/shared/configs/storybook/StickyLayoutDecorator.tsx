import { Story } from '@storybook/react';
import { StickyContentLayout } from '@/shared/layouts';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

type GridAreaType = 'right' | 'content' | 'left';
interface StickyLayoutDecoratorInterface {
    ariaType: GridAreaType;
}

export const StickyLayoutDecorator =
    ({ ariaType }: StickyLayoutDecoratorInterface) =>
    (StoryComponent: Story) => {
        const propsLayout = {
            right: <Skeleton isAnimated={false} />,
            content: <Skeleton isAnimated={false} />,
            left: <Skeleton isAnimated={false} />,
        };

        const newLayouts = { ...propsLayout, [ariaType]: <StoryComponent /> };
        return <StickyContentLayout {...newLayouts} />;
    };
