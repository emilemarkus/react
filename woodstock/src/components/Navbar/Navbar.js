import React from 'react';
import './Navbar.css'


const Navbar = ({link,item}) => {
    return(
        <li className="nav-item">
            <a href={link} className="nav-link">
                {item}
            </a>
        </li>
    )
}

export default Navbar;