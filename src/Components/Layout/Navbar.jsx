import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
// Font Awesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../Context/AuthContext';
import { useTheme } from '../Context/ThemeContext';

const Navbar = () => {
	const navigate = useNavigate()
	const { isAuthenticated, logout } = useAuth();
	const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
	const [activeSubmenu, setActiveSubmenu] = React.useState(null);

	const go = () => {
		console.log('goto dhaka')
	}

	// Function to close all menus and dropdowns
	const closeAllMenus = () => {
		// Close all open details elements
		document.querySelectorAll('details[open]').forEach(details => {
			details.removeAttribute('open');
		});

		// Blur any active element in dropdown
		const activeElement = document.activeElement;
		if (activeElement && activeElement.closest('.dropdown')) {
			activeElement.blur();
		}

		// Update the dropdown state
		setIsDropdownOpen(false);
		setActiveSubmenu(null);

		// Hide the mobile menu by removing the 'open' class from the dropdown
		const dropdown = document.querySelector('.dropdown');
		if (dropdown) {
			dropdown.classList.remove('dropdown-open');
		}
	};

	// Function to handle submenu item click
	const handleSubmenuClick = (path) => {
		// Close all menus first
		closeAllMenus();

		// Small delay before navigation to ensure menu is closed
		setTimeout(() => {
			navigate(path);
		}, 50);
	};

	// Toggle mobile menu
	const toggleMobileMenu = (e) => {
		e.preventDefault();
		e.stopPropagation();
		setIsDropdownOpen(!isDropdownOpen);
	};

	// Handle navigation for menu items
	const handleNavigation = (path) => {
		closeAllMenus();
		setActiveSubmenu(null);
		navigate(path);
	};

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

	// Render menu items
	const renderMenu = menuLinks.map((item, index) => {
		if (item.children) {
			return (
				<li key={index} className="group relative flex items-center">
					<button
						className="flex items-center justify-between w-full px-4 py-2 text-left font-semibold text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-gray-700 border-0 hover:border-0 focus:border-0 focus:outline-none"
						onClick={(e) => {
							e.stopPropagation();
							setActiveSubmenu(activeSubmenu === index ? null : index);
						}}
					>
						<span className="flex items-center">
							{item.name}
							<svg
								className={`w-4 h-4 ml-1 transition-transform ${activeSubmenu === index ? 'rotate-180' : ''}`}
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
							</svg>
						</span>
					</button>
					<div className="relative">
						<ul
							className={`${activeSubmenu === index ? 'block' : 'hidden'}
                                bg-white dark:bg-gray-800 pl-4 border border-gray-200 dark:border-gray-700 lg:absolute lg:left-0 lg:top-full lg:mt-0 lg:shadow-md lg:rounded-b lg:min-w-[200px]`}
							onClick={(e) => e.stopPropagation()}
						>
							{item.children.map((child, childIndex) => (
								<li key={childIndex}>
									<button
										className="w-full text-left px-4 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 dark:text-gray-300 dark:hover:bg-gray-700"
										onClick={() => handleNavigation(child.path)}
									>
										{child.name}
									</button>
								</li>
							))}
						</ul>
					</div>
				</li>
			);
		}
		return (
			<li key={index}>
				<button
					className="w-full text-left px-4 py-2 font-semibold text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-gray-700"
					onClick={() => handleNavigation(item.path)}
				>
					{item.name}
				</button>
			</li>
		);
	});

	// Theme toggle handler using ThemeContext
	const { theme, toggleTheme } = useTheme();
	const handleThemeToggle = () => {
		toggleTheme();
	};

	// Fix: Set both body background and text color based on theme
	useEffect(() => {
		if (theme === 'dark') {
			document.body.style.backgroundColor = '#1a202c'; // Tailwind gray-900
			document.body.style.color = '#e5e7eb'; // Tailwind gray-200
		} else {
			document.body.style.backgroundColor = '#ffffff';
			document.body.style.color = '#1a202c'; // Tailwind gray-900
		}
	}, [theme]);

	const handleLogout = () => {
		logout();
		// Navigate to home page after logout
		navigate('/');
	};

	return (
		<div className="navbar bg-white dark:bg-gray-900 text-neutral-content shadow-md sticky top-0 z-50 py-1">
			{/* Navbar Start */}
			<div className="navbar-start">
				<div className="dropdown">
					<button
						type="button"
						className="btn btn-ghost lg:hidden p-2"
						onClick={toggleMobileMenu}
						aria-expanded={isDropdownOpen}
						aria-label="Toggle navigation"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-7 w-7"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth="2.5"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</button>
					<ul
						className={`menu menu-sm dropdown-content bg-neutral dark:bg-gray-900 text-neutral-content dark:text-gray-200 rounded-box z-[1] mt-3 w-52 p-2 shadow text-base ${isDropdownOpen ? 'block' : 'hidden'}`}
						onClick={(e) => {
							e.stopPropagation();
							setActiveSubmenu(null);
						}}
					>
						{renderMenu}
						{/* Authentication buttons for mobile menu */}
						<div className="lg:hidden flex flex-col gap-2 ">
							{isAuthenticated ? (
								<button className="btn btn-outline btn-error" onClick={handleLogout}>Logout</button>
							) : (
								<>
									<button className="btn btn-primary font-semibold" onClick={() => { navigate('/login'); setIsDropdownOpen(false); }}>Sign In</button>
									<button className="btn btn-success font-semibold" onClick={() => { navigate('/register'); setIsDropdownOpen(false); }}>Sign Up</button>
								</>
							)}
						</div>
					</ul>
				</div>
				<a
					className="btn bg-white dark:bg-gray-900 border-none shadow-none text-xl font-bold tracking-tight text-gray-500 dark:text-gray-200 cursor-pointer"
					onClick={() => navigate('/')}
				>
					eSoLuTiOn
				</a>
			</div>

			{/* Navbar Center */}
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1 text-base flex items-center">
					{renderMenu}
				</ul>
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
							<button className="btn btn-primary font-semibold px-6" onClick={() => navigate('/login')}>Sign In</button>
							<button className="btn btn-success font-semibold px-6" onClick={() => navigate('/register')}>Sign Up</button>
						</>
					)}
				</div>
			</div>
		</div>
	)
}

export default Navbar
