import React from "react";

const Card = ({imgsrc, heading, para, alt, aos})=>{
    return(
        <>
            <div className="col-lg-3 col-md-6 col-sm-12 cards" >
                        <div className="card-item" data-aos={aos}>
                            <div className="upper_layer">
                                <img src={imgsrc} alt={alt} width="100%" height="100%"/>
                            </div>
                            <div className="lower_layer">
                                <h4>{heading}</h4>
                                <p>{para}</p>
                            </div>
                        </div>
                    </div>
        </>

    )
}
export default Card;