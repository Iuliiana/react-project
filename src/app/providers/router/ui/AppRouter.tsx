import React, {
    memo, Suspense, useCallback,
} from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutePrups, routeConfig } from 'shared/configs/routerConfig/routerConfig';
import { PageLoader } from 'widgets/PageLoader';
import { RequireAuth } from './RequireAuth';

const AppRouter = () => {
    const renderWidthRequireAuth = useCallback((route: AppRoutePrups) => {
        const element = <Suspense fallback={<PageLoader />}>{route.element}</Suspense>;

        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
            />
        );
    }, []);

    return (
        <Routes>{ Object.values(routeConfig).map(renderWidthRequireAuth) }</Routes>
    );
};
export default memo(AppRouter);
