import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {

    return(
        <div className='navContainer'>
            <h2>Sasta Website</h2>

            <ul>
                <li><Link to="/" >Home</Link> </li>
                <li><Link to="/about" > About</Link></li>
                <li><Link to="/contact" >Contact</Link></li>
                <li><Link to="/login" >LogIn</Link></li>
            </ul>
        </div>
    )
}

export default Navbar