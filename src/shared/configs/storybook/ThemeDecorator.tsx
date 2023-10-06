import { Story } from '@storybook/react';
// eslint-disable-next-line itretiakova-plugin/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { Theme } from '@/shared/const/theme';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <ThemeProvider initialTheme={theme}>
        <div id="app" className={`${theme}`}>
            <StoryComponent />
        </div>
    </ThemeProvider>
);
