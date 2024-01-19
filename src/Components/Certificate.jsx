import React from "react";
import MainCom from "./MainCom";

const Certificate =()=>{
    return(
        <section className="certificate">
        <MainCom 
            heading="Certification"
        />

<div className="container">
                <div className="row certificate_row">
                    <div className="col-12">
                        <h5> Our Certification</h5>
                        <h4 data-aos="zoom-in-down">Certificate Not Found</h4>
                        <p>The certificate you are looking for is currently not available on our website. We apologize for any inconvenience this may cause. Please feel free to contact our support team or check back at a later time as we work to update our certificate database.<br/><br/>

                        If you have any questions or need further assistance, please don't hesitate to reach out to our customer support for help and more information.<br/><br/>

                        Thank you for your understanding and patience.</p>
                        <ul type="none">
                            <li>
                            <a href="mailto:mmijaz110@gmail.com">
                            <i className="fa-solid fa-envelope" data-aos="fade-right"></i>
                            mmijaz110@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Certificate;