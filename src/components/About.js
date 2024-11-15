import React from "react";
import aboutImg from '../assets/about.png'

function About(){
    return <section className="flex flex-col md:flex-row bg-secondary px-5 pt-10" id='about'>
          <div className=" py-5 md:w-1/2 px-10">
            <img src={aboutImg} alt="" />
          </div>
            <div className=" md:w-1/2 flex justify-center">
               <div className="flex flex-col justify-center text-white">
                   <h1 className="text-4xl text-white border-b-4 w-[170px]">About Me</h1>
                    <p className=" pt-3 pb-5">Hi, My name is Surya K.I am a Full-stack web developer.I built a websites with Reactjs and Bootstrap CSS</p>
                    <p className="pb-5"> I am proficient in Frontend skills like HTML,CSS,JavaScript,Bootstrap and React JS.</p>
                    <p>In Backend l know Python,Django and SQl </p>
               </div>
            </div>
    </section>
};
export default About