import React from "react";
import SubTextBox from "./SubTextBox";
import SubTextApi from "./SubTextApi";

const TextBox = () =>{
    
    return (
        <>
            {
            SubTextApi.map((element, index)=>{
                return(
                    <SubTextBox 
                        key={element.id}
                        subheading = {element.subheading}
                        heading = {element.heading}
                        para = {element.para}
                        imgsrc={element.imgsrc}
                        bg = {element.bg}
                        tOrder = {element.tOrder}
                        pOrder = {element.pOrder}
                        btn = {element.btn}
                        btnlink= {element.btnlink}
                        alt={element.alt}
                    />
                )
        
            })
        }
        </>
        

    )
}

export default TextBox;

