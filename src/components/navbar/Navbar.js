import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    
<nav className="navbar navbar-expand-lg bg-primary">
       <div className="container-fluid">    
<ul className="navbar-nav" >
    <li className="nav-item">
        <Link class="nav-link"to="/">Home</Link>
    </li>
    <li className="nav-item">
     <Link className="nav-link" to="/search">Search</Link>   
    </li>
    <li className="nav-item">
    <Link className="nav-link" to="/meals">Meals</Link> 
    </li>
    <li className="nav-item">
    {/* <Link className="nav-link" to="/details">Info</Link>  */}
    </li>
</ul>
</div> 
</nav>
        

    
  )
}

export default Navbar