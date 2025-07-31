import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()

    const go = () => {
        console.log('goto dhaka')
    }

    const menuLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        // {
        //     name: 'Parent',
        //     children: [
        //         { name: 'Submenu 1', action: () => go() },
        //         { name: 'Submenu 2', action: () => console.log('Clicked Submenu 2') },
        //     ],
        // },
        { name: 'Location', path: '/location' },
    ]

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
                                        <li key={idx} onClick={child.action}>
                                            <a className="text-blue-600 hover:text-blue-400">{child.name}</a>
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
                    </ul>
                </div>
                <a className=" btn bg-white border-none shadow-none text-2xl font-bold tracking-tight text-gray-500">eSoLuTiOn</a>
            </div>

            {/* Navbar Center */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-base">{renderMenu}</ul>
            </div>

            {/* Navbar End */}
            <div className="navbar-end gap-2">
                <button className="btn btn-outline btn-success px-6">LogIn</button>
                <button className="btn btn-outline btn-primary">Register</button>
            </div>
        </div>
    )
}

export default Navbar
