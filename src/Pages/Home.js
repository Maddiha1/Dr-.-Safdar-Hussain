import React from "react";
import Main from "../Components/Main";
import About from "../Components/About";
import EducationExperience from "../Components/EducationExperience";
import Research from "../Components/Research";
import Projects from "../Components/Projects";
import Publications from "../Components/Publications";
import Contact from "../Components/Contact";

function Home() {
  return (
    <>
      <Main />
      <About />
      <EducationExperience/>
      <Research />
      <Projects/>
      <Publications/>
      <Contact/>
    </>
  );
}

export default Home;
