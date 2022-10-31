import React, { useState } from "react";

// styles
import "./SingleProject.scss";

// function
import {
  MoveForwards,
  MoveBackwards,
  SliderLeft,
  SliderRight,
  // TechnologyBoxFunction,
} from "./Function.js";
import { About, Icons } from "../Image/Projects_Description.js";

export default function SingleProject({
  App_Object,
  setCurrentProjectObject,
  language,
  dayOrNight,
}) {
  const [TechnologyBox, setTechnologyBox] = useState(false);
  const [DescriptionBox, setDescriptionBox] = useState(false);

  // Save in a variable the description of the project depending on the language
  const ProjectDescription = !App_Object.Description
    ? null
    : !language
    ? App_Object.Description.spanish_description
    : App_Object.Description.english_description;

  // Handler close projrct detail
  const CloseProjectDetail = () => {
    const center_panel = document.querySelector(".center_panel");
    center_panel.style.setProperty("--rotate", "0deg");

    const front_panel = document.querySelector(".front_panel");
    front_panel.style.setProperty("--rotate-panel", "0deg");

    center_panel.classList.remove("activated");
    setCurrentProjectObject({});
  };

  // Handler animation to the carucel when the technologies box is open
  const TechnologyBoxFunction = (value, techFunction) => {
    const center_panel = document.querySelector(".center_panel");
    const projects_container = document.querySelector(".projects_container");

    if (value == false) {
      center_panel.style.setProperty("--top", "-25%");
      projects_container.style.setProperty("--perspective-up", "20%");
    } else if (DescriptionBox === false) {
      center_panel.style.setProperty("--top", "4%");
      projects_container.style.setProperty("--perspective-up", "-5%");
    }

    techFunction(!value);
  };

  // Handler animation to the carucel when the description box is open
  const DescriptionBoxFunction = (value, techFunction) => {
    const center_panel = document.querySelector(".center_panel");
    const projects_container = document.querySelector(".projects_container");

    if (value == false) {
      center_panel.style.setProperty("--top", "-25%");
      projects_container.style.setProperty("--perspective-up", "20%");
    } else if (TechnologyBox === false) {
      center_panel.style.setProperty("--top", "4%");
      projects_container.style.setProperty("--perspective-up", "-5%");
    }

    techFunction(!value);
  };

  return (
    <>
      {App_Object.Images && (
        <>
          <div
            className={
              dayOrNight
                ? "project_information"
                : "project_information project_information_night"
            }
          >
            {/* mobile Slider */}
            <div className="container_slider">
              <div className="slider slider_Activated"></div>
              <div className="slider"></div>
              <div className="slider"></div>
              <div className="slider"></div>
              <div className="slider"></div>
              <div className="slider"></div>
            </div>
            <div
              onClick={() => CloseProjectDetail(false)}
              className={
                dayOrNight ? "close_icon" : "close_icon close_icon_night"
              }
            >
              &#8250;
            </div>
            <h1 className="project_name">{App_Object.Description.title}</h1>
            {/* Web 3d circle carucel  */}
            <div className="center_panel activated">
              {App_Object.Images
                ? App_Object.Images.map((image, index) => (
                    <div key={index} className="single_image">
                      <img
                        tabIndex={0}
                        loading="lazy"
                        src={image}
                        alt="App-image-project"
                        className="image"
                      />
                      <div className="shadow"></div>
                    </div>
                  ))
                : null}

              {/* Mobile design carucel buttons  */}
              <button
                onClick={() => SliderLeft()}
                className="button_translate_mobile btn_left"
              >
                &#8249;
              </button>
              <button
                onClick={() => SliderRight()}
                className="button_translate_mobile btn_right"
              >
                &#8250;
              </button>

              {/* Web design carucel button */}
              <div className="front_panel">
                <div onClick={() => MoveBackwards()} className="arrows right">
                  &#8249;
                </div>
                <div onClick={() => MoveForwards()} className="arrows left">
                  &#8250;
                </div>
              </div>
            </div>

            {/* Github and deployment links */}
            <div className="links">
              <div className="link_deploy_cont">
                <a href={App_Object.Deploy}>
                  <img
                    src={App_Object.Images[0]}
                    alt="Link Deploy"
                    className="link_deploy"
                  />
                </a>
              </div>
              <div className="links_github_cont">
                <a href={App_Object.GitHub}>
                  <img
                    src={Icons[8]}
                    alt="Link GitHub"
                    className="links_github"
                  />
                </a>
              </div>
            </div>

            {/* Project Description box */}
            <div className="description_main_container">
              <div
                tabIndex={0}
                onClick={() =>
                  TechnologyBoxFunction(TechnologyBox, setTechnologyBox)
                }
                className={
                  TechnologyBox === true
                    ? "description_container left_desc project_activated"
                    : "description_container left_desc "
                }
              >
                <div className="message message_top">
                  {!language ? "TECNOLOGÍAS" : "TECHNOLOGIES"}
                </div>
                <div className="description_text">
                  {App_Object.Description
                    ? App_Object.Description.Tecnologies.map((tech, index) => (
                        <div key={index} className="single_tech">
                          {tech}
                        </div>
                      ))
                    : null}
                </div>
              </div>
              <div
                tabIndex={0}
                onClick={() =>
                  DescriptionBoxFunction(DescriptionBox, setDescriptionBox)
                }
                className={
                  DescriptionBox === true
                    ? "description_container right_desc project_activated gap"
                    : "description_container right_desc"
                }
              >
                <div className="message message_top">
                  {!language ? "DESCRIPCIÓN" : "DESCRIPTION"}
                </div>
                <div className="description_text">
                  <ul className="ul_class">
                    {ProjectDescription.length &&
                      ProjectDescription.map((description, index) => (
                        <li key={index} className="description">
                          {description}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
