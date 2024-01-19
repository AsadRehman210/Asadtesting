import React, { useState } from "react";

const ContactForm = () =>{
    let [inputValue, setInputValue] =useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    let getValue =(event)=>{
        const name =event.target.name;
        const value =event.target.value;

        setInputValue((prev)=>{
            return{
                ...prev,
                [name]:value
            }
        })

    }

    // const [send, setSend]=useState("")
    const submit =(event)=>{
        event.preventDefault();
        // setSend(inputValue)
        return  setInputValue({
            name: "",
            email: "",
            subject: "",
            message: ""
        })

    }


    return(
        <form onSubmit={submit}>
            <div className="form_div">
            <input type="text" name="name" placeholder="Your Name*" required className="name" onChange={getValue} value={inputValue.name}/>
            <input type="email" name="email" placeholder="Email Address*" required  className="email" onChange={getValue} value={inputValue.email}/>

            </div>

            <input type="text" name="subject" placeholder="Subject*" required className="subject" onChange={getValue} value={inputValue.subject}/> <br/>
            <textarea type="text" name="message" placeholder="Message*" required  className="message" onChange={getValue} value={inputValue.message}/> <br/>

            <div className="btn1">
            <button data-aos="zoom-in-up">Send Now <i className="fa-solid fa-paper-plane"></i></button>
            </div>
        </form>

    )
}

export default ContactForm;