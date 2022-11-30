import React from "react";
import {
  App_dogs,
  App_Synnet,
  App_Weather,
} from "../Image/Projects_Description.js";
import ProjectCard from "../ProjectCard/ProjectCard.jsx";

// styles
import "./ProjectsPanel.scss";

export default function Projects({ setCurrentProjectObject, language }) {
  // Open the project detail and send the object

  return (
    <>
      <div className="projects_container">
        <ProjectCard
          Images={App_dogs.Images[0]}
          Project={App_dogs}
          setCurrentProjectObject={setCurrentProjectObject}
          language={language}
        />
        <ProjectCard
          Images={App_Synnet.Images[0]}
          Project={App_Synnet}
          setCurrentProjectObject={setCurrentProjectObject}
          language={language}
        />
        <ProjectCard
          Images={App_Weather.Images[0]}
          Project={App_Weather}
          setCurrentProjectObject={setCurrentProjectObject}
          language={language}
        />
        {/* <img
          src={App_dogs.Images[0]}
          alt="App_images"
          className="main_img"
        />
        <img
          alt="App_images"
          className="main_img"
        />
        <img
          src={App_Weather.Images[0]}
          alt="App_images"
          className="main_img"
        /> */}
      </div>
    </>
  );
}
