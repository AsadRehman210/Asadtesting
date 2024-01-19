import React from "react";
import MainCom from "./MainCom";
import SubTextBox from "./SubTextBox";
import CropApi from "./CropApi";

const Crops = () =>{
    return(
        <section className="crops">
        <MainCom 
            heading="Crops"
        />
        {
            CropApi.map((element, index)=>{
                return(
                    <SubTextBox 
                        key={index}
                        subheading = {element.subheading}
                        heading = {element.heading}
                        para = {element.para}
                        imgsrc={element.imgsrc}
                        bg = {element.bg}
                        tOrder = {element.tOrder}
                        pOrder = {element.pOrder}
                        alt={element.alt}
                        
                    />
                )
                

            })
        }


        </section>
    )
}

export default Crops;