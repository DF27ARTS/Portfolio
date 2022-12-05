import React from "react";
import { About } from "../Image/Projects_Description.js";

// Styles
import "./MainPage.scss";
import Navbar from "../Navbar/Navbar.jsx";
import Panels from "../Panels/Panels.jsx";
export default function MainPage({
  setDayOrNight,
  setLanguage,
  setCurrentProjectObject,
  language,
}) {
  function HandleOnLoad() {
    const Language = localStorage.getItem("language");
    const Theme = localStorage.getItem("theme");
    const FirstColor = localStorage.getItem("FirstColor");
    const SecondColor = localStorage.getItem("SecondColor");
    const DataAtribute = localStorage.getItem("DataAtribute");

    const containerLanguage = document.querySelector(".container_language");

    const first_circle = document.querySelector(".first_circle");

    // language button
    if (Language) {
      if (Language === "English") {
        containerLanguage.style.setProperty("--language", "-105%");
        setLanguage(true);
      } else if (Language === "Spanish") {
        containerLanguage.style.setProperty("--language", "0%");
        setLanguage(false);
      }
    }

    // Theme button
    if (Theme) {
      if (Theme === "day") {
        // Icon animation properties day
        first_circle.style.setProperty("--translate", "0%");
        first_circle.style.setProperty("--color", "yellow");
        first_circle.style.setProperty("--center-color", "yellow");

        //Colors changed day
        document.documentElement.style.setProperty(
          "--right-panel",
          "rgb(240, 239, 239)"
        );
        document.documentElement.style.setProperty("--main-background", "#000");
        document.documentElement.style.setProperty("--body-background", "#fff");
        document.documentElement.style.setProperty("--titles", "#333");
        setDayOrNight(true);
      } else {
        // Icon animation properties night
        first_circle.style.setProperty("--translate", "-50%");
        first_circle.style.setProperty("--color", "#ccc");
        first_circle.style.setProperty("--center-color", "#ccc");

        //Colors changed night
        document.documentElement.style.setProperty(
          "--right-panel",
          "rgb(32, 32, 32)"
        );
        document.documentElement.style.setProperty("--main-background", "#ccc");
        document.documentElement.style.setProperty("--body-background", "#000");
        document.documentElement.style.setProperty("--titles", "#ccc");
        setDayOrNight(true);
      }
    }

    // Current Color page
    if (FirstColor && SecondColor && DataAtribute) {
      document.documentElement.style.setProperty(
        "--first-gradient-color",
        FirstColor
      );
      document.documentElement.style.setProperty(
        "--second-gradient-color",
        SecondColor
      );

      const colorActive = document.querySelector(".color_active");
      colorActive.classList.remove("color_active");

      const currentColor = document.querySelector(
        `[data-name="${DataAtribute}"]`
      );

      currentColor.classList.add("color_active");
    }
  }

  return (
    <>
      <main onLoad={() => HandleOnLoad()} className="main_container">
        <div className="left_panel">
          <div className="arrow_right">
            <p>&#8250;</p>
            <p>&#8250;</p>
            <p>&#8250;</p>
          </div>
          <div className="cont_img_CV">
            <div className="container_picture">
              <div className="picture_corners"></div>
              <div className="picture_corners"></div>
              <img
                src={About.Picture}
                alt={`${About.Full_Name}`}
                className="picture"
              />
            </div>
          </div>
          <div className="main_title">
            <span>Full Stack</span>
            <span>Web Developer</span>
          </div>
          <div className="container_ducation">
            <div className="education">
              <span className="education_title">
                {!language ? "Educacíon" : "Education"}
              </span>
              <div>
                <span>Full-stack Developer</span>
                <span>Soy henry</span>
              </div>
            </div>

            <div className="languages">
              <span className="languages_title">
                {!language ? "Idiomas" : "Languages"}
              </span>
              <div className="container_languages">
                <div className="left_column"></div>
                <div>
                  <span>{!language ? "Español" : "Spanish"}</span>
                  <span>{!language ? "Nativo" : "Native"}</span>
                </div>
                <div>
                  <span>{!language ? "Ingles" : "English"}</span>
                  <span>B2 Uper Intermidiate</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="right_panel">
          <Navbar language={language} />

          <Panels
            setCurrentProjectObject={setCurrentProjectObject}
            language={language}
          />
        </div>
      </main>
    </>
  );
}
