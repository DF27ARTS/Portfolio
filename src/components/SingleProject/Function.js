// Move forwards in the cicle carucel
export const MoveForwards = () => {
  const currentPorcentage = 360 / 6;
  // rotate carrucel
  removeSliderClass();
  const panel = document.querySelector(".front_panel");
  const image = document.querySelector(".center_panel");
  const sliders = document.querySelectorAll(".slider");

  const currentDegree = getComputedStyle(image)
    .getPropertyValue("--rotate")
    .replace("deg", "");

  const currentPanelComputed = getComputedStyle(panel);
  const currentPanel = currentPanelComputed
    .getPropertyValue("--rotate-panel")
    .replace("deg", "");

  const currentSlider = parseInt(
    currentPanelComputed.getPropertyValue("--current-slider-num")
  );
  if (parseInt(currentDegree) < -240) {
    image.style.setProperty("--rotate", "0deg");
    panel.style.setProperty("--rotate-panel", "0deg");
  } else {
    image.style.setProperty(
      "--rotate",
      parseInt(currentDegree) - currentPorcentage + "deg"
    );

    panel.style.setProperty(
      "--rotate-panel",
      parseInt(currentPanel) + currentPorcentage + "deg"
    );
  }

  if (currentSlider === 5) {
    sliders[0].classList.add("slider_Activated");
    panel.style.setProperty("--current-slider-num", 0);
  } else {
    sliders[currentSlider + 1].classList.add("slider_Activated");
    panel.style.setProperty("--current-slider-num", currentSlider + 1);
  }
};

// Move backwards in the cicle carucel
export const MoveBackwards = () => {
  const currentPorcentage = 360 / 6;
  // rotate carrucel
  removeSliderClass();
  const panel = document.querySelector(".front_panel");
  const image = document.querySelector(".center_panel");
  const sliders = document.querySelectorAll(".slider");

  const currentDegree = getComputedStyle(image)
    .getPropertyValue("--rotate")
    .replace("deg", "");

  const currentPanelComputed = getComputedStyle(panel);
  const currentPanel = currentPanelComputed
    .getPropertyValue("--rotate-panel")
    .replace("deg", "");

  const currentSlider = parseInt(
    currentPanelComputed.getPropertyValue("--current-slider-num")
  );

  if (parseInt(currentDegree) > 240) {
    image.style.setProperty("--rotate", "0deg");
    panel.style.setProperty("--rotate-panel", "0deg");
  } else {
    image.style.setProperty(
      "--rotate",
      parseInt(currentDegree) + currentPorcentage + "deg"
    );

    panel.style.setProperty(
      "--rotate-panel",
      parseInt(currentPanel) - currentPorcentage + "deg"
    );
  }

  if (currentSlider === 0) {
    sliders[5].classList.add("slider_Activated");
    panel.style.setProperty("--current-slider-num", 5);
  } else {
    panel.style.setProperty("--current-slider-num", currentSlider - 1);
    sliders[currentSlider - 1].classList.add("slider_Activated");
  }
};

// Takes the circle carucel up to show the technologies and decription
export const TechnologyBoxFunction = (value, techFunction) => {
  const center_panel = document.querySelector(".center_panel");
  const projects_container = document.querySelector(".projects_container");
  const project_description = document.querySelector(".project_description");
  if (value !== true) {
    center_panel.style.setProperty("--top", "-25%");
    projects_container.style.setProperty("--perspective-up", "20%");
    project_description.style.setProperty("--overflow", "auto");
  } else {
    center_panel.style.setProperty("--top", "4%");
    projects_container.style.setProperty("--perspective-up", "-5%");
    project_description.style.setProperty("--overflow", "hidden");
  }
  techFunction(!value);
};

// Move forwards in the liner carucel
export const SliderRight = () => {
  removeSliderClass();

  const single_image = document.querySelectorAll(".single_image");
  const center_panel = document.querySelector(".center_panel");
  const sliders = document.querySelectorAll(".slider");

  // panel.style.setProperty("--current-slider-num", 0);
  const currentPanelComputed = getComputedStyle(center_panel);

  const currentSlider = parseInt(
    currentPanelComputed.getPropertyValue("--current-slider-num")
  );

  const currentValue = getComputedStyle(single_image[0])
    .getPropertyValue("--translate")
    .replace("vw", "");

  if (parseInt(currentSlider) === 5) {
    single_image.forEach((image) => {
      image.style.setProperty("--translate", "0vw");
    });

    center_panel.style.setProperty("--current-slider-num", 0);
  } else {
    single_image.forEach((image) => {
      image.style.setProperty(
        "--translate",
        parseInt(currentValue) - 80 + "vw"
      );
    });

    center_panel.style.setProperty("--current-slider-num", currentSlider + 1);
  }

  if (currentSlider === 5) {
    sliders[0].classList.add("slider_Activated");
  } else {
    sliders[currentSlider + 1].classList.add("slider_Activated");
  }
};

// Move backwrds in the liner carucel
export const SliderLeft = () => {
  removeSliderClass();

  const single_image = document.querySelectorAll(".single_image");
  const center_panel = document.querySelector(".center_panel");
  const sliders = document.querySelectorAll(".slider");

  // panel.style.setProperty("--current-slider-num", 0);
  const currentPanelComputed = getComputedStyle(center_panel);

  const currentSlider = parseInt(
    currentPanelComputed.getPropertyValue("--current-slider-num")
  );

  const currentValue = getComputedStyle(single_image[0])
    .getPropertyValue("--translate")
    .replace("vw", "");

  if (parseInt(currentSlider) === 0) {
    single_image.forEach((image) => {
      image.style.setProperty("--translate", "-400vw");
    });

    center_panel.style.setProperty("--current-slider-num", 5);
  } else {
    single_image.forEach((image) => {
      image.style.setProperty(
        "--translate",
        parseInt(currentValue) + 80 + "vw"
      );
    });

    center_panel.style.setProperty("--current-slider-num", currentSlider - 1);
  }

  if (currentSlider === 0) {
    sliders[5].classList.add("slider_Activated");
  } else {
    sliders[currentSlider - 1].classList.add("slider_Activated");
  }
};

// revo all the slice active classes to implement the next active slider class
function removeSliderClass() {
  const slider_Activated = document.querySelector(".slider_Activated");
  if (slider_Activated !== null)
    slider_Activated.classList.remove("slider_Activated");
}
