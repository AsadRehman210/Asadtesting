import React from "react";
import poster from "../Images/video.webp";
import video from "../Images/video.mp4"


const HomeWork = () =>{
    return(
        <section className="homework">
        <div className="container">
            <div className="row homework-1">
                <div className="col-12" >
                   <h4 data-aos="fade-right">How We Work</h4>
                   <h3 data-aos="fade-right">Media Library</h3>
                   <p data-aos="fade-right">Discover the latest media library or read client reviews for expert analysis on industry trends and development.</p>
                   
                </div>
                
            </div>
            <div className="row homework-2">
            <div className="col-12">
                <div className="video">
                
                 <video width="400" height="315" loop muted poster={poster} controls>
                <source src={video}  type="video/mp4" />
                
              </video> 

                   </div>
                </div>
            </div>
        </div>

        </section>

    )
}

export default HomeWork;