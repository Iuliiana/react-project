import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from 'entities/Counter/model/selectors/getCounterValue/getCounterValue';
import { Button } from '@storybook/react/demo';
import { useTranslation } from 'react-i18next';
import { counterActions } from '../model/slice/counterSlice';

export const Counter:FC = () => {
    const dispatch = useDispatch();
    const value = useSelector(getCounterValue);
    const { t } = useTranslation();
    const incrementHandler = () => {
        dispatch(counterActions.increment());
    };
    const decrementHandler = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="counter-value">{value}</h1>
            <div>
                <Button
                    onClick={incrementHandler}
                    data-testid="test-btn-increment"
                >
                    {t('increment')}
                </Button>
                <Button
                    onClick={decrementHandler}
                    data-testid="test-btn-decrement"
                >
                    {t('decrement')}
                </Button>
            </div>
        </div>
    );
};
