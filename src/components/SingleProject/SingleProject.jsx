import React from "react";

// styles
import "./SingleProject.scss";

// function
import {
  MoveForwards,
  MoveBackwards,
  SliderLeft,
  SliderRight,
} from "./Function.js";
import { Icons } from "../Image/Projects_Description.js";
import DetailDescrioptions from "./DetailDescrioptions/DetailDescrioptions";
import DetailTechs from "./DetailTechs/DetailTechs";

export default function SingleProject({
  App_Object,
  setCurrentProjectObject,
  language,
}) {
  // Save in a variable the description of the project depending on the language

  // Handler close projrct detail
  const CloseProjectDetail = () => {
    // const center_panel = document.querySelector(".center_panel");
    // const projectInformation = document.querySelector(".project_information");
    // center_panel.style.setProperty("--rotate", "0deg");

    // const front_panel = document.querySelector(".front_panel");
    // front_panel.style.setProperty("--rotate-panel", "0deg");

    // center_panel.classList.remove("activated");

    // projectInformation.classList.remove("show");

    const mainDetailContainer = document.querySelector(
      ".main_container_project_detail"
    );
    mainDetailContainer.style.setProperty("--opacity", "0");
    mainDetailContainer.style.setProperty("--visibility", "hidden");

    mainDetailContainer.classList.remove("show");

    setCurrentProjectObject({});
  };

  function SelectGallery() {
    const galleryProjectDetail = document.querySelector(
      ".gallery_project_detail"
    );
    const select = document.querySelector(".select");
    const video = document.querySelector("video");

    if (select) select.classList.remove("select");
    galleryProjectDetail.classList.add("select");

    document.documentElement.style.setProperty("--translate-gallery", "0%");
    video.pause();
  }

  function SelectVideo() {
    const videoProjectDetail = document.querySelector(".video_project_detail");
    const select = document.querySelector(".select");
    const video = document.querySelector("video");

    if (select) select.classList.remove("select");
    videoProjectDetail.classList.add("select");

    document.documentElement.style.setProperty("--translate-gallery", "-100%");
    video.play();
  }

  return (
    <>
      <div className="main_container_project_detail">
        {App_Object.Images ? (
          <>
            <div className="project_information closer_view">
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

              {/* mobile Slider */}
              <h1 className="project_name">{App_Object.Description.title}</h1>
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
                className="close_icon"
              >
                &#8250;
              </div>

              {/* Web 3d circle carucel  */}
              <div className="main_container_video_carousel">
                <div className="container_detail_carousel">
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
                      <div
                        onClick={() => MoveBackwards()}
                        className="arrows right"
                      >
                        &#8249;
                      </div>
                      <div
                        onClick={() => MoveForwards()}
                        className="arrows left"
                      >
                        &#8250;
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container_video_detail">
                  <video
                    poster={App_Object.Images[0]}
                    className="video_detail"
                    controls
                  >
                    <source src={App_Object.Video} type="video/mp4" />.
                  </video>
                </div>
              </div>

              <div className="detail_project_container_description">
                <div className="gallery_project_detail select">
                  <img
                    onClick={() => SelectGallery()}
                    src={App_Object.Images[0]}
                    alt="Gallery main picture"
                    className="gallery_main_picture"
                  />
                </div>
                <div className="video_project_detail">
                  <img
                    onClick={() => SelectVideo()}
                    src={App_Object.Images[0]}
                    alt=""
                    className="gallery_main_picture"
                  />

                  <div
                    onClick={() => SelectVideo()}
                    className="player_btn"
                  ></div>
                </div>
              </div>

              <DetailDescrioptions
                language={language}
                description={App_Object.Description}
              />

              <DetailTechs
                language={language}
                technologies={App_Object.Description.Tecnologies}
              />
            </div>
          </>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
}
