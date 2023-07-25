import { useSelector } from 'react-redux';
import { StateSchema } from '@/app/providers/StoreProvider';

/*
* Обёртка позволяющая использовать селекторы без useSelector;
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
type Selector<T> = (state:StateSchema) => T;
type Result<T> = [() => T, Selector<T>]

export function buildSelector<T>(selector: Selector<T>): Result<T> {
    const useSelectorHook = () => useSelector(selector);

    return [
        useSelectorHook, selector,
    ];
}
