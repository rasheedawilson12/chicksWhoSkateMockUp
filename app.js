// Toggle Functions

// Change background color Theme
const changeTheme = () => {
  let body = document.querySelector("body");
  body.classList.toggle("dark");

  let button = document.querySelector(".changeTheme");
  button.classList.toggle("light");
};

// Show/Hide skate videos
const showVideos = () => {
  let videos = document.querySelector(".skateVideo");
  videos.classList.toggle("hidden");
};

// Functionsch
