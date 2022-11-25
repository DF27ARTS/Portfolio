// const playPauseBtn = document.querySelector(".play-pause-btn");
// const fullScreenBtn = document.querySelector(".full-screen-btn");
// const miniPlayerBtn = document.querySelector(".mini-player-btn");

// const timelineContainer = document.querySelector(".timeline-container");

// const videoContainer = document.querySelector(".video-container");
// const centerPlayerBtn = document.querySelector(".center-player-btn");
// const video = document.querySelector("video");

// const currentTimeElement = document.querySelector(".current-time");
// const totalTimeElement = document.querySelector(".total-time");

// const volumenIcon = document.querySelector(".volume-icon");
const sliderVolumeContainer = document.getElementsByClassName(
  "slider-volume-container"
);

// let isScrubbing = false;
// let volumeSliderIsScrubbing = false;
// let wasPaused;

// document.addEventListener("keydown", (e) => {
//   switch (e.key.toLowerCase()) {
//     case " ":
//     case "k":
//       togglePlay();
//       break;
//     case "f":
//       toggleFullscreenMode();
//       break;
//     case "i":
//       toggleMiniPlayerMode();
//       break;
//     case "m":
//       toggleMuted();
//       break;
//     case "arrowleft":
//     case "j":
//       skip(-5);
//       break;
//     case "arrowright":
//     case "l":
//       skip(5);
//       break;
//     case "arrowup":
//       toggleArrowVolume(0.1);
//       break;
//     case "arrowdown":
//       toggleArrowVolume(-0.1);
//       break;
//   }
// });

// function skip(value) {
//   video.currentTime = video.currentTime + value;
// }

// function toggleArrowVolume(volume) {
//   video.muted = false;
//   if (video.volume + volume < 1 && video.volume + volume > 0.1) {
//     video.volume = video.volume + volume;
//     const persent = 100 - parseInt(video.volume.toString()[2] + "0");
//     sliderVolumeContainer.style.setProperty("--slider-volume", `${persent}%`);
//   } else if (Math.round(video.volume + volume) === 1) {
//     video.volume = 1;
//     sliderVolumeContainer.style.setProperty("--slider-volume", `${0}%`);
//   } else if (Math.round(video.volume + volume) === 0) {
//     video.muted = true;
//     sliderVolumeContainer.style.setProperty("--slider-volume", `${100}%`);
//   }
// }

// // add and hide controls

// video.addEventListener("click", () => {
//   videoContainer.classList.toggle("activated");
// });

// // Volume slider

// sliderVolumeContainer.addEventListener("pointerdown", toggleSliderVolume);
// sliderVolumeContainer.addEventListener("pointermove", handleSliderVolume);
// volumenIcon.addEventListener("click", () => {
//   toggleMuted();
// });

// document.addEventListener("pointerup", () => {
//   volumeSliderIsScrubbing = false;
// });

// function toggleMuted() {
//   if (video.muted) {
//     video.muted = false;
//     const persent = 100 - parseInt(video.volume.toString()[2] + "0");
//     sliderVolumeContainer.style.setProperty("--slider-volume", `${persent}%`);
//   } else {
//     video.muted = true;
//     sliderVolumeContainer.style.setProperty("--slider-volume", `${100}%`);
//   }
// }

// function toggleSliderVolume(e) {
//   volumeSliderIsScrubbing = true;

//   if (volumeSliderIsScrubbing) {
//     const rect = sliderVolumeContainer.getBoundingClientRect();
//     const percent = Math.round(
//       Math.min(Math.max(0, e.y - rect.y), rect.height)
//     );
//     console.log(percent);
//     sliderVolumeContainer.style.setProperty("--slider-volume", `${percent}%`);

//     updateVolume(percent);
//   }
// }

// function handleSliderVolume(e) {
//   sliderVolumeContainer.setPointerCapture(e.pointerId);

//   if (volumeSliderIsScrubbing) {
//     const rect = sliderVolumeContainer.getBoundingClientRect();
//     const percent = Math.round(
//       Math.min(Math.max(0, e.y - rect.y), rect.height)
//     );
//     console.log(percent);
//     sliderVolumeContainer.style.setProperty("--slider-volume", `${percent}%`);

//     updateVolume(percent);
//   }
// }

export function updateVolume(video, percent) {
  // return console.log(sliderVolumeContainer[0]);
  if (percent >= 95) {
    sliderVolumeContainer[0].style.setProperty("--slider-volume", `${100}%`);
    video.volume = 0;
  } else if (percent >= 80) {
    video.volume = 0.2;
  } else if (percent >= 60) {
    video.volume = 0.4;
  } else if (percent >= 40) {
    video.volume = 0.6;
  } else if (percent >= 20) {
    video.volume = 0.8;
  } else {
    video.volume = 1;
  }
}

// Timeline scrubbing

// timelineContainer.addEventListener("pointerdown", toggleScrubbing);
// timelineContainer.addEventListener("pointermove", handleTimelineUpdate);
// document.addEventListener("pointerup", (e) => {
//   if (isScrubbing) toggleScrubbing(e);
// });

// function toggleScrubbing(e) {
//   const rect = timelineContainer.getBoundingClientRect();
//   const percent = Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width;
//   isScrubbing = (e.buttons & 1) === 1;
//   videoContainer.classList.toggle("scrubbing", isScrubbing);

//   if (isScrubbing) {
//     wasPaused = video.paused;
//     video.pause();
//   } else {
//     video.currentTime = percent * video.duration;
//     if (!wasPaused) video.play();
//   }

//   handleTimelineUpdate(e);
// }

// function handleTimelineUpdate(e) {
//   timelineContainer.setPointerCapture(e.pointerId);
//   const rect = timelineContainer.getBoundingClientRect();
//   const percent = Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width;

//   if (isScrubbing) {
//     e.preventDefault();
//     timelineContainer.style.setProperty("--progress-position", percent);
//   }
// }

// Current time

// video.addEventListener("loadeddata", () => {
//   totalTimeElement.textContent = formatDuration(video.duration);
// });

// video.addEventListener("timeupdate", () => {
//   currentTimeElement.textContent = formatDuration(video.currentTime);
//   const percent = video.currentTime / video.duration;
//   timelineContainer.style.setProperty("--progress-position", percent);
// });

// const leadingZeroFormater = new Intl.NumberFormat(undefined, {
//   minimumIntegerDigits: 2,
// });

// function formatDuration(time) {
//   const seconds = Math.floor(time % 60);
//   const minutes = Math.floor(time / 60) % 60;
//   const hours = Math.floor(time / 360);

//   if (hours === 0) {
//     return `${minutes}:${leadingZeroFormater.format(seconds)}`;
//   } else {
//     return `${hours}:${leadingZeroFormater.format(
//       minutes
//     )}:${leadingZeroFormater.format(seconds)}`;
//   }
// }

// fullscreen button

// fullScreenBtn.addEventListener("click", toggleFullscreenMode);

// function toggleFullscreenMode() {
//   if (document.fullscreenElement === null) {
//     videoContainer.requestFullscreen();
//   } else {
//     document.exitFullscreen();
//   }
// }

// document.addEventListener("fullscreenchange", () => {
//   videoContainer.classList.toggle("full-screen", document.fullscreenElement);
// });

// mini player button

// miniPlayerBtn.addEventListener("click", toggleMiniPlayerMode);

// function toggleMiniPlayerMode() {
//   if (videoContainer.classList.contains("mini-player")) {
//     document.exitPictureInPicture();
//   } else {
//     video.requestPictureInPicture();
//   }
// }

// video.addEventListener("enterpictureinpicture", () => {
//   videoContainer.classList.add("mini-player");
//   videoContainer.classList.toggle("activated");
// });

// video.addEventListener("leavepictureinpicture", () => {
//   videoContainer.classList.remove("mini-player");
//   videoContainer.classList.toggle("activated");
// });

// video play and pause

// playPauseBtn.addEventListener("click", togglePlay);
// centerPlayerBtn.addEventListener("click", togglePlay);

// function togglePlay() {
//   video.paused ? video.play() : video.pause();
// }

// video.addEventListener("play", () => {
//   video.classList.remove("paused");
// });

// video.addEventListener("pause", () => {
//   video.classList.add("paused");
// });
