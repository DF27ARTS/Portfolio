import React, { useState } from "react";
import { About, Icons } from "../Image/Projects_Description.js";
import Projects from "../ProjectsPanel/ProjectsPanel.jsx";

// Styles
import "./AboutPanel.scss";

export default function AboutPanel({ language }) {
  const [aboutExtended, setAboutExtended] = useState(false);

  const About_description = !language
    ? About.About_Me.description_spanish
    : About.About_Me.description_english;

  // Handler for the axpantion of the about section
  const HandleAboutExtended = (value) => {
    const go_down = document.querySelector(".go_down_btn");
    if (value === true) {
      go_down.style.setProperty("--rotate-arrow", "180deg");
    } else {
      go_down.style.setProperty("--rotate-arrow", "0deg");
    }
    setAboutExtended(value);
  };

  return (
    <>
      <div
        onClick={() => HandleAboutExtended(!aboutExtended)}
        className={!aboutExtended ? "about" : "about about_extended"}
      >
        {About_description.map((description, index) => (
          <p key={index} className="about_description">
            {description}
          </p>
        ))}
      </div>
      <div
        onClick={() => HandleAboutExtended(!aboutExtended)}
        className="go_down_btn"
      >
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
