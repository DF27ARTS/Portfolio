import React, { useState } from "react";
import SingleProject from "../SingleProject/SingleProject.jsx";
import {
  App_dogs,
  App_Synnet,
  App_Weather,
} from "../Image/Projects_Description.js";

// styles
import "./Projects.scss";

export default function Projects({ dayOrNight, language }) {
  const [currentProjectObject, setCurrentProjectObject] = useState({});

  // Open the project detail and send the object
  const HandleClick = (object) => {
    setCurrentProjectObject(object);
    const center_panel = document.querySelector(".center_panel");
    if (center_panel !== null) center_panel.classList.add("activated");
  };
  return (
    <>
      <div className="projects_container">
        <img
          onClick={() => HandleClick(App_dogs)}
          src={App_dogs.Images[0]}
          alt="App_images"
          className="main_img"
        />
        <img
          onClick={() => HandleClick(App_Synnet)}
          src={App_Synnet.Images[0]}
          alt="App_images"
          className="main_img"
        />
        <img
          onClick={() => HandleClick(App_Weather)}
          src={App_Weather.Images[0]}
          alt="App_images"
          className="main_img"
        />
        <SingleProject
          App_Object={currentProjectObject}
          setCurrentProjectObject={setCurrentProjectObject}
          language={language}
          dayOrNight={dayOrNight}
        />
      </div>
    </>
  );
}
