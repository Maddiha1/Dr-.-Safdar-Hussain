import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 border-l-4 border-blue-600 pl-4 mb-8">
          Projects & Awards
        </h2>

        {/* Project List */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-700">
              Principal Investigator – China Science Foundation
            </h3>
            <p className="text-gray-600 text-sm">
              Grant Number: 2019M653050
              <br />
              <strong>Title:</strong> Exploring the Novel Input Attributes Affecting eWOM, mediated by Information-Related Interactions (Completed in 2020)
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-700">
              Principal Investigator – Urban Development & Industry
            </h3>
            <p className="text-gray-600 text-sm">
              Research Project: Expansions of Cities and Agricultural Sustainability (Pipeline)
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-700">
              Principal Investigator – Punjab Agricultural Research Board (PARB)
            </h3>
            <p className="text-gray-600 text-sm">
              Government of Punjab, Pakistan
              <br />
              <strong>Title:</strong> Role of modern technologies to save Rice and Wheat produce and labor cost: a comparative study of China and Pakistan (Pipeline)
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-700">
              Principal Investigator – RASTA Competitive Grants Program
            </h3>
            <p className="text-gray-600 text-sm">
              Research for Social Transformation and Advancement, Pakistan Institute of Development Economics, Islamabad
              <br />
              <strong>Title:</strong> Expansion of Cities and Agricultural Sustainability: Urban Development & Industry (Pipeline)
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-700">
              Excellent Research Award
            </h3>
            <p className="text-gray-600 text-sm">
              For Five Years Students of the University (2011-2016), Fujian Agriculture and Forestry University, China (Shield and Prize Reward)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; // ✅ This fixes your import issue
