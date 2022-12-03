import React from "react";
import { About, Icons } from "../Image/Projects_Description.js";

// Styles
import "./AboutPanel.scss";

export default function AboutPanel({ language }) {
  const About_description = !language
    ? About.About_Me.description_spanish
    : About.About_Me.description_english;

  // Handler for the axpantion of the about section
  const HandleAboutExtended = () => {
    const go_down = document.querySelector(".go_down_btn");
    const state = document.documentElement;
    const currentState = getComputedStyle(state).getPropertyValue(
      "--about-container-height"
    );
    if (currentState !== "13vh") {
      go_down.style.setProperty("--rotate-arrow", "0deg");
      state.style.setProperty("--about-container-height", "13vh");
    } else {
      go_down.style.setProperty("--rotate-arrow", "180deg");
      state.style.setProperty("--about-container-height", "fit-content");
    }
  };

  return (
    <>
      <div onClick={() => HandleAboutExtended()} className="about">
        {About_description.map((description, index) => (
          <p key={index} className="about_description">
            {description}
          </p>
        ))}
      </div>
      <div onClick={() => HandleAboutExtended()} className="go_down_btn">
        &#8249;
      </div>
      <div className="technologies">
        {Icons.map((icon, index) => (
          <div key={index} className="tech_rows">
            <img src={icon} alt="icons" className="img_icons" />
            <div className="tech_panel">
              <div className="persantage"></div>
            </div>
          </div>
        ))}
        <h3 className="technology_title">
          {!language ? "Tecnologías" : "Technologies"}
        </h3>
        <div className="frontend_titles">Frontend</div>
        <div className="backend_titles">Backend</div>
      </div>
    </>
  );
}
