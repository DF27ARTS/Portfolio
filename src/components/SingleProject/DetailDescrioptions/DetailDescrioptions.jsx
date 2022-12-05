import React from "react";
import "./DesktopStyles.scss";

export default function DetailDescrioptions({ language, description }) {
  const Description = !description
    ? null
    : !language
    ? description.spanish_description
    : description.english_description;
  return (
    <div className="detail_descriptions">
      <div className="corners top_left"></div>
      <div className="corners bottom_right"></div>
      <h2 className="description_title">
        {!language ? "Descripción" : "Description"}
      </h2>
      <ul className="description_project">
        {Description
          ? Description.map((paragraft, index) => (
              <li key={index}>{paragraft}</li>
            ))
          : null}
      </ul>
    </div>
  );
}
