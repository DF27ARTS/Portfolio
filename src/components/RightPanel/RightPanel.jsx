import React, { useState } from "react";
import { About, Icons } from "../Image/Projects_Description.js";
import Projects from "../Projects/Projects.jsx";

// Styles
import "./RightPanel.scss";

export default function RightPanel({ setCurrentProjectObject, language }) {
  const [aboutExtended, setAboutExtended] = useState(false);
  const [NavbarButtons, setNavbarButtons] = useState(false);

  const About_description = !language
    ? About.About_Me.description_spanish
    : About.About_Me.description_english;

  // Handler translate of the projects page and the about, page and
  // adding the active class to start the nimation on the technologies slider
  const ToggleTranslateContainer = (translate) => {
    const container = document.querySelector(".container_information");
    if (translate === "0%") {
      container.classList.add("active");
      container.style.setProperty("--translate", translate);
      setNavbarButtons(false);
    } else if (translate === "-105%") {
      setNavbarButtons(true);
      container.classList.remove("active");
      container.style.setProperty("--translate", translate);
    }
  };

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
      <nav className="navbar">
        <h2 className="full_name">{About.Full_Name}</h2>
        <div className="navbar_titles">
          <div
            onClick={() => ToggleTranslateContainer("0%")}
            className={!NavbarButtons ? "titles background_color" : "titles "}
          >
            {!language ? "Sobre mí" : "About"}
          </div>
        </div>
        <div className="navbar_titles">
          <div
            onClick={() => ToggleTranslateContainer("-105%")}
            className={NavbarButtons ? "titles background_color" : "titles "}
          >
            {!language ? "Proyectos" : "Projects"}
          </div>
        </div>
      </nav>

      <main className="container_information active snaps_inline">
        <div className="information">
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
        </div>
        <div className="container_projects">
          <Projects
            setCurrentProjectObject={setCurrentProjectObject}
            language={language}
          />
        </div>
      </main>
    </>
  );
}
