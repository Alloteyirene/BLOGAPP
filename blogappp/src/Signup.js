import React from 'react'
import {Link} from 'react-router-dom'
import './signup.css'

function Signup() {
    return (
        <div className='sign'>
         <h1>Citrus</h1>
            <form>
                <h2>Fullname</h2>
                <input type='name' placeholder='Fullname' />
                <h2>Username</h2>
                <input type='name' placeholder='Username' />
                <h2>Email</h2>
                <input type='email' placeholder='Email' />
                <h3>Password</h3>
                <input type='password' placeholder='Password'/>
                <br></br>
                <Link to='/home'><button>Submit</button></Link>
                
            </form>
        </div>
    )
}

export default Signup
