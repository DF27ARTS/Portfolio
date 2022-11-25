import React from "react";
import {
  App_dogs,
  App_Synnet,
  App_Weather,
} from "../Image/Projects_Description.js";

// styles
import "./Projects.scss";

export default function Projects({ setCurrentProjectObject }) {
  // Open the project detail and send the object
  const HandleClick = (object) => {
    setCurrentProjectObject(object);

    const mainDetailContainer = document.querySelector(
      ".main_container_project_detail"
    );
    mainDetailContainer.style.setProperty("--opacity", "1");
    mainDetailContainer.style.setProperty("--visibility", "visible");

    mainDetailContainer.classList.add("show");
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
        {/* <SingleProject
          App_Object={currentProjectObject}
          setCurrentProjectObject={setCurrentProjectObject}
          language={language}
          dayOrNight={dayOrNight}
        /> */}
      </div>
    </>
  );
}
