import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';

function Header() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <header className={`p-4 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-800'} text-white`}>
            <div className='container mx-auto flex justify-between items-center'>
                <ul className='flex gap-8'>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `text-lg font-semibold ${isActive ? "text-blue-600" : "text-white"} hover:text-blue-300 transition duration-300`
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/terms"
                            className={({ isActive }) =>
                                `text-lg font-semibold ${isActive ? "text-blue-600" : "text-white"} hover:text-blue-300 transition duration-300`
                            }
                        >
                            Terms
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/game"
                            className={({ isActive }) =>
                                `text-lg font-semibold ${isActive ? "text-blue-600" : "text-white"} hover:text-blue-300 transition duration-300`
                            }
                        >
                            Play
                        </NavLink>
                    </li>
                </ul>
                <button
                    onClick={toggleTheme}
                    className="flex items-center p-2 rounded-md bg-gray-700 hover:bg-gray-600 transition duration-300"
                >
                    {theme === 'light' ? <FiMoon className="text-yellow-300 text-xl" /> : <FiSun className="text-yellow-300 text-xl" />}
                    
                </button>
            </div>
        </header>
    );
}

export default Header;
