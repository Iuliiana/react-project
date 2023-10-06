import { Story } from '@storybook/react';
import { MainLayout } from '@/shared/layouts';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

type GridAreaType = 'header' | 'sidebar' | 'toolbar' | 'content';
interface MainLayoutDecoratorInterface {
    ariaType: GridAreaType;
}

export const MainLayoutDecorator =
    ({ ariaType }: MainLayoutDecoratorInterface) =>
    (StoryComponent: Story) => {
        const propsLayout = {
            header: <Skeleton isAnimated={false} />,
            sidebar: <Skeleton isAnimated={false} />,
            toolbar: <Skeleton isAnimated={false} />,
            content: <Skeleton isAnimated={false} />,
        };

        const newLayouts = { ...propsLayout, [ariaType]: <StoryComponent /> };
        return <MainLayout {...newLayouts} />;
    };
