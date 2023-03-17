import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { NavBar } from 'widgets/NavBar';
import { Sidebar } from 'widgets/Sidebar';
import React, { Suspense } from 'react';
import { PageLoader } from 'widgets/PageLoader';

const App = () => (
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

export default App;
