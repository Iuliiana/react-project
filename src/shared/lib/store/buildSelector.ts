import { useSelector } from 'react-redux';
import { StateSchema } from '@/app/providers/StoreProvider';

/*
 *  Типизирующая обёртка;
 *
 * Пример с Counter:
 *
 * вызов const counterValue = useSelector(getCounterValue);
 * заменяется на const counterValue = useCounter();
 *
 * объявление селектора
 * export const getCounterValue = (state: StateSchema) => state.counter.value
 * заменяется на
 * export const [useCounter, getCounterValue] = buildSelector((state: StateSchema) => state.counter.value);
 * */

// * [useCounter, getCounterValue] = buildSelector((state: StateSchema, id) => state.counter.entities[id]);

type Selector<T, Args extends any[]> = (state: StateSchema, ...args: Args) => T;
type Hook<T, Args extends any[]> = (...args: Args) => T;
type Result<T, Args extends any[]> = [Hook<T, Args>, Selector<T, Args>];

export function buildSelector<T, Args extends any[]>(
    selector: Selector<T, Args>,
): Result<T, Args> {
    const useSelectorHook: Hook<T, Args> = (...args: Args) =>
        useSelector((state: StateSchema) => selector(state, ...args));

    return [useSelectorHook, selector];
}
