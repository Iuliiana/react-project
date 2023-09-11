import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserIsInitAuth, userActions } from '@/entities/User';
import { useTheme } from '@/shared/hooks/useTheme/useTheme';
import { classNames } from '@/shared/lib/classNames/classNames';
import { NavBar } from '@/widgets/NavBar';
import { Sidebar } from '@/widgets/Sidebar';
import { AppRouter } from './providers/router';

const App = () => {
    const dispatch = useDispatch();
    const isAuthUser = useSelector(getUserIsInitAuth);
    const { theme } = useTheme();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);
    document.body.className = theme;
    return (
        <div className={classNames('app')}>
            <Suspense fallback="">
                <NavBar />
                <div className="main-wrapper">
                    <Sidebar />
                    {isAuthUser && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
};
export default App;
