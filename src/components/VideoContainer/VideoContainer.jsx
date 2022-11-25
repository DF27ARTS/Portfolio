import { useState } from "react";
import { App_dogs } from "../Image/Projects_Description.js";
// import { updateVolume } from "./VideoFunctionality.js";
import "./VideoContainer.scss";

export default function VideoContainer({ currentVideo }) {
  return (
    <div className="activated video-container">
      <video src={App_dogs.Video} className="video" controls></video>
    </div>
  );
}
