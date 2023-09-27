import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from './Button';

describe('Button test', () => {
    test('show in the document', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('test by params', () => {
        render(<Button themeButton={ButtonTheme.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
    });
});
