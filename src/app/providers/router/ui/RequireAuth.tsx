import { useSelector } from 'react-redux';
import { getUserAuthData, getUserRoles, UserRole } from 'entities/User';
import { RoutePath } from 'shared/configs/routerConfig/routerConfig';
import { Navigate, useLocation } from 'react-router-dom';

interface RequireAuthProps {
    children : JSX.Element,
    roles?: UserRole[]
}

export const RequireAuth = (props: RequireAuthProps) => {
    const { children } = props;

    const isAuth = useSelector(getUserAuthData);
    const userRoles = useSelector(getUserRoles);
// проверка есть нужная роль у клиента
    const location = useLocation();

    if (!isAuth) {
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
    }

    return children;
};
