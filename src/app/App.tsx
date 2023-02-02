import React, {Suspense} from 'react';
import './styles/index.scss';
import {Link, Route, Routes} from "react-router-dom";
import {useTheme} from "app/providers/ThemeProvider";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import {classNames} from "shared/lib/classNames/classNames";


const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>

            <div>
                <button onClick={toggleTheme}>change theme</button>
            </div>

            <Suspense fallback={<div> Loading ... </div>}>
                <Routes>
                    <Route path={'/'} element={<MainPage/>}/>
                    <Route path={'/about'} element={<AboutPage/>}/>
                </Routes>

            </Suspense>
        </div>

    );
};

export default App;