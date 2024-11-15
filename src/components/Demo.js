import React from "react";
import { Bars3Icon } from '@heroicons/react/24/solid';
import { useState } from "react";

function Demo(){
    const [toggle, setToggle]=useState(false)

    return <header className="flex justify-between px-5 py-2 bg-primary">
        <a href="#" className="font-bold text-black"> Surya</a>
        <nav className="hidden md:block">
        <ul className="flex text-white">
            <li><a href="/"> Home</a></li>
            <li> <a href="#about">About</a></li>
            <li> <a href="#projects">Projects</a></li>
            <li><a href="#resume">Resume</a></li>
            <li> <a href="#contact">Contact</a></li>
        </ul>
        </nav>
          { toggle && <nav className="block md:hidden mobile-nav">
        <ul className="flex flex-col text-white">
            <li><a href="#"> Home</a></li>
            <li> <a href="#">About</a></li> 
            <li> <a href="#">Projects</a></li>
            <li> <a href="#">Contact</a></li>
        </ul>
        </nav>}
        <button onClick={()=> setToggle(!toggle)} className="block md:hidden"> < Bars3Icon className="text-white h-5"/></button>
    </header>

    
};

export default Demo