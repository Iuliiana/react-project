import { MutableRefObject, useEffect } from 'react';

interface UseInfiniteScrollProps {
    callback?: ()=> void,
    wrapperRef: MutableRefObject<HTMLDivElement>,
    triggerRef: MutableRefObject<HTMLDivElement>,
}

export function useInfiniteScroll(props: UseInfiniteScrollProps) {
    const { triggerRef, wrapperRef, callback } = props;

    useEffect(() => {
        let observer: IntersectionObserver|null;
        const triggerElement = triggerRef.current;
        const wrapperElement = wrapperRef.current;

        if (callback) {
            const options = {
                root: wrapperElement,
                rootMargin: '0px 0px 160px 0px',
                threshold: 1.0,
            };

            // eslint-disable-next-line react-hooks/exhaustive-deps
            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);

            observer.observe(triggerElement);
        }
        return () => {
            if (observer && triggerElement) {
                observer?.unobserve(triggerElement);
            }
        };
    }, [triggerRef, wrapperRef, callback]);
}
