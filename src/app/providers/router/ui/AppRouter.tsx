import React, {
    memo, Suspense, useCallback, useMemo,
} from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutePrups, routeConfig } from 'shared/configs/routerConfig/routerConfig';
import { PageLoader } from 'widgets/PageLoader';
import { RequireAuth } from './RequireAuth';

const AppRouter = () => {
    const renderWidthRequireAuth = useCallback((route: AppRoutePrups) => {
        const element = <div className="page-wrapper">{route.element}</div>;

        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
            />
        );
    }, []);

    const routes = useMemo(() => (
        Object.values(routeConfig).map(renderWidthRequireAuth)
    ), [renderWidthRequireAuth]);

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>{routes}</Routes>
        </Suspense>
    );
};
export default memo(AppRouter);
