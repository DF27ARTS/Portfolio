import React, { useState } from "react";
import { About } from "../Image/Projects_Description.js";
import RightPanel from "../RightPanel/RightPanel.jsx";
import { ImLocation2, ImLinkedin } from "react-icons/im";
import { SiGmail, SiGithub } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";

// Styles
import "./MainPage.scss";
export default function MainPage({ setCurrentProjectObject, language }) {
  const [Current_CV_Image, setCurrent_CV_Image] = useState("");

  return (
    <>
      <main className="main_container">
        <div className="left_panel">
          <div className="cont_img_CV">
            <img
              src={About.Picture}
              alt={`Picture of ${About.Full_Name}`}
              className="picture"
            />
            <div className="resume">
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
            </div>
          </div>
          <div className="personal_information">
            <a href="mailto:drawingsdf@gmail.com">
              <div className="information_rows">
                <SiGmail className="icons" />
                <span className="icons_name mail">Mail</span>
              </div>
            </a>
            <a href="https://www.google.com/maps/place/Cra.+3+%2331-36,+Ch%C3%ADa,+Cundinamarca/@4.8783224,-74.0473217,17z/data=!3m1!4b1!4m5!3m4!1s0x8e4079ef5feec27d:0x3119ad7ce25dc794!8m2!3d4.8783171!4d-74.045133">
              <div className="information_rows">
                <ImLocation2 className="icons" />
                <span className="icons_name">Colombia</span>
              </div>
            </a>
            <a href="https://wa.me/573202074828">
              <div className="information_rows">
                <FaPhoneAlt className="icons" />
                <span className="icons_name">Cellphone</span>
              </div>
            </a>
            <a href="https://github.com/DF27ARTS">
              <div className="information_rows">
                <SiGithub className="icons" />
                <span className="icons_name">GitHub</span>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/diego-fernando-rojas-carrillo-full-stack-developer/">
              <div className="information_rows">
                <ImLinkedin className="icons" />
                <span className="icons_name">LinedIn</span>
              </div>
            </a>
            <a href="https://torre.co/@fernando_rc?r=kZjElFcd">
              <div className="information_rows">
                <img src={About.Picture} alt="" className="icons torre" />
                <span className="icons_name">Torre</span>
              </div>
            </a>
          </div>
        </div>
        <div className="right_panel">
          <RightPanel
            setCurrentProjectObject={setCurrentProjectObject}
            language={language}
          />
        </div>
      </main>
    </>
  );
}
