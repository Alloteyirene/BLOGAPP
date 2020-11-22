import React from 'react'
import{Link} from 'react-router-dom'
import './navbar.css'

function Navbar() {
    return (
        <div >
            <nav>
                <ul>
                   <li><Link to='/home'>{""}Home</Link></li> 
                    <li><Link to='/about'>{""}About</Link></li>
                    <li><Link to='/contact'>{""}Contact</Link></li>
                   <Link to ='/'><button> Logout</button></Link> 
                   
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
