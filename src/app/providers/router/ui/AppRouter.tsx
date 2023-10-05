import React, { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoaderLayout } from '@/shared/layouts/PageLoaderLayout/PageLoaderLayout';
import { ToggleFeatureFlag } from '@/shared/lib/features';
import { PageLoader } from '@/widgets/PageLoader';
import { RequireAuth } from './RequireAuth';
import { AppRouteProps } from '../../../types/route';
import { routeConfig } from '../config/routerConfig';

const AppRouter = () => {
    const renderWidthRequireAuth = useCallback((route: AppRouteProps) => {
        const fallback = (
            <ToggleFeatureFlag
                feature="isAppRedesigned"
                off={<PageLoader />}
                on={<PageLoaderLayout />}
            />
        );

        const element = (
            <Suspense fallback={fallback}>{route.element}</Suspense>
        );

        return (
            <Route
                key={route.path}
                path={route.path}
                element={
                    route.authOnly ? (
                        <RequireAuth roles={route.roles}>{element}</RequireAuth>
                    ) : (
                        element
                    )
                }
            />
        );
    }, []);

    return (
        <Routes>
            {Object.values(routeConfig).map(renderWidthRequireAuth)}
        </Routes>
    );
};
export default memo(AppRouter);
