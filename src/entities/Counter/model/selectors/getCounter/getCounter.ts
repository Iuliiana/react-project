import { StateShema } from 'app/providers/StoreProvider';

export function getCounter(state: StateShema) {
    return state.counter;
}
