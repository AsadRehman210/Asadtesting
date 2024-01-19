import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../Images/logo.png"

const Footer = () =>{
    const scrollToTop = () => {
        window.scrollTo(0, 0); // Scroll to the top of the page
      };

    return(
        <footer>
            <div className="container">
                <div className="row upper_footer outer_padding">
                <div className="col-lg-2 col-md-6 col-sm-12">
                    <h6>Quick Links</h6>
                    <ul type="none">
                        <li className="move"><NavLink to="/" onClick={scrollToTop}>Home</NavLink></li>
                        <li className="move"><NavLink to="/product" onClick={scrollToTop}>Products</NavLink></li>
                        <li className="move"><NavLink to="/crop" onClick={scrollToTop}>Crops</NavLink></li>
                        <li className="move"><NavLink to="/certificate" onClick={scrollToTop}>Certification</NavLink></li>
                    </ul>

                </div>

                <div className="col-lg-2 col-md-6 col-sm-12">
                    <h6>Other Pages</h6>
                    <ul type="none">
                        <li className="move"><NavLink to="/about" onClick={scrollToTop}>About Us</NavLink></li>
                        <li className="move"><NavLink to="/management" onClick={scrollToTop}>Management</NavLink></li>
                        <li className="move"><NavLink to="/contact" onClick={scrollToTop}>Contact Us</NavLink></li>
                        <li className="move"><NavLink to="/career" onClick={scrollToTop}>Career</NavLink></li>
                    </ul>

                </div>

                <div className="col-lg-4 col-md-6 col-sm-12">
                    <h6>Contact Info</h6>
                    <ul type="none">
                        <li><a href="tel:+923004009110" className="element"> <i className="fa-solid fa-phone-volume"></i> +92 300 4009110</a></li>
                        <li><a href="mailto:mmijaz110@gmail.com" className="element"> <i className="fa-regular fa-envelope"></i> mmijaz110@gmail.com</a></li>
                        <li><a href="https://maps.app.goo.gl/LV89zQ3vhVsstsGz5" className="element" target="_blank" rel="noopener noreferrer"> <i className="fa-solid fa-location-dot"></i> Head office:327 A.A Phase 04 DHA LAHORE , Lahore, Pakistan</a></li>
                        
                    </ul>

                </div>

                <div className="col-lg-4 col-md-6 col-sm-12">
                    <h6>Free Consultation</h6>
                    <ul type="none">
                        <li> For more information, call our toll-free helpline.</li>
                        <li className="phone_design"><a href="tel:+923004009110"> 
                        <span><i className="fa-solid fa-phone"></i></span>  +92 300 4009110</a></li>
                        
                        
                    </ul>

                </div>


                </div>
                <hr />
                <div className="row lower_footer">
                    <div className="col-6 lower_footer_1">
                    <NavLink to="/" onClick={scrollToTop}>
                    <img src={logo} alt="logo" width="100%" height="100%" />
                    </NavLink>
                    <p>Developed By Al-ASR Digital Team</p>

                    </div>
                    <div className="col-6 lower_footer_2">
                    <p>Asad Rehman 2023 all rights reserved</p>
                        
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer;