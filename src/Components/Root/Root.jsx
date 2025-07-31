import React from 'react';
import Navbar from '../Layout/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Layout/Footer';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;