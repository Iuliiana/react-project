import {
    ImgHTMLAttributes,
    memo,
    ReactElement,
    useLayoutEffect,
    useState,
} from 'react';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    errorFallback?: ReactElement;
    isLoadingFallback?: ReactElement;
}

export const AppImage = memo((props: AppImageProps) => {
    const {
        className,
        isLoadingFallback,
        errorFallback,
        src,
        alt = 'image',
        ...otherProps
    } = props;
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useLayoutEffect(() => {
        const img = new Image();
        img.src = src ?? '';

        img.onload = () => {
            setIsLoading(false);
        };

        img.onerror = () => {
            setIsLoading(false);
            setIsError(true);
        };
    }, [src]);

    if (isLoading && isLoadingFallback) {
        return isLoadingFallback;
    }

    if (isError && errorFallback) {
        return errorFallback;
    }

    return <img className={className} alt={alt} src={src} {...otherProps} />;
});
