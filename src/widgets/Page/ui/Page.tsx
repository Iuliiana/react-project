import { MutableRefObject, ReactNode, UIEvent, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { StateSchema } from '@/app/providers/StoreProvider';
import { getSaveScrollByPath, saveScrollActions } from '@/features/SaveScroll';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { useInfiniteScroll } from '@/shared/hooks/useInfiniteScroll/useInfiniteScroll';
import { useInitialEffect } from '@/shared/hooks/useInitialEffect/useInitialEffect';
import { useThrottle } from '@/shared/hooks/useThrottle/useThrottle';
import { classNames } from '@/shared/lib/classNames/classNames';
import { toggleFeatureFlag } from '@/shared/lib/features';
import { TestsProps } from '@/shared/lib/types/tests';
import cls from './Page.module.scss';

interface PageProps extends TestsProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const Page = (props: PageProps) => {
    const {
        className,
        children,
        onScrollEnd,
        'data-testid': dataTestId = 'Page',
    } = props;
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const scrollPosition = useSelector((state: StateSchema) =>
        getSaveScrollByPath(state, pathname),
    );

    useInfiniteScroll({
        wrapperRef,
        triggerRef,
        callback: onScrollEnd,
    });

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    const onScrollSave = useThrottle((event: UIEvent<HTMLDivElement>) => {
        dispatch(
            saveScrollActions.setScrollPosition({
                path: pathname,
                scrollPosition: event.currentTarget.scrollTop,
            }),
        );
    }, 500);

    const classNamePage = toggleFeatureFlag({
        name: 'isAppRedesigned',
        off: () => cls.Page,
        on: () => cls.PageRedesigned,
    });

    return (
        <main
            className={classNames(classNamePage, {}, [className])}
            ref={wrapperRef}
            onScroll={onScrollSave}
            data-testid={dataTestId}
        >
            {children}
            {onScrollEnd ? (
                <div className={cls.trigger} ref={triggerRef} />
            ) : null}
            <div className={cls.trigger} ref={triggerRef} />
        </main>
    );
};
