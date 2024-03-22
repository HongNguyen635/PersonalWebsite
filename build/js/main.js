const initApp = () => {
  // set the default to dark theme
  document.documentElement.classList.add("dark");

  // toggle the light and dark mode
  const lightModeToggle = document.getElementById("toggle-light-mode");
  const sunIcon = document.getElementById("sun-icon");
  const moonIcon = document.getElementById("moon-icon");

  const toggleMode = () => {
    sunIcon.classList.toggle("hidden");
    sunIcon.classList.toggle("block");

    moonIcon.classList.toggle("hidden");
    moonIcon.classList.toggle("block");

    // check for which light mode has been clicked
    if (sunIcon.classList.contains("block")) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // if we can get the element
  if (lightModeToggle && sunIcon && moonIcon) {
    lightModeToggle.addEventListener("click", toggleMode);
  }
};

document.addEventListener("DOMContentLoaded", initApp);
