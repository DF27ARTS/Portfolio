import React from "react";
import AboutPanel from "../AboutPanel/AboutPanel";
import ContactPanel from "../ContactPanel/ContactPanel";
import Projects from "../ProjectsPanel/ProjectsPanel";
import "./Panels.scss";

export default function Panels({ setCurrentProjectObject, language }) {
  return (
    <main className="container_information active">
      <div className="information">
        <AboutPanel language={language} />
      </div>
      <div className="container_projects">
        <Projects
          setCurrentProjectObject={setCurrentProjectObject}
          language={language}
        />
      </div>
      <div className="contact">
        <ContactPanel language={language} />
      </div>
    </main>
  );
}
