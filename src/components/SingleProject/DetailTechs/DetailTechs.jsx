import React from "react";
import "./DesktopStyles.scss";

export default function DetailTechs({ language, technologies }) {
  return (
    <div className="detail_descriptions">
      <div className="corners top_left"></div>
      <div className="corners bottom_right"></div>
      <h2 className="description_title">
        {!language ? "Tecnoligías" : "Technologies"}
      </h2>
      <div className="detail_techs">
        {technologies
          ? technologies.map((tech, index) => (
              <div key={index} className="single_tech">
                <p>{tech}</p>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
