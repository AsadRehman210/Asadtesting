import React from "react";
import BelieveApi from "./BelieveApi";
import BelieveCard from "./BelieveCard";

const HomeBelieve = ()=>{
    return(
        <section className="homeBelieve">
            <div className="container">
                <h4 data-aos="fade-right" >We Believe In</h4>
                <div className="row">
                {
                    BelieveApi.map((element, index)=>{
                        return(
                            <BelieveCard
                            key={index}
                            imgsrc={element.imgsrc}
                            heading ={element.heading}
                            para ={element.para}
                            aos={element.aos}
                            alt={element.alt}
                             />

                        )

                    })
                }
                    
                </div>
            </div>
        </section>

    )
}

export default HomeBelieve;