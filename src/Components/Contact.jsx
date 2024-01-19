import React from "react";
import MainCom from "./MainCom";
import ContactForm from "./ContactForm";

const Contact = () =>{
    return(
        <section className="contact">
        <MainCom 
            heading="Contact Us"
        />
        <div className="container">
            <div className="row contact_row">
                <div className="col-lg-6 col-md-12 contact_1">
                    <h3 data-aos="fade-right" >Contact Info</h3>
                    <p>We're here to assist you. Please don't hesitate to get in touch with us if you have any questions, comments, or feedback. You can reach us through the following contact methods:</p>
                    <ul type="none">
                        <li><a href="tel:+923004009110"><i className="fa-solid fa-square-phone element" data-aos="zoom-in-up" ></i></a>
                            <ul type="none">
                            <li>Phone</li>
                            <li><a href="tel:+923004009110" className="element">+92 300 4009110</a></li>

                            </ul>
                        </li>

                        <li><a href="mailto:info@al-asr.com"><i className="fa-solid fa-square-envelope element" data-aos="zoom-in-up" ></i></a>
                            <ul type="none">
                            <li>Email</li>
                            <li><a href="mailto:mmijaz110@gmail.com" className="element">mmijaz110@gmail.com</a></li>

                            </ul>
                        </li>

                        <li><a href="tel:+923004009110"><i className="fa-solid fa-map-location-dot element" data-aos="zoom-in-up" ></i></a>
                            <ul type="none">
                            <li>Address</li>
                            <li><a href="tel:+923004009110" className="element">Mohallah Hajwair Nagar, Street# 7, Narowal</a></li>

                            </ul>
                        </li>
                    </ul>

                </div>
                <div className="col-lg-6 col-md-12 contact_2">
                <h3 data-aos="zoom-in-down" >Send A Message</h3>
                <ContactForm />

                </div>
            </div>
        </div>
        

        </section>
    )
}

export default Contact;