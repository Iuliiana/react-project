import { useMemo } from 'react';
import { bindActionCreators, createSlice } from '@reduxjs/toolkit';
import { SliceCaseReducers, CreateSliceOptions } from '@reduxjs/toolkit/dist';
import { useDispatch } from 'react-redux';

/**
 * к каждому слайсу будет генерироваться хук, который будет оборачивать
 * action в dispatch
 *
 * при создании слайса будем использовать buildSlice вместо createSlice
 * при экспорте добавим хук
 * export const {
 *     useActions: useCounterActions,
 *     reducer: counterReducer,
 * } = counterSlice;
 *
 * используем как
 *  const { decrement, increment } = useCounterActions();
 *  const handleIncrement = () => increment();
 *
 * вместо вызова с dispatch
 *  dispatch(counterActions.increment());
 *
 */
export function buildSlice<
    State,
    CaseReducers extends SliceCaseReducers<State>,
    Name extends string = string
>(
    options: CreateSliceOptions<State, CaseReducers, Name>,
) {
    const slice = createSlice(options);

    const useActions = (): typeof slice.actions => {
        const dispatch = useDispatch();

        // @ts-ignore
        return useMemo(() => bindActionCreators(slice.actions, dispatch), [dispatch]);
    };

    return {
        ...slice,
        useActions,
    };
}
