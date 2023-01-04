import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';
import Header from '../shared/Header';

const Main = () => {
    return (
        <div>
            {/* Header Part  */}
            <Header />
            <Outlet />
            {/* Footer part  */}
            <Footer/>
        </div>
    );
};

export default Main;