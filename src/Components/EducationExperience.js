import React from "react";

const EducationExperience = () => {
  return (
    <section
      id="educational-professional-experience"
      className="py-12 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* ================= EDUCATION ================= */}
        <div className="mb-16">
          <h2 className="text-2xl text-indigo-900 font-bold uppercase tracking-wide border-b-2 border-teal-600 w-fit mb-8 ml-2 sm:ml-6">
            Education
          </h2>

          <div className="space-y-10 text-left ml-0 sm:ml-10 md:ml-20 lg:ml-40">
            <div>
              <h3 className="font-bold text-indigo-900 text-xl">
                Shenzhen University, China
              </h3>
              <p className="italic text-indigo-800">
                Post-Doctorate (Management Sciences) • 2018 – 2020
              </p>
              <p className="text-gray-500">
                Research Area: Marketing and Trade
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-900 text-xl">
                Fujian Agriculture and Forestry University, China
              </h3>
              <p className="italic text-indigo-800">
                Ph.D. (Agricultural Economics and Management) • 2013 – 2016
              </p>
              <p className="text-gray-500">
                Research Area: Marketing and Trade
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-900 text-xl">
                PMAS-Arid Agriculture University Rawalpindi, Pakistan
              </h3>
              <p className="italic text-indigo-800">
                MBA (Agri. Business Management, Marketing) • 2008 – 2011
              </p>
              <p className="text-gray-500">
                Research Area: Agri-Business Management, Marketing
              </p>
            </div>
          </div>
        </div>

        {/* ================= PROFESSIONAL EXPERIENCE ================= */}
        <div>
          <h2 className="text-2xl text-indigo-900 font-bold uppercase tracking-wide border-b-2 border-teal-600 w-fit mb-8 ml-2 sm:ml-6">
            Professional Experience
          </h2>

          <div className="space-y-10 text-left ml-0 sm:ml-10 md:ml-20 lg:ml-40">
            <div>
              <h3 className="font-bold text-xl text-indigo-900">
                Assistant Professor
              </h3>
              <p className="italic text-indigo-800">
                Department of Economics, PMAS-Arid Agriculture University Rawalpindi • 2021 – Present
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl text-indigo-900">
                Lecturer
              </h3>
              <p className="italic text-indigo-800">
                Department of Economics, PMAS-Arid Agriculture University Rawalpindi • 2017 – 2021
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl text-indigo-900">
                Admin Superintendent
              </h3>
              <p className="italic text-indigo-800">
                PMAS-Arid Agriculture University Rawalpindi • 2010 – 2017
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationExperience;
