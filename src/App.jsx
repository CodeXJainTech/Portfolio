import React from "react";
import About from "./Components/About/About";
import Navbar from "./Components/Navbar/Navbar";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import Skills from "./Components/Skills/Skills";
import Work from "./Components/Work/Work";
import BlurBlob from "./Components/BlurBlob";

function App() {

  return (
    <>
      <div className="bg-[#001214]">

        <BlurBlob position={{top: '35%', left: '20%'}} size={{width: '20%', height: '30%'}}></BlurBlob>
        
        {/* -------Online pattern------- */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#4f4f4f2e_25%,transparent_25%,transparent_75%,#4f4f4f2e_75%,#4f4f4f2e),linear-gradient(45deg,#4f4f4f2e_25%,transparent_25%,transparent_75%,#4f4f4f2e_75%,#4f4f4f2e)] bg-[size:20px_20px] bg-[position:0_0,10px_10px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        <div className="relative pt-20">
          <Navbar />
          <About />
          <Skills />
          <Experience />
          <Work />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
