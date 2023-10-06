import { useEffect, useState } from 'react';
import { matchPath, useLocation } from 'react-router-dom';
import { AppRoutes, mapRoutesByUrl } from '@/shared/const/route';

export function useCurrentRoute() {
    const location = useLocation();
    const [currentRoute, setCurrentRoute] = useState<AppRoutes>(AppRoutes.MAIN);

    useEffect(() => {
        Object.entries(mapRoutesByUrl).forEach(([routePath, routeName]) => {
            if (matchPath(routePath, location.pathname)) {
                setCurrentRoute(routeName);
            }
        });
    }, [location.pathname]);

    return currentRoute;
}
