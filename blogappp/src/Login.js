import React,{useState}from 'react' 
import Home from './Home'
import {Link} from 'react-router-dom' 
//import joana from './Pics/joanna-kosinska-1_CMoFsPfso-unsplash.jpg'
import './login.css'

function Login() {
    const[username,setUsername]=useState('')
    const[email, setEmail]=useState('')
    const[password, setPassword]=useState('')
    const[LoggedIn, setLoggedIn]=useState(false)
  
    const handleUsername=(event)=>{
        setUsername(event.target.value)
    }
    const handleEmail = (event)=>{
      setEmail(event.target.value)
    }
    const handlePassword = (event) =>{
      setPassword(event.target.value)
    }
    function handleButton(event){
      event.preventDefault();
      if(username==='Citrus' && email=== "citrus@gmail.com" && password==="citrus"){
        setLoggedIn(true)
        alert('hello bestie')
      }
      else{
        alert('hello ')
      }
    
    }
    /*function handleLogout(event){
      event.preventDefault();
     setLoggedIn(false)*/

    return (
        <div>
           <div className="Login">
                {LoggedIn?
                <>
                <Home/>
               { /*<Link to='/home'></Link>*/}
                </>
                :
             <>
                <h1>Citrus</h1>
                <form>
                <h2>Username</h2>
                <input type='name' placeholder='username' onChange={handleUsername} ></input>
                <br></br>
                <br></br>
                <h2>Email</h2>
                <input type='email' placeholder='email'onChange={handleEmail}></input>
                <br></br>
                <br></br>
                <h2>Password</h2>
                <input type='password' placeholder='password' onChange={handlePassword}></input>
                <br></br>
                <br></br>
                   
               {/*<Link to='/home'><button onClick={handleButton}> Login</button></Link>*/}
               <button onClick={handleButton}>Login</button>
                <br></br>
                <br></br>
                <br></br>
                <a href="https://instagram.com">Forgot Password?</a>
                <br></br>
                {/*<a href="./Signup"> <p>Don't have an account yet?<span>Sign Up</span></p></a>*/}
                <Link to='/signup'><span>Click here to Signup</span></Link>
                </form>
              
    
             </>
}
             </div> 
           
        
        </div>
    )
}

export default Login
