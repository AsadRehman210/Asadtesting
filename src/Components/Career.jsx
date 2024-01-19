import React from "react";
import MainCom from "./MainCom";

const Career = () =>{
    return(
        <section className="career">
        <MainCom 
            heading="Career"
        />
            <div className="container">
                <div className="row career_row">
                    <div className="col-12">
                        <h5>Our Career</h5>
                        <h4>We currently have no job openings</h4>
                        <p>Send your resume along with all the necessary supporting documents to the relevant email address given below:</p>
                        <ul type="none">
                            <li>
                            <a href="mailto:mmijaz110@gmail.com">
                            <i className="fa-solid fa-envelope" data-aos="zoom-in-up"></i>
                            mmijaz110@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default Career;