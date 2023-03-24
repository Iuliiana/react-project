import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { NavBar } from 'widgets/NavBar';
import { Sidebar } from 'widgets/Sidebar';
import React, { Suspense, useEffect } from 'react';
import { PageLoader } from 'widgets/PageLoader';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app')}>
            <Suspense fallback={<PageLoader />}>
                <NavBar />
                <div className="main-wrapper">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>

    );
};
export default App;
