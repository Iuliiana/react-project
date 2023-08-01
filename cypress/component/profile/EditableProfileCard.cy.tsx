import { EditableProfileCard } from '@/features/EditableProfileCard';
import { TestProvider } from '@/shared/lib/tests/helpers/withComponentRender/withComponentRender';

describe('EditableProfileCard.cy.tsx', () => {
    it('playground', () => {
        cy.intercept('GET', '**/profile/*', { fixture: 'profile.json' });
        cy.mount(
            <TestProvider params={{
                initialState: {
                    user: {
                        _isInitAuth: true,
                        authData: {
                            id: '4',
                        },
                    },
                },
            }}
            >
                <EditableProfileCard id="4" />
            </TestProvider>,
        );
    });
});
