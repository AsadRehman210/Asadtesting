import React, { useEffect, useState } from "react";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const Topbutton = () =>{
    let [isvisible, setIsvisible] = useState(false)
    let GoToTop = () =>{
        return window.scrollTo({top:0, left: 0})
    }

    let showTopbtn = ()=>{
        const height = 250;
        const scroll_height = document.body.scrollTop || document.documentElement.scrollTop;
        
        if (scroll_height > height){
            setIsvisible(true)

        }else{
            setIsvisible(false)

        }
    }

    useEffect(()=>{

        window.addEventListener("scroll", showTopbtn);
        return ()=>window.removeEventListener("scroll", showTopbtn);
    }, []);

    return(
        <>
            {isvisible && (<div className="top_btn" onClick={GoToTop}>
        <ArrowUpwardIcon fontSize="large" className="top_btn--icon"/> 
       
    </div>)}
        </>

    )
}

export default Topbutton;