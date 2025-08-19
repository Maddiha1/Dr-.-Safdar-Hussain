// About.jsx
import React from "react";
import profileImg from "../assets/profile.jpg"; // Replace with your image file

const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-200 text-indigo-900 py-10 px-4 sm:px-8 md:px-16 lg:px-20"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        {/* Left Side Image */}
        <div className="flex justify-center md:justify-start">
          <img
            src={profileImg}
            alt="Dr. Safdar Hussain"
            className="shadow-lg rounded-lg w-40 sm:w-56 md:w-64 lg:w-72 h-auto object-cover"
          />
        </div>

        {/* Right Side Content */}
        <div className="md:col-span-2 space-y-4 text-justify">
          <h2 className="text-2xl sm:text-3xl font-bold">About Me</h2>

          <p>
            My Ph.D. research focused on{" "}
            <span className="font-bold text-indigo-800">
              Agricultural Economics and Management,
            </span>{" "}
            with a particular emphasis on sustainable agriculture, trade, and
            marketing systems. During my doctoral studies at{" "}
            <span className="font-bold text-indigo-800">
              Fujian Agriculture and Forestry University, China,
            </span>{" "}
            I explored the integration of economic policies with agricultural
            practices to enhance food security and sustainability. Later, during
            my Post-Doctoral research at{" "}
            <span className="font-bold text-indigo-800">
              Shenzhen University, China,
            </span>{" "}
            I expanded my expertise to include management sciences, digital
            transformation, and Industry 4.0 & 5.0 technologies.
          </p>

          <p>
            I have successfully executed{" "}
            <span className="font-bold text-indigo-800">
              national and international research projects{" "}
            </span>
            in areas such as circular economy, supply chain optimization, and
            sustainable performance of agri-food systems. These collaborations
            include work with
            <span className="font-bold text-indigo-800"> partners in China </span>
            and Pakistan, where I have applied innovative research models{" "}
            <span className="font-bold text-indigo-800">
              (PLS-SEM, ANN, and SEM-IPMA)
            </span>{" "}
            to solve real-world challenges. My research has been recognized both
            academically and practically, and I have received competitive
            research grants to support projects in agricultural development and
            digital transformation.
          </p>

          <p>
            In addition to my academic work, I have been actively involved in
            training programs, international conferences, and workshops, where I
            served as a lead trainer and coordinator. I have a strong commitment
            to mentoring M.Phil. and Ph.D. scholars, fostering international
            collaborations, and creating knowledge-sharing platforms that bridge
            academia and industry.
          </p>

          <p>
            With{" "}
            <span className="font-bold text-indigo-800">
              55+ publications, 1400+ citations,
            </span>{" "}
            and an h-index of 10, my contributions to the field continue to
            grow. I aim to leverage geospatial technologies, advanced analytics,
            and economic models to support sustainable development, enhance
            agricultural productivity, and guide policy formulation.
          </p>

          <h3 className="text-lg sm:text-xl font-semibold mt-6">
            Contact Details
          </h3>
          <div className="space-y-1">
            <p>Dr. Safdar Hussain</p>
            <p>ranasafdar@uaar.edu.pk</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
