import { fireEvent, screen } from '@testing-library/react';
import {
    withComponentRender,
} from 'shared/lib/tests/helpers/withComponentRender/withComponentRender';
import { Sidebar } from './Sidebar';

describe('Button test', () => {
    test('show in the document', () => {
        withComponentRender(<Sidebar />);
        expect(screen.getByTestId('test-sidebar')).toBeInTheDocument();
    });

    test('toggle sidebar', () => {
        withComponentRender(<Sidebar />);
        const toggleBtn = screen.getByTestId('test-button-sidebar');
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('test-sidebar')).toHaveClass('collapsed');
    });
});
