import React from "react";

const BelieveCard = ({imgsrc, heading, para, aos, alt}) =>{
    return(
        <div className="col-lg-4 col-md-6 col-sm-12 believe_card" data-aos={aos}>
                    <img src={imgsrc} alt={alt} width="100%" height="100%"/>
                    <h5>{heading}</h5>
                    <p>{para}</p>


        </div>

    )
}

export default BelieveCard;