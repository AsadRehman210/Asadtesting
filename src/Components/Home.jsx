import React from "react";
import Slider from "./Slider";
import TextBox from "./TextBox";
import Mission from "./Mission";
import HomeCard from "./HomeCard";
import HomeWork from "./HomeWork";
import HomeBelieve from "./HomeBelieve";
import HomeNews from "./HomeNews";

const Home =() =>{
    
    return(
        <section className="Home" >
        <Slider />
        <TextBox />
        <Mission />
        <HomeCard />
        <HomeWork />
        <HomeBelieve />
        <HomeNews />
        

        </section>

    )
}

export default Home;