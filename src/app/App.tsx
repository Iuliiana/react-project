import React, { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getUserIsInitAuth, initAuthData } from '@/entities/User';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { useTheme } from '@/shared/hooks/useTheme/useTheme';
import { AppLoaderLayout, MainLayout } from '@/shared/layouts';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatureFlag } from '@/shared/lib/features';
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
        return (
            <ToggleFeatureFlag
                feature="isAppRedesigned"
                on={
                    <div id="app" className={classNames('app-redesigned')}>
                        <AppLoaderLayout />
                    </div>
                }
                off={<PageLoader />}
            />
        );
    }

    document.body.className = theme;
    return (
        <ToggleFeatureFlag
            feature="isAppRedesigned"
            on={
                <div id="app" className={classNames('app-redesigned')}>
                    <Suspense fallback="">
                        <MainLayout
                            header={<NavBar />}
                            sidebar={<Sidebar />}
                            content={<AppRouter />}
                            toolbar={<div>123665</div>}
                        />
                    </Suspense>
                </div>
            }
            off={
                <div id="app" className={classNames('app-deprecated')}>
                    <Suspense fallback="">
                        <NavBar />
                        <div className="main-wrapper">
                            <Sidebar />
                            {isAuthUser && <AppRouter />}
                        </div>
                    </Suspense>
                </div>
            }
        />
    );
};
export default App;
