import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getUserAuthData, getUserRoles, UserRole } from '@/entities/User';
import { getRouteForbidden, getRouteMain } from '@/shared/const/route';

interface RequireAuthProps {
    children: JSX.Element;
    roles?: UserRole[];
}

export const RequireAuth = (props: RequireAuthProps) => {
    const { children, roles } = props;

    const isAuth = useSelector(getUserAuthData);
    const userRoles = useSelector(getUserRoles);

    const hasRequireRoles = useMemo(() => {
        if (!roles) {
            return true;
        }

        return roles.some((requiredRole) => userRoles?.includes(requiredRole));
    }, [roles, userRoles]);

    const location = useLocation();

    if (!isAuth) {
        return (
            <Navigate to={getRouteMain()} state={{ from: location }} replace />
        );
    }

    if (!hasRequireRoles) {
        return (
            <Navigate
                to={getRouteForbidden()}
                state={{ from: location }}
                replace
            />
        );
    }

    return children;
};
