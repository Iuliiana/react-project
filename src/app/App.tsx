import React, { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getUserIsInitAuth, initAuthData } from '@/entities/User';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { useTheme } from '@/shared/hooks/useTheme/useTheme';
import { classNames } from '@/shared/lib/classNames/classNames';
import { NavBar } from '@/widgets/NavBar';
import { PageLoader } from '@/widgets/PageLoader';
import { Sidebar } from '@/widgets/Sidebar';
import { AppRouter } from './providers/router';

const App = () => {
    const dispatch = useAppDispatch();
    const isAuthUser = useSelector(getUserIsInitAuth);
    const { theme } = useTheme();

    useEffect(() => {
        dispatch(initAuthData());
    }, [dispatch]);

    if (!isAuthUser) {
        return <PageLoader />;
    }

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
