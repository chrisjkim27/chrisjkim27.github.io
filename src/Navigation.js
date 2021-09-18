import React from 'react'
import { Link } from 'react-router-dom'

function Navigation({ home }) {
    return (
        <div className={home ? "nav" : "nav-horizontal"}>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/past-projects'>Projects</Link></li>

                {/* <li><Link to='/photography'>Photography</Link></li> */}
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/resume'>Resume</Link></li>
            </ul>
        </div>
    )
}

export default Navigation
