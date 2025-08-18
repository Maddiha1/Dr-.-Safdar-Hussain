import React from "react";

const EducationExperience = () => {
  return (
    <section
      id="educational-professional-experience"
      className="p-10 bg-white"
    >
      {/* Education */}
      <div className="mb-12">
        <h2 className="text-lg font-bold uppercase tracking-wide border-b-2 border-teal-600 pb-1 inline-block mb-8 mt-5 ml-80">
          Education
        </h2>
        <div className="space-y-10 ml-80">
          <div>
            <h3 className="font-bold text-xl ml-40">
              Shenzhen University, China
            </h3>
            <p className="italic text-gray-700 ml-40">
              Post-Doctorate (Management Sciences) • 2018 – 2020
            </p>
            <p className="text-gray-500 ml-40">
              Research Area: Marketing and Trade
            </p>
          </div>
          <div>
            <h3 className="font-bold text-xl ml-40">
              Fujian Agriculture and Forestry University, China
            </h3>
            <p className="italic text-gray-700 ml-40">
              Ph.D. (Agricultural Economics and Management) • 2013 – 2016
            </p>
            <p className="text-gray-500 ml-40">
              Research Area: Marketing and Trade
            </p>
          </div>
          <div>
            <h3 className="font-bold text-xl ml-40">
              PMAS-Arid Agriculture University Rawalpindi, Pakistan
            </h3>
            <p className="italic text-gray-700 ml-40">
              MBA (Agri. Business Management, Marketing) • 2008 – 2011
            </p>
            <p className="text-gray-500 ml-40">
              Research Area: Agri-Business Management, Marketing
            </p>
          </div>
        </div>
      </div>

      {/* Professional Experience */}
      <div>
        <h2 className="text-lg font-bold uppercase tracking-wide border-b-2 border-teal-600 pb-1 inline-block mb-8 ml-80">
          Professional Experience
        </h2>
        <div className="space-y-10 ml-80">
          <div>
            <h3 className="font-bold text-xl ml-40">Assistant Professor</h3>
            <p className="italic text-gray-700 ml-40">
              Department of Economics, PMAS-Arid Agriculture University Rawalpindi • 2021 – Present
            </p>
          </div>
          <div>
            <h3 className="font-bold text-xl ml-40">Lecturer</h3>
            <p className="italic text-gray-700 ml-40">
              Department of Economics, PMAS-Arid Agriculture University Rawalpindi • 2017 – 2021
            </p>
          </div>
          <div>
            <h3 className="font-bold text-xl ml-40">Admin Superintendent</h3>
            <p className="italic text-gray-700 ml-40">
              PMAS-Arid Agriculture University Rawalpindi • 2010 – 2017
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationExperience;
