import React, { useEffect } from 'react';
import Navbar from '../Layout/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Layout/Footer';
import { ThemeProvider } from '../Context/ThemeContext';

// Scroll to top on route change
const ScrollToTop = () => {
    const { pathname } = useLocation();
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

const Root = () => {
    // Set initial theme from localStorage or default to 'light'
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
    }, []);

    return (
        <ThemeProvider>
            <div>
                <ScrollToTop />
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