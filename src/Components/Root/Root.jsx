import React, { useEffect } from 'react';
import Navbar from '../Layout/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Layout/Footer';
import { ThemeProvider } from '../Context/ThemeContext';

const Root = () => {
    // Set initial theme from localStorage or default to 'light'
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
    }, []);

    return (
        <ThemeProvider>
            <div>
                <Navbar />
                <div className='min-h-[calc(100vh-80px)]'>
                    <Outlet />
                </div>
                <Footer />
            </div>
        </ThemeProvider>
    );
};

export default Root;