import React from "react";
import "./ProjectCard.scss";

export default function ProjectCard({
  Images,
  Project,
  setCurrentProjectObject,
  language,
}) {
  const ProjectDescription = !Project.Description
    ? null
    : !language
    ? Project.Description.spanish_description
    : Project.Description.english_description;

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
    <div
      onClick={() => HandleClick(Project)}
      className="container_project_card"
    >
      <div className="single_square"></div>
      <div className="single_square"></div>
      <div className="single_square"></div>
      <div className="single_square"></div>
      <span className="card_title">{Project.Description.title}</span>
      <img src={Images} alt="picture of the project" className="card_image" />
    </div>
  );
}
