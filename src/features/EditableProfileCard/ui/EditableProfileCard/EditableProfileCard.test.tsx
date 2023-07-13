import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
    withComponentRender,
} from '@/shared/lib/tests/helpers/withComponentRender/withComponentRender';
import { $api } from '@/shared/api/api';
import { editableProfileCardReducer } from '../../model/slices/editableProfileCardSlice';
import { testProfile } from '../../model/test/testProfile';
import { EditableProfileCard } from './EditableProfileCard';

const params = {
    initialState: {
        editableProfileCard: {
            form: testProfile,
            data: testProfile,
            readonly: true,
            isLoading: false,
            error: '',
        },
        user: {
            authData: {
                id: '1',
                username: 'admin',
            },
        },
    },
    asyncReducers: {
        editableProfileCard: editableProfileCardReducer,
    },
};
describe('EditableProfileCard test', () => {
    beforeEach(() => {
        jest.spyOn($api, 'get').mockReturnValue(Promise.resolve({
            data: testProfile,
        }));
        withComponentRender(<EditableProfileCard id="1" />, params);
    });

    test('show edit button in the document', () => {
        expect(screen.getByTestId('EditableProfileCardHeader.EditButton')).toBeInTheDocument();
    });

    test('switching readonly', async () => {
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument();
    });

    test('cancel edit', async () => {
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
        await userEvent.clear(screen.getByTestId('ProfileCard.lastname'));

        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user');
        await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'user');

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('user');
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('user');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'));

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('Джейн');
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('Доу');
    });

    test('save edit', async () => {
        const mockPutReq = jest.spyOn($api, 'put');
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
        await userEvent.clear(screen.getByTestId('ProfileCard.lastname'));

        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user');
        await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'user');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));
        expect(mockPutReq).toBeCalled();
    });

    test('error save', async () => {
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

        expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
    });
});
