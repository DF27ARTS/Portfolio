import React from "react";
import LanguageButton from "./LanguageButton/LanguageButton";
import "./MenuDesktopStyles.scss";
import ThemeButton from "./ThemeButton/ThemeButton";
import { About } from "../Image/Projects_Description.js";

export default function Menu({
  language,
  setLanguage,
  dayOrNight,
  setDayOrNight,
}) {
  function ChangeProjectStyle(color_one, color_two, data_tribute) {
    document.documentElement.style.setProperty(
      "--first-gradient-color",
      color_one
    );
    document.documentElement.style.setProperty(
      "--second-gradient-color",
      color_two
    );

    const colorActive = document.querySelector(".color_active");
    colorActive.classList.remove("color_active");

    const currentColor = document.querySelector(
      `[data-name="${data_tribute}"]`
    );

    currentColor.classList.add("color_active");
    localStorage.setItem("FirstColor", color_one);
    localStorage.setItem("SecondColor", color_two);
    localStorage.setItem("DataAtribute", data_tribute);
  }

  function ActivateProgressBar(name) {
    const cv = document.querySelector(`[area-text="${name}"]`);
    cv.classList.add("downloading");
  }

  function DeactivateProgressBar(name) {
    const cv = document.querySelector(`[area-text="${name}"]`);
    setTimeout(() => {
      cv.classList.remove("downloading");
    }, 4000);
  }

  return (
    <>
      <div tabIndex={0} className="container_aquare">
        <div className="square">
          <div className="box_front"></div>
          <div className="box_right"></div>
          <div className="box_back"></div>
          <div className="box_left"></div>
          <div className="box_top"></div>
          <div className="box_bottom"></div>
          <div className="line_top_left"></div>
          <div className="line_top_front"></div>
          <div className="line_left_front"></div>
        </div>

        <div className="box_shadow"></div>
        <div tabIndex={0} className="container_right_menu">
          <div tabIndex={0} className="menu_container">
            <p>{!language ? "Estilos" : "Styles"}</p>
            <div className="icon_colos"></div>
            <div tabIndex={0} className="container_colors">
              <div
                data-name="color-one"
                style={{
                  "--first-color": "hsl(191, 100%, 50%)",
                  "--second-color": "hsl(250, 15%, 61%)",
                }}
                onClick={() =>
                  ChangeProjectStyle(
                    "hsl(191, 100%, 50%)",
                    "hsl(250, 15%, 61%)",
                    "color-one"
                  )
                }
                className="single_color color_active"
              ></div>
              <div
                data-name="color-two"
                style={{
                  "--first-color": "hsl(120, 58%, 31%)",
                  "--second-color": "hsl(86, 81%, 35%)",
                }}
                onClick={() =>
                  ChangeProjectStyle(
                    "hsl(120, 58%, 31%)",
                    "hsl(86, 81%, 35%)",
                    "color-two"
                  )
                }
                className="single_color"
              ></div>
              <div
                data-name="color-three"
                style={{
                  "--first-color": "hsl(327, 100%, 41%)",
                  "--second-color": "rgb(109, 44, 106)",
                }}
                onClick={() =>
                  ChangeProjectStyle(
                    "hsl(327, 100%, 41%)",
                    "rgb(109, 44, 106)",
                    "color-three"
                  )
                }
                className="single_color"
              ></div>
              <div
                data-name="color-four"
                style={{
                  "--first-color": "rgba(20,157,208,1)",
                  "--second-color": "rgba(140,63,226,1)",
                }}
                onClick={() =>
                  ChangeProjectStyle(
                    "rgba(20,157,208,1)",
                    "rgba(140,63,226,1)",
                    "color-four"
                  )
                }
                className="single_color"
              ></div>
              <div
                data-name="color-five"
                style={{
                  "--first-color": "hsl(301, 100%, 34%)",
                  "--second-color": "hsl(212, 72%, 21%)",
                }}
                onClick={() =>
                  ChangeProjectStyle(
                    "hsl(301, 100%, 34%)",
                    "hsl(212, 72%, 21%)",
                    "color-five"
                  )
                }
                className="single_color"
              ></div>
              <div
                data-name="color-six"
                style={{
                  "--first-color": "hsl(33, 100%, 50%)",
                  "--second-color": "hsl(13, 100%, 49%)",
                }}
                onClick={() =>
                  ChangeProjectStyle(
                    "hsl(33, 100%, 50%)",
                    "hsl(13, 100%, 49%)",
                    "color-six"
                  )
                }
                className="single_color"
              ></div>
              <div
                data-name="color-seven"
                style={{
                  "--first-color": "hsl(262, 97%, 54%)",
                  "--second-color": "hsl(282, 68%, 38%)",
                }}
                onClick={() =>
                  ChangeProjectStyle(
                    "hsl(262, 97%, 54%)",
                    "hsl(282, 68%, 38%)",
                    "color-seven"
                  )
                }
                className="single_color"
              ></div>
            </div>
          </div>

          <div className="menu_container">
            <p>{!language ? "Idioma" : "Language"}</p>
            <LanguageButton setLanguage={setLanguage} />
          </div>

          <div className="menu_container">
            <p>{!language ? "Tema" : "Theme"}</p>
            <ThemeButton
              setDayOrNight={setDayOrNight}
              dayOrNight={dayOrNight}
            />
          </div>
          <div className="menu_container">
            <span
              area-text="spanish"
              onAnimationEnd={() => DeactivateProgressBar("spanish")}
              className="cv"
            >
              {!language ? "CV Español" : "CV Spanish"}
            </span>
            <a download href={About.CV_SPANISH}>
              <div
                onClick={() => ActivateProgressBar("spanish")}
                className="download_icon"
              ></div>
            </a>
          </div>
          <div className="menu_container">
            <span
              area-text="english"
              onAnimationEnd={() => DeactivateProgressBar("english")}
              className="cv"
            >
              {!language ? "CV Ingles" : "CV English"}
            </span>
            <a download href={About.CV_ENGLISH}>
              <div
                onClick={() => ActivateProgressBar("english")}
                className="download_icon"
              ></div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
