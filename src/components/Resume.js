import React from "react";
import resumeImg from '../assets/resume.jpeg'

function Resume(){
    const resume={
        link: 'file:///C:/Users/surya/Documents/Surya-Developer-Resume.pdf'
    }
    return <section className="flex flex-col md:flex-row bg-secondary px-5 pt-10" id="resume">
          <div className=" py-5 md:w-1/2 px-10 flex justify-end">
            <img src={resumeImg} alt="" />
          </div>
            <div className=" md:w-1/2 flex justify-center">
               <div className="flex flex-col justify-center text-white">
                   <h1 className="text-4xl text-white border-b-4 w-[130px]">Resume</h1>
                    <p className=" pt-3 pb-5"> You can download my resume <a className="btn bg-secondary" href={resume.link}> Download</a></p>
                    
               </div>
            </div>
    </section>
};
export default Resume