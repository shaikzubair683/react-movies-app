import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const NavBar = (props) => {
    return (<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <Link to="/" className="navbar-brand">MyApp</Link>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <NavLink className='nav-link' to={"/movies"}>Movies</NavLink>
          </li>
          <li class="nav-item">
          <NavLink className='nav-link' to={"/customers"}>Customers</NavLink>          
          </li>
          <li class="nav-item">
          <NavLink className='nav-link' to={"/rentals"}>Rentals</NavLink>
          </li>
          <li class="nav-item">
          <NavLink className='nav-link' to={"/login"}>Login</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
     );
}
 
export default NavBar;