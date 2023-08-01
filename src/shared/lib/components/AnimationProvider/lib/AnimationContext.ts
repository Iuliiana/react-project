import { createContext } from 'react';
import { GestureType, SpringType } from './types';

export interface AnimationContextProps {
    isLoaded?: boolean;
    Spring?: SpringType;
    Gesture?: GestureType;
}
export const AnimationContext = createContext<AnimationContextProps>({});
