import React from "react";
import Card from "./Card";
import HomeCardApi from "./HomeCardApi";


const HomeCard = () =>{
    return(
        <section className="homeCard">
            <div className="container">
                <div className="row">
                {
                    HomeCardApi.map((element, index)=>{
                        return(
                            <Card 
                            key={element.id}
                            imgsrc={element.imgsrc}
                            heading={element.heading}
                            para={element.para}
                            alt = {element.alt}
                            aos ={element.aos}
                            />
                        )

                    })
                }
                    
                </div>
            </div>
        </section>

    )
}

export default HomeCard;