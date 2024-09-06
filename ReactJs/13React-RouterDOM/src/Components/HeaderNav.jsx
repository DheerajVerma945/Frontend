import React from 'react'
import { NavLink} from 'react-router-dom';

function HeaderNav() {
    return (
        <div className='flex justify-center align-middle flex-col font-mono ' >
            <ul className='flex justify-center gap-10 hover:cursor-pointer'>
                <li>
                    <NavLink  to="/" className={ ( {isActive} ) => isActive ? "text-orange-500" : "text-black"}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={ ( {isActive} ) => isActive ? "text-orange-500" : "text-black"}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={ ( {isActive} ) => isActive ? "text-orange-500" : "text-black"}>Contact</NavLink>
                </li>
            </ul>

        </div>
    )
}

export default HeaderNav
