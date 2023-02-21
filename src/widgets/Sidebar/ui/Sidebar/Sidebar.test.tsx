import { fireEvent, screen } from '@testing-library/react';
import {
    withTranslationTest,
} from 'shared/lib/tests/helpers/withTranslationTest/withTranslationTest';
import { Sidebar } from './Sidebar';

describe('Button test', () => {
    test('show in the document', () => {
        withTranslationTest(<Sidebar />);
        expect(screen.getByTestId('test-sidebar')).toBeInTheDocument();
    });

    test('toggle sidebar', () => {
        withTranslationTest(<Sidebar />);
        const toggleBtn = screen.getByTestId('test-button-sidebar');
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('test-sidebar')).toHaveClass('collapsed');
    });
});
