import React from 'react';
import Navbar from '../Layout/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Layout/Footer';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-80px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;