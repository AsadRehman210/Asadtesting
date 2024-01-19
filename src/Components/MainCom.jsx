import React from "react";
// import banner from "../Images/banner.png";

const MainCom = ({heading}) =>{
    return(
        <div className="main_comp">
        <div className="container">
        <div className="row">
            <div className="col-12">
            <h2 data-aos="zoom-in-up">{heading}</h2>
            <p>Home/<span data-aos="fade-left">{heading}</span></p>

            </div>
        </div>
        </div>


        </div>

    )
}
export default MainCom;