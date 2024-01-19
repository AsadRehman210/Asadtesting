import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../Images/logo.png";
import SideBar from "./SideBar";


const Navbar = () =>{

  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

    return(
        <nav className="navbar navbar-expand-lg">
  <div className="container">
    <NavLink className="navbar-brand" to="/">
        <img src={logo} alt="logo" title="logo" width="100%" height="100%" />
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" style={{ backgroundColor: "white" }}>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
        <NavLink to="/"  className="element"  aria-current="page">Home</NavLink>

        <NavLink  to="/about" className="element">About Us</NavLink>

        <NavLink  to="/product"  className="element">Products</NavLink>

        <NavLink  to="/crop"  className="element">Crops</NavLink>

        <NavLink  to="/certificate"  className="element">Certification</NavLink>

        <NavLink  to="/career"  className="element">Career</NavLink>

        <NavLink  to="/contact"  className="element">Contact Us</NavLink>

        <NavLink to="/" onClick={(e) => { e.preventDefault(); toggleSidebar(); }}>
        
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 24" fill="none" className="stroke">
            <path d="M2 2H34"  strokeWidth="3" strokeLinecap="round" />
            <path d="M2 12H34" strokeWidth="3" strokeLinecap="round"/>
            <path d="M2 22H34" strokeWidth="3" strokeLinecap="round"/>
        </svg>
        </NavLink>
        {isSidebarVisible && <SideBar />}
        




        


      </div>
    </div>
  </div>
</nav>
    )
}

export default Navbar;