import React from "react";
import MainCom from "./MainCom";
import SubTextBox from "./SubTextBox";
import Submission from "./Submission";
import SubmissApi from "./SubmissApi";


const About = () =>{
    return(
        <section className="About">
        <MainCom 
            heading="About Us"
        />
        <SubTextBox           
        subheading = ""
        heading = "Welcome to Al-Asr Enterprises"
        para = {<>
        A trusted pioneer in delivering high-quality agricultural pesticides across Pakistan. Our mission is to equip our farmers with superior, effective solutions that promote the growth of robust, sustainable crops, fostering healthier communities. <br/><br/>Al Asr Enterprises was built on a foundation of trust, innovation, and exceptional customer service. We are devoted to supplying products that are not just potent but safe, complimented by bespoke support and industry knowledge, aiming to pave our clients' paths to success. <br/><br/>
        At Al Asr Enterprises, we acknowledge and respect the incredible potential of agriculture in nurturing and sustaining our planet. We take pride in empowering farmers and growers with cutting-edge technology and optimal practices, driving a flourishing agricultural economy.<br/><br/>
        We appreciate you for choosing Al Asr Enterprises. We eagerly anticipate the opportunity to work with you and aid you in attaining your aspirations.
        </>}
        imgsrc="Images/about.webp"
        alt="Al-Asr"
        bg = "#FFF"
        tOrder = "1"
        pOrder = "2"
                        
        />
        <div className="container">
            <div className="row mission_row">
                <h4>Mission</h4>
                {
                    SubmissApi.map((element, index)=>{
                        return(
                            <Submission
                            key={element.id}
                            imgsrc ={element.imgsrc}
                            para={element.para}
                            bg= {element.bg}
                            imgbg= {element.imgbg}
                            color={element.color}
                            aos ={element.aos}
                            alt={element.alt}
                            />
                        )

                    })
                }
                

            </div>
            <div className="row mission_row_2">
            <h4>Vision</h4>
            <div className="col-lg-6 col-md-12 mission-row-design">
                <p>To provide reliable quality crop solutions on optimum prices to all commercial growers and to protect them from threats of crop production.</p>
            </div>
            <div className="col-lg-6 col-md-12 mission-row-design">
                <p>To be a dynamic business group building robust businesses that excel at serving their customers and stakeholders through exceptional products and services in industries and markets that support progression and economic growth at community, society and country level.</p>
            </div>

            </div>
        </div>
        


        </section>
    )
}

export default About;