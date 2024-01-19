import React, { useState } from "react";
import sideLogo from "../Images/logo.png"

const SideBar = () => {
  let [offBar, setOffBar] = useState(false);

  const closeBar = () => {
    setOffBar(prevOffBar => !prevOffBar);
  };

  return (
    <section className={`right_bar${offBar ? " closed" : ""}`}>
      <div className="side_bar">
        <div className="container">
          <div className="row">
            <div className="col-12 side-logo">
              <img src={sideLogo} alt="side_logo" width="100%" height="100%" />
              
              {!offBar && (
                <i className="fa-solid fa-times-circle" onClick={closeBar}></i>
              )}
            
            </div>
            <hr />
            <div className="col-12 side-text">
              <p>Al-Asr Your trusted partner for effective and sustainable crop protection solutions, ensuring healthy yields and supporting global food security.</p>
            </div>
            <div className="col-12 side-contact">
                <h3>Contact Us</h3>
                <ul type="none" className="list-1">
                    <li><a href="https://maps.app.goo.gl/LV89zQ3vhVsstsGz5" target="_blank" rel="noopener noreferrer">
                    
                    <i className="fa-solid fa-map-location-dot"></i>
                    <span className="side_list">Head office:327 A.A Phase 04 DHA LAHORE , Lahore, Pakistan.</span>
                    </a></li>

                    <li><a href="mailto:mmijaz110@gmail.com">
                    <span className="font_design">
                    <i className="fa-solid fa-envelope"></i>  
                    </span>
                    <span className="side_list">mmijaz110@gmail.com</span>
                    </a></li>

                    <li><a href="tel:+923004009110"> 
                    <span className="font_design">
                    <i className="fa-solid fa-phone"></i>   
                    </span>
                    <span className="side_list">+92 (300) 4009110</span>
                    </a></li>
                </ul>

                <h3 className="side_social">Sidebar Follow</h3>

                <ul type="none" className="list-2">
                    <li><a href="mailto:mmijaz110@gmail.com"> <i className="fa-brands fa-twitter element"></i> </a></li>

                    <li><a href="mailto:mmijaz110@gmail.com"><i className="fa-brands fa-linkedin-in element"></i></a></li>

                    <li><a href="tel:+923004009110"> <i className="fa-brands fa-facebook-f element"></i></a></li>
                    <li><a href="tel:+923004009110"> <i className="fa-brands fa-instagram element"></i></a></li>
                </ul>


                </div>


                </div>
            </div>
        </div>
        {/* )} */}

        </section>
        

    )
}

export default SideBar;