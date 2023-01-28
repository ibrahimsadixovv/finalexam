import React from 'react'
import './navbar.scss';
import {  Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
        <nav>
            <div className='navbar'>

    <div className='logo'>
    <Link  to={`/`}>
<img src="http://www.themestarz.net/html/lifecoach/assets/img/logo.png"/>
</Link>
    </div>

    <div className='links'>

<ul>
    <li><Link className='link' to={`/`}>Home</Link></li>
    <li><Link className='link' to={`/add`}>Add Page</Link></li>
    <li>Help For You</li>
    <li>About Me</li>
    <li>Courses</li>
    <li>Webinars</li>
    <li>Contact</li>
    <li><button>
        Meet Me
        </button></li>
</ul>

    </div>

            </div>
        </nav>
    </div>
  )
}

export default Navbar