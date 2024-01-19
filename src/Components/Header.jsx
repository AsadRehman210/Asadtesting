import React from "react";

const Header = () =>{

    return(
        <header>
        <div className="container">
            <div className="row">
            <div className="col-lg-8 col-md-12 header-1">
        <ul type="none" >
            <li data-aos="fade-right" >
            <a href="https://maps.app.goo.gl/LV89zQ3vhVsstsGz5" target="_blank" rel="noopener noreferrer">
            <i className="fa-solid fa-location-dot element"></i>
            Head office:327 A.A Phase 04 DHA LAHORE , Lahore, Pakistan</a>
            </li>

            <li data-aos="fade-left" >
            <a href="mailto:mmijaz110@gmail.com"><i className="fa-regular fa-envelope element"></i>mmijaz110@gmail.com </a>
            </li>
        </ul>
        </div>

        <div className="col-lg-4 col-md-12  header-2">
            <ul type="none" className="text-md-center">
                <li><a href="https://www.facebook.com/profile.php?id=100063985082588" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook-f element" data-aos="fade-right" ></i></a></li>

                <li><a href="https://www.facebook.com/profile.php?id=100063985082588" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram element" data-aos="fade-left" ></i></a></li>

                <li><a href="https://www.facebook.com/profile.php?id=100063985082588" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-twitter element" data-aos="fade-right" ></i></a></li>

                <li><a href="https://www.facebook.com/profile.php?id=100063985082588" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin element" data-aos="fade-left" ></i></a></li>
            </ul>
        </div>
            </div>
        </div>
        

        </header>
    )
}

export default Header;