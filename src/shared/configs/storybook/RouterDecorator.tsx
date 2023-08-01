import React from 'react';
import { Story } from '@storybook/react';
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';

interface RouterDecoratorProps {
    initialEntries: string[];
    path: string;
}
export const RouterDecorator =
    (params?: RouterDecoratorProps) => (StoryComponent: Story) => {
        if (!params) {
            return (
                <BrowserRouter>
                    <StoryComponent />
                </BrowserRouter>
            );
        }
        return (
            <MemoryRouter initialEntries={params.initialEntries}>
                <Routes>
                    <Route path={params.path} element={<StoryComponent />} />
                </Routes>
            </MemoryRouter>
        );
    };
