import React from 'react'
import './home.css'
//import Footer from './Footer'
//import img2 from './Pics/img2.jpg'
//import img3 from './Pics/img3.jpg'
import img1 from './Pics/img1.jpg'
import Navbar from './Navbar'
import Blogpost from './Blogpost'

function Home() {
    return (
        <div className='home'>
            <Navbar/>
            <img src={img1} alt='read'/>
            <Blogpost/>

			{/*<Footer/>*/}
        </div>
    )
}

export default Home
