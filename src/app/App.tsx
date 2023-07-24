import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { NavBar } from '@/widgets/NavBar';
import { Sidebar } from '@/widgets/Sidebar';
import { PageLoader } from '@/widgets/PageLoader';
import { getUserIsInitAuth, userActions } from '@/entities/User';

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
