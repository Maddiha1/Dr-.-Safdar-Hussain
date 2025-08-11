// About.jsx
import React from "react";
//import profileImg from "../assets/profile.webp"; // Replace with your image file

const About = () => {
  return (
    <section id="about" className="bg-gray-900 text-white py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Side Image */}
        <div className="flex justify-center">
          <img
           // src={profileImg}
            alt="Dr. Safdar Hussain"
            className="rounded-lg shadow-lg w-full md:w-auto"
          />
        </div>

        {/* Right Side Content */}
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p>
          I am an Assistant Professor and Research Coordinator at 
          PMAS-Arid Agriculture University,Rawalpindi, with 
          expertise in Agricultural Economics, Marketing, and 
          Trade. I hold a Ph.D.in Agricultural Economics and Management
          from Fujian Agriculture and Forestry University, China, 
         and a Post-Doctorate in Management Sciences from Shenzhen University, China.
          </p>

          <p>
            With 55+ impact factor publications and over 1400 citations, 
            my research focuses on Industry 4.0 & 5.0 technologies, the 
            digital economy, circular economy, and agricultural sustainability. 
            I have led national and international research projects, including 
            collaborations funded by the China Science Foundation and Punjab 
            Agricultural Research Board.
          </p>

          <p>
            Alongside research, I actively mentor Ph.D. and M.Phil. 
            scholars and have organized numerous international conferences, 
            workshops, and training programs, fostering strong academia-industry 
            linkages. My work aims to bridge technology, policy, and sustainable 
            development for impactful real-world solutions.</p>

          <h3 className="text-xl font-semibold mt-6">Contact Details</h3>
          <ul className="list-disc list-inside space-y-1">
            <p>Dr. Safdar Hussain</p>
            <p>ranasafdar@uaar.edu.pk</p>
          </ul>

        </div>
      </div>
    </section>
  );
};

export default About;
