import React from "react";
import MainCom from "./MainCom";
import ProductApi from "./ProductApi";
import Card from "./Card";

const Products = () =>{
    return(
        <section className="product">
        <MainCom 
            heading="Products"
        />
        <div className="container">
            <div className="row product-card">
            {
                ProductApi.map((element, index)=>{
                    return <Card 
                            key={element.id}
                            imgsrc={element.imgsrc}
                            heading={element.heading}
                            para={element.para}
                            aos ={element.aos}
                            alt={element.alt}
                            />

                })
            }

            </div>
        </div>

        </section>
    )
}

export default Products;