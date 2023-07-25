import {
    MutableRefObject, ReactNode, UIEvent, useRef,
} from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { StateSchema } from '@/app/providers/StoreProvider';
import { getSaveScrollByPath, saveScrollActions } from '@/features/SaveScroll';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { useInfiniteScroll } from '@/shared/hooks/useInfiniteScroll/useInfiniteScroll';
import { useInitialEffect } from '@/shared/hooks/useInitialEffect/useInitialEffect';
import { useThrottle } from '@/shared/hooks/useThrottle/useThrottle';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Page.module.scss';

interface PageProps {
    className?: string,
    children: ReactNode,
    onScrollEnd?: () => void,
}

export const Page = (props: PageProps) => {
    const {
        className, children, onScrollEnd,
    } = props;
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const scrollPosition = useSelector((state: StateSchema) => getSaveScrollByPath(state, pathname));

    useInfiniteScroll({
        wrapperRef,
        triggerRef,
        callback: onScrollEnd,
    });

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    const onScrollSave = useThrottle((event: UIEvent<HTMLDivElement>) => {
        dispatch(saveScrollActions.setScrollPosition({
            path: pathname,
            scrollPosition: event.currentTarget.scrollTop,
        }));
    }, 500);

    return (
        <main
            className={classNames(cls.Page, {}, [className])}
            ref={wrapperRef}
            onScroll={onScrollSave}
        >
            { children }
            {onScrollEnd ? <div className={cls.trigger} ref={triggerRef} /> : null}
            <div className={cls.trigger} ref={triggerRef} />
        </main>
    );
};