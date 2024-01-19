import React from "react";


const Submission = ({imgsrc, para, bg, imgbg, color, aos, alt}) =>{
    return(
        <div className="col-lg-6 col-md-12 sub_mission" style={{backgroundColor: bg, color: color}} data-aos={aos}>
        <div className="mission-img" style={{backgroundColor: imgbg}}>
        <img src={imgsrc} alt={alt} width="100%" height="100%"/>
        </div>
        <p>{para}</p>


        </div>

    )
}

export default Submission;