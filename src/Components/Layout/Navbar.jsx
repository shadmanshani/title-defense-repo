import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
// Font Awesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../Context/AuthContext';

const Navbar = () => {
    const navigate = useNavigate()
    const { isAuthenticated, logout } = useAuth();
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false)

    const go = () => {
        console.log('goto dhaka')
    }

    // Function to close dropdown when submenu item is clicked
    const handleSubmenuClick = (path) => {
        setIsDropdownOpen(false)
        // Close the details element
        const detailsElements = document.querySelectorAll('details[open]')
        detailsElements.forEach(details => details.removeAttribute('open'))
        // Close the dropdown menu
        const dropdown = document.querySelector('.dropdown');
        if (dropdown) {
            dropdown.blur();
        }
        navigate(path)
    }

    // Define all menu links
    const allMenuLinks = [
        { name: 'Home', path: '/' },
        { 
            name: 'Services', 
            children: [
                { name: 'Mobile Repair', path: '/services/mobile' },
                { name: 'Laptop Repair', path: '/services/laptop' },
                { name: 'Mouse & Keyboard', path: '/services/mouse-keyboard' },
                { name: 'Other Services', path: '/services/others' },
                { name: 'View All Services', path: '/services' }
            ]
        },
        { name: 'Get Diagnosis', path: '/diagnosis' },
        { name: 'Book Repair', path: '/booking' },
        { name: 'Track Order', path: '/track' },
        { name: 'Location', path: '/location' },
    ];

    // Filter menu links based on authentication status
    const menuLinks = allMenuLinks.filter(link => {
        // Always show Home, Services, Get Diagnosis, and Book Repair
        if (['Home', 'Services', 'Get Diagnosis', 'Book Repair'].includes(link.name)) {
            return true;
        }
        // Only show Track Order and Location for authenticated users
        if (['Track Order', 'Location'].includes(link.name)) {
            return isAuthenticated;
        }
        // Show all other links by default
        return true;
    });

    const renderMenu = (
        <>
            {menuLinks.map((item, index) => (
                <li key={index}>
                    {item.children ?
                        (
                            <details>
                                <summary className="text-blue-700 hover:text-blue-500">{item.name}</summary>
                                <ul className="p-2">
                                    {item.children.map((child, idx) => (
                                        <li key={idx}>
                                            {child.path ? (
                                                <a
                                                 onClick={() => handleSubmenuClick(child.path)}
                                                 className="text-blue-600 hover:text-blue-400 block px-2 py-1 rounded cursor-pointer"
                                             >
                                                 {child.name}
                                             </a>
                                            ) : (
                                                <a 
                                                    onClick={child.action}
                                                    className="text-blue-600 hover:text-blue-400 block px-2 py-1 rounded cursor-pointer"
                                                >
                                                    {child.name}
                                                </a>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </details>
                        ) :
                        (
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    `transition-transform duration-200 px-3 py-1 rounded-lg font-medium ${
                                        isActive
                                            ? 'text-blue-700 bg-blue-100'
                                            : 'text-blue-600 hover:text-blue-400 hover:bg-blue-50'
                                    } hover:scale-110`
                                }
                            >
                                {item.name}
                            </NavLink>
                        )}
                </li>
            ))}
        </>
    )

    // Theme toggle handler
    const [theme, setTheme] = React.useState('light');
    const handleThemeToggle = () => {
        const newTheme = theme === 'light' ? 'night' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    const handleLogout = () => {
        logout();
        // Navigate to home page after logout
        navigate('/');
    };

    return (
        <div className="navbar bg-white text-neutral-content shadow-md sticky top-0 z-50 py-3">
            {/* Navbar Start */}
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-neutral text-neutral-content rounded-box z-[1] mt-3 w-52 p-2 shadow text-base"
                    >
                        {renderMenu}
                        {/* Authentication buttons for mobile menu */}
                        <div className="lg:hidden flex flex-col gap-2 mt-2 pt-2 border-t border-gray-600">
                            {isAuthenticated ? (
                                <button className="btn btn-outline btn-error" onClick={handleLogout}>Logout</button>
                            ) : (
                                <>
                                    <button className="btn btn-outline btn-success" onClick={() => { navigate('/login'); setIsDropdownOpen(false); }}>LogIn</button>
                                    <button className="btn btn-outline btn-primary" onClick={() => { navigate('/register'); setIsDropdownOpen(false); }}>Register</button>
                                </>
                            )}
                        </div>
                    </ul>
                </div>
                <a
                    className="btn bg-white border-none shadow-none text-2xl font-bold tracking-tight text-gray-500 cursor-pointer"
                    onClick={() => navigate('/')}
                >
                    eSoLuTiOn
                </a>
            </div>

            {/* Navbar Center */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-base">{renderMenu}</ul>
            </div>

            {/* Navbar End */}
            <div className="navbar-end gap-2">
                {/* handle dark mode light mode */}
                <button
                    className="btn btn-ghost btn-circle"
                    onClick={handleThemeToggle}
                    aria-label="Toggle Night/Light Mode"
                >
                    {theme === 'light' ? (
                        <FontAwesomeIcon icon={faSun} className="h-6 w-6 text-yellow-400" />
                    ) : (
                        <FontAwesomeIcon icon={faMoon} className="h-6 w-6 text-blue-300" />
                    )}
                </button>
                {/* Authentication buttons only on large screens */}
                <div className="hidden lg:flex gap-2">
                    {isAuthenticated ? (
                        <button className="btn btn-outline btn-error" onClick={handleLogout}>Logout</button>
                    ) : (
                        <>
                            <button className="btn btn-outline btn-success px-6" onClick={() => navigate('/login')}>LogIn</button>
                            <button className="btn btn-outline btn-primary" onClick={() => navigate('/register')}>Register</button>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar
