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
      <div className="single_image_container">
        <img src={Images} alt="picture of the project" className="card_image" />
      </div>
      <div className="single_image_container">
        <img src={Images} alt="picture of the project" className="card_image" />
      </div>
      <div className="single_image_container">
        <img src={Images} alt="picture of the project" className="card_image" />
      </div>
      <div className="single_image_container">
        <img src={Images} alt="picture of the project" className="card_image" />
      </div>
      <div className="single_image_container">
        <img src={Images} alt="picture of the project" className="card_image" />
      </div>
      <div className="single_image_container">
        <img src={Images} alt="picture of the project" className="card_image" />
      </div>
      <div className="single_image_container">
        <img src={Images} alt="picture of the project" className="card_image" />
      </div>
      <div className="single_image_container">
        <img src={Images} alt="picture of the project" className="card_image" />
      </div>
      <div className="single_image_container">
        <img src={Images} alt="picture of the project" className="card_image" />
      </div>
      <div className="single_image_container">
        <img src={Images} alt="picture of the project" className="card_image" />
      </div>
      <div className="single_image_container">
        <img src={Images} alt="picture of the project" className="card_image" />
      </div>
      <div className="single_image_container">
        <img src={Images} alt="picture of the project" className="card_image" />
      </div>

      <span className="card_title">{Project.Description.title}</span>

      <div className="container_card_description">
        <ul>
          {ProjectDescription.length &&
            ProjectDescription.map((information, index) => (
              <li key={index}>{information}</li>
            ))}
        </ul>
      </div>

      <button className="card_button">
        {!language ? "Mas Información" : "More Details"}
      </button>
    </div>
  );
}
