import React from "react";
import mainPic from "../Images/slider.webp";


const Slider = () =>{
    return(
        <div className="slider">
        
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="2000">
      <img src={mainPic} alt="slider_banner" width="100%" height="100%" className="d-block w-100"/>
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img src={mainPic} alt="slider_banner2"  width="100%" height="100%" className="d-block w-100" />
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img src={mainPic} alt="slider_banner3"  width="100%" height="100%" className="d-block w-100"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        

        </div>
        

        
    )
}

export default Slider;