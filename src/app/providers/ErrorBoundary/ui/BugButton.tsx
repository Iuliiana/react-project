import { FC, useEffect, useState } from 'react';

// компонент для тестирования ErrorBoundary
export const BugButton:FC = () => {
    const [isError, setIsError] = useState(false);

    const throwError = () => {
        setIsError(!isError);
    };

    useEffect(() => {
        if (isError) {
            throw new Error();
        }
    }, [isError]);

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <button type="button" onClick={throwError}>throw Error</button>
    );
};
