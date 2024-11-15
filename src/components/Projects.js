import React from "react";
import ecomImg from '../assets/ecom.avif';
import amazImg from '../assets/Amazon.jpeg'

function Project(){
    return <section className="flex flex-col py-20 px-5 justify-center bg-primary" id="projects">
        <div className="w-1/2"> 
            <div className="flex justify-center">
                 <h1 className="text-4xl text-white border-b-4 w-[130px]">
                    Projects
                  </h1>
            </div>
        </div>
        <div className="w-full text-white"> 
            <div className="flex px-10 py-10 gap-10  flex-col md:flex-row ">
                <div className="relative">
                    <img  className="h-[300px] w-[500px]" src={ ecomImg}/>
                    <div className="absolute left-0 right-0 bottom-0 top-0 bg-secondary opacity-0 duration-500 hover:opacity-100">
                        <p className="text-center py-5 m-2"> Ecommerce Website developed by using Django application</p>
                    </div>
                </div>
                <div className="relative">
                      <img className="h-[300px] w-[500px]" src={ amazImg}/>
                      <div className="absolute left-0 right-0 bottom-0 top-0 bg-secondary opacity-0 duration-500 hover:opacity-100">
                        <p className="text-center py-5 m-2"> Amazon clone Web page developed by using HTML and CSS</p>
                      </div>
                </div>

            
           
            </div>
        </div>
    </section>
};

export default Project