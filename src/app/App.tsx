import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserIsInitAuth, userActions } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { NavBar } from '@/widgets/NavBar';
import { PageLoader } from '@/widgets/PageLoader';
import { Sidebar } from '@/widgets/Sidebar';
import { AppRouter } from './providers/router';

const App = () => {
    const dispatch = useDispatch();
    const isAuthUser = useSelector(getUserIsInitAuth);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app')}>
            <Suspense fallback={<PageLoader />}>
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
