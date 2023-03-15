import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { DeepPartial } from '@reduxjs/toolkit';
import { createReduxStore } from '../config/store';
import { StateShema } from '../config/StateShema';

interface StoreProviderProps {
    children: React.ReactNode,
    initialState?: DeepPartial<StateShema>
}

export const StoreProvider:FC<StoreProviderProps> = (props) => {
    const { children, initialState } = props;
    const store = createReduxStore(initialState as StateShema);
    return (
        <Provider store={store}>
            { children }
        </Provider>
    );
};
