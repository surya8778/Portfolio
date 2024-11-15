import React from "react";
import HeroImg from '../assets/Hero.jpg'
import { AiOutlineLinkedin,AiOutlineFacebook } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";

function Hero(){
    return <section className="flex flex-col md:flex-row py-32 px-5 bg-primary justify-center">
        <div className="md:w-1/2 flex flex-col">
        <h1 className="w-1/2 text-white text-4xl font-hero-font"> Hi, <br /> Im Surya K
          <p className="text-2xl">
            Im a Full-Stack developer
          </p>
        </h1>
         <div className="flex py-5 ">
             <a href="#" className="pr-5">< AiOutlineLinkedin size={40}/></a>
             <a href="#" className="pr-5"> <FaTwitter size={40}/></a>
             <a href="#"> < AiOutlineFacebook size={40}/></a>
         </div>
        </div>
        <img className="md:w-1/3" src={HeroImg} />
    </section>
}
export default Hero