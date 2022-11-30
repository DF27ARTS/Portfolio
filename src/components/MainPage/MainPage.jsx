import React, { useState } from "react";
import { About } from "../Image/Projects_Description.js";
// import AboutPanel from "./Panels/AboutPanel/AboutPanel.jsx";
import { ImLocation2, ImLinkedin } from "react-icons/im";
import { SiGmail, SiGithub } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";

// Styles
import "./MainPage.scss";
import Navbar from "../Navbar/Navbar.jsx";
import Panels from "../Panels/Panels.jsx";
export default function MainPage({ setCurrentProjectObject, language }) {
  return (
    <>
      <main className="main_container">
        <div className="left_panel">
          <div className="cont_img_CV">
            <div className="container_picture">
              <div className="picture_corners"></div>
              <div className="picture_corners"></div>
              <img
                src={About.Picture}
                alt={`Picture of ${About.Full_Name}`}
                className="picture"
              />
            </div>
            {/* <div className="resume">
              <button className="cv_button b_sp">
                {!language ? "CV ESPAÑOL" : "CV SPANISH"}
              </button>
              <div tabIndex={0} className="cv_button_options sp">
                <a href={About.CV_SPANISH} download>
                  <img
                    tabIndex={0}
                    src={About.CV_image_Spanish}
                    alt="cv icon"
                    className="CV_image"
                  />
                </a>
              </div>
              <button className="cv_button b_en">
                {!language ? "CV INGLES" : "CV ENGLISH"}
              </button>
              <div tabIndex={0} className="cv_button_options en">
                <a href={About.CV_ENGLISH} download>
                  <img
                    tabIndex={0}
                    src={About.CV_image_English}
                    alt="cv icon"
                    className="CV_image"
                  />
                </a>
              </div>
            </div> */}
          </div>
          <div className="container_ducation">
            <div className="education">
              <span className="education_title">Education</span>
              <div>
                <span>Full-stack Developer</span>
                <span>Soy henry</span>
              </div>
            </div>

            <div className="languages">
              <span className="languages_title">Languages</span>
              <div className="container_languages">
                <div className="left_column"></div>
                <div>
                  <span>Spanish</span>
                  <span>Native</span>
                </div>
                <div>
                  <span>English</span>
                  <span>B2</span>
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
