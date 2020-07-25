import React from 'react'
import '../Navbar/style.css'
import { NavLink } from 'react-router-dom'


export const Navbar = ()=>{
    return(
        <>
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">

                
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink className="navbar-brand" to="/">Piaus</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink activeClassName="menu_active"
        exact
         className="nav-link" to="/">Home <span class="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="menu_active"
         className="nav-link" to="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="menu_active"
         className="nav-link" to="/service">Service</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="menu_active"
         className="nav-link" to="/contact">Contact</NavLink>
      </li>
      
    </ul>
    
  </div>
</nav>
</div>

            </div>

        </div>
</>
    )
}