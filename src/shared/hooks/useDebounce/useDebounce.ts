import {
    MutableRefObject, useCallback, useRef,
} from 'react';

export function useDebounce(callback: (...args: any[]) => void, delay: number) {
    const timeoutId = useRef() as MutableRefObject<any>;

    return useCallback((...args) => {
        if (timeoutId.current) {
            clearInterval(timeoutId.current);
        }
        timeoutId.current = setTimeout(() => {
            callback(...args);
        }, delay);
    }, [callback, delay]);
}
