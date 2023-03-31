import React, { memo, Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/configs/routerConfig/routerConfig';
import { PageLoader } from 'widgets/PageLoader';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';

const AppRouter = () => {
    const isAuthUser = useSelector(getUserAuthData);

    const routes = useMemo(() => (
        Object.values(routeConfig).filter((route) => !(route.authOnly && !isAuthUser))
    ), [isAuthUser]);

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {routes.map(({ element, path }) => (
                    <Route
                        key={path}
                        path={path}
                        element={(<div className="page-wrapper">{element}</div>)}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};
export default memo(AppRouter);
