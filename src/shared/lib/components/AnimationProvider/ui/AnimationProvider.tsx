import {
    ReactNode, useEffect, useMemo, useRef, useState,
} from 'react';
import { AnimationContext } from '../lib/AnimationContext';
import { GestureType, SpringType } from '../lib/types';

// загружаем вместе т.к. либы взаимозависимы
const getAsyncAnimationModules = async () => Promise.all([
    import('@use-gesture/react'),
    import('@react-spring/web'),
]);

export const AnimationProvider = ({ children }: {children: ReactNode}) => {
    const GestureRef = useRef<GestureType>();
    const SpringRef = useRef<SpringType>();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        getAsyncAnimationModules().then(([Gesture, Spring]) => {
            GestureRef.current = Gesture;
            SpringRef.current = Spring;
            setIsLoaded(true);
        });
    }, []);

    const value = useMemo(() => ({
        Gesture: GestureRef.current,
        Spring: SpringRef.current,
        isLoaded,
    }), [isLoaded]);

    return (
        <AnimationContext.Provider value={value}>
            {children}
        </AnimationContext.Provider>
    );
};
