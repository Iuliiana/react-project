import { screen } from '@testing-library/react';
import { withComponentRender } from 'shared/lib/tests/helpers/withComponentRender/withComponentRender';
import { Counter } from './Counter';

describe('Counter component test', () => {
    test('increment btn', () => {
        withComponentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId('counter-value')).toHaveTextContent('10');
    });
});
