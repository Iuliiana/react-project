import { useContext } from 'react';
import { AnimationContext, AnimationContextProps } from './AnimationContext';

export const useAnimationLibs = () => useContext(AnimationContext) as Required<AnimationContextProps>;
