import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./CSS/Index.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import { Route, Routes, useLocation} from "react-router-dom";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Products from "./Components/Products";
import Crops from "./Components/Crops";
import Career from "./Components/Career";
import Certificate from "./Components/Certificate";
import About from "./Components/About";
import Contact from "./Components/Contact.jsx";
import Topbutton from "./Components/Topbutton.jsx";
import Management from "./Components/Management.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
// import "aos/dist/aos.js";



const App = () =>{
    useEffect(() => {
        AOS.init({
            offset: 120,
            delay:50,
            
        });
      }, []);

    const {pathname} = useLocation();

    useEffect(()=>{
        window.scrollTo({top:0, behavior: "smooth"});

        },[pathname]);
    
        
    
    
    return(
        <>
           
           <Header />
           <Navbar />
           
           <Routes>
                  <Route exact path="/" element={<Home />}  />
                  <Route path="/product" element={<Products />} />
                  <Route path="/crop" element={<Crops />} />
                  <Route path="/career" element={<Career />} />
                  <Route path="/certificate" element={<Certificate />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/management" element={<Management />} />
                  
     
           </Routes>
           <Footer />
           <Topbutton />
          
        
        

        </>
    )
}

export default App;