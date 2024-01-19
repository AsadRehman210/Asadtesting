import React from "react";
import { NavLink } from "react-router-dom";


const NewsCard = ({imgsrc, heading, para, alt, aos}) =>{
    const scrollToTop = () => {
        window.scrollTo(0, 0); // Scroll to the top of the page
      };
    return(

        
            <div className="col-lg-4 col-md-12 col-sm-12 newsCard" data-aos={aos}>
                <img src={imgsrc} alt={alt} width="100%" height="100%"/>
                <h3>{heading}</h3>
                <p>{para}</p>
                <NavLink to="/" onClick={scrollToTop} >Read More</NavLink>


                </div>
        

    )
}

export default NewsCard;