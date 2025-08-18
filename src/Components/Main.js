// src/Pages/Home.jsx
import React from "react";
import { FaSkype, FaLinkedinIn } from "react-icons/fa";
import { HiChevronDown } from "react-icons/hi";
import bgImage from "../assets/back.jpg";

const Main = () => {
  return (
   <section
  id="home"
  className="h-[300px] md:h-[500px] lg:h-[500px] bg-cover bg-center flex flex-col items-center justify-center text-white relative"
  style={{
    backgroundImage: `url(${bgImage})`,
  }}
>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 text-center pt-20 px-4">
        <h1 className="text-base md:text-4xl font-bold mb-2">
          Dr. Safdar Hussain
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          Assistant Professor, Department of Economics
        </p>

        {/* Social Icons */}
       <div className="flex justify-center space-x-6 mb-8">
          
          <a
            href="https://www.linkedin.com/in/dr-safdar-hussain-professor"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl hover:text-blue-400 transition-colors"
          >
            <FaLinkedinIn />
          </a>
        </div>

      
      </div>

      <div className="mt-10"> {/* Scroll Down Arrow */}
        <a href="#about" className="inline-block text-white text-4xl animate-bounce">
          <HiChevronDown />
        </a></div>
    </section>
  );
};

export default Main;
