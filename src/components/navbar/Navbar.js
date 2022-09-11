import React from 'react'
import {Link} from 'react-router-dom'
import { FaHome,FaBoxes} from "react-icons/fa";
import {BiFoodMenu} from "react-icons/bi"
import { MdContactMail} from "react-icons/md"


const Navbar = () => {
  return (
    
<nav className="navbar navbar-expand-lg bg-primary">
       <div className="container-fluid">    
<ul className="navbar-nav" >
    <li className="nav-item">
        <Link class="nav-link"to="/">   <h5><FaHome /> Home</h5></Link>
    </li>
    <li className="nav-item">
     <Link className="nav-link" to="/search"> <h5><BiFoodMenu /> Recipe</h5></Link>   
    </li>
    <li className="nav-item">
    <Link className="nav-link" to="/meals"><h5><FaBoxes /> Service</h5></Link> 
    </li>
    <li className="nav-item">
    <Link class="nav-link"to="/Signup"> <h5><MdContactMail /> SignUp</h5></Link>
    </li>
</ul>
</div> 
</nav>
        

    
  )
}

export default Navbar