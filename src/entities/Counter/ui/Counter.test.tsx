import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { withComponentRender } from '@/shared/lib/tests/helpers/withComponentRender/withComponentRender';
import { Counter } from './Counter';

describe('Counter', () => {
    test('test render', () => {
        withComponentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });

    test('increment', async () => {
        withComponentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        const button = await screen.getByTestId('increment-btn');
        act(() => {
            button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });

    test('decrement', async () => {
        withComponentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        const button = await screen.getByTestId('decrement-btn');
        act(() => {
            button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
