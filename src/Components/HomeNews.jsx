import React from "react";
import NewsCard from "./NewsCard";
import NewsApi from "./NewsApi";
const HomeNews = () =>{
    return(
        <section className="homeNews">
        <div className="container">
           <div className="row">
           <h4>Our News</h4>
            <h3>LATEST ARTICLE</h3>
            <p>Stay informed with our latest article, providing expert insights and analysis on the latest industry trends and developments.</p>
           </div>
            <div className="row">
            {
                NewsApi.map((element, index)=>{
                    return(
                        <NewsCard 
                        key={index}
                        imgsrc={element.imgsrc}
                        heading={element.heading}
                        para={element.para}
                        alt={element.alt}
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

export default HomeNews;