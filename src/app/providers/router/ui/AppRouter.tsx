import React, {
    memo, Suspense, useCallback,
} from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from '@/widgets/PageLoader';
import { RequireAuth } from './RequireAuth';
import { routeConfig } from '../config/routerConfig';
import { AppRouteProps } from '../../../types/route';

const AppRouter = () => {
    const renderWidthRequireAuth = useCallback((route: AppRouteProps) => {
        const element = <Suspense fallback={<PageLoader />}>{route.element}</Suspense>;

        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <RequireAuth roles={route.roles}>{element}</RequireAuth> : element}
            />
        );
    }, []);

    return (
        <Routes>{ Object.values(routeConfig).map(renderWidthRequireAuth) }</Routes>
    );
};
export default memo(AppRouter);
