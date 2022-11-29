import React, { useState } from "react";
import { About } from "../Image/Projects_Description.js";
import "./Navbar.scss";

export default function Navbar({ language }) {
  const ToggleTranslateContainer = (translate, currentButton) => {
    const container = document.querySelector(".container_information");
    const currentBtn = document.querySelector(`[area-text="${currentButton}"]`);
    const backgroundColor = document.querySelector(".background_color");
    backgroundColor.classList.remove("background_color");

    container.classList.remove("active");
    if (currentButton === "about") container.classList.add("active");
    container.style.setProperty("--translate", translate);

    currentBtn.classList.add("background_color");
  };

  return (
    <nav className="navbar">
      <h2 className="full_name">{About.Full_Name}</h2>
      <div className="navbar_buttons">
        <div className="navbar_titles">
          <div
            area-text="about"
            onClick={() => ToggleTranslateContainer("0%", "about")}
            className="titles background_color"
          >
            {!language ? "Sobre mí" : "About"}
          </div>
        </div>
        <div className="navbar_titles">
          <div
            area-text="projects"
            onClick={() => ToggleTranslateContainer("-105%", "projects")}
            className="titles"
          >
            {!language ? "Proyectos" : "Projects"}
          </div>
        </div>
        <div className="navbar_titles">
          <div
            area-text="contact"
            onClick={() => ToggleTranslateContainer("-210%", "contact")}
            className="titles"
          >
            {!language ? "Contacto" : "Contact"}
          </div>
        </div>
      </div>
    </nav>
  );
}
