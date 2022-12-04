import React from "react";
import {
  App_dogs,
  App_Synnet,
  App_Weather,
  Portfolio,
} from "../Image/Projects_Description.js";
import ProjectCard from "../ProjectCard/ProjectCard.jsx";

// styles
import "./ProjectsPanel.scss";

export default function Projects({ setCurrentProjectObject, language }) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("show", entry.isIntersecting);
      });
    },
    {
      rootMargin: "-300px",
    }
  );

  const Cards = document.querySelectorAll(".container_project_card");
  Cards.forEach((card) => {
    observer.observe(card);
  });

  return (
    <>
      <div className="projects_container">
        <ProjectCard
          Images={App_dogs.Images[0]}
          Project={App_dogs}
          setCurrentProjectObject={setCurrentProjectObject}
          language={language}
          text_area={"25%"}
        />
        <ProjectCard
          Images={App_Synnet.Images[0]}
          Project={App_Synnet}
          setCurrentProjectObject={setCurrentProjectObject}
          language={language}
          text_area={"-25%"}
        />
        <ProjectCard
          Images={App_Weather.Images[0]}
          Project={App_Weather}
          setCurrentProjectObject={setCurrentProjectObject}
          language={language}
          text_area={"25%"}
        />
        <ProjectCard
          Images={Portfolio.Images[0]}
          Project={Portfolio}
          setCurrentProjectObject={setCurrentProjectObject}
          text_area={"-25%"}
          language={language}
        />
      </div>
    </>
  );
}
