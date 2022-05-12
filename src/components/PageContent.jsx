import React from "react";
import About from "./About";
import Contact from "./Contact";
import Project from "./Project";
import Location from "./Location";

const PageContent = () => {
  return (
    <div>
      <div className="w3-content w3-padding" style={{ maxWidth: 1564 }}></div>
      <Project/>
      <About/>
      <Contact/>
      <Location/>
    </div>
  );
};

export default PageContent;
