import React from "react";
import { NavLink } from "react-router-dom";


const SubTextBox = ({subheading, heading, para, imgsrc, bg, tOrder, pOrder, btn, btnlink,alt}) =>{
    const scrollToTop = () => {
        window.scrollTo(0, 0);
      };

    return(
        <>
            <div className="TextBox" style={{backgroundColor: bg}}>
            <div className="container">
                <div className="row ">
                <div className={`col-lg-6 col-md-12 order-lg-${tOrder} order-md-1  SubTextBox-1`} data-aos="fade-up-right" >
            <h4>{subheading}</h4>
            <h3>{heading}</h3>
            <p>{para}</p>
            {btn && (<NavLink to={btnlink}  onClick={scrollToTop}><button className="btn">{btn}</button></NavLink>)}
            
            </div>
            <div className={`col-lg-6 col-md-12 order-lg-${pOrder} order-md-2 SubTextBox-2 `} data-aos="fade-up-left" >
            
                <img src={imgsrc} alt={alt} className="textboxImg-1" width="100%" height="100%"/>
            
            
            </div>
                
                    

                </div>
            </div>
        </div>
        </>

    )
}

export default SubTextBox;