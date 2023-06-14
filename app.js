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

  let button = document.querySelector("moreInfo");
  button.innerHTML = "Hide Tutorials";
};

// Functions
const newPlaylist = () => {
  const playlist = document.querySelector(".playlist");
  playlist.innerHTML = `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DWZXHVUlGM9Wp?utm_source=generator&theme=0" width="100%" height="500" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
};

const moreVideos = () => {
  let vidOne = document.querySelector(".vidOne");
  let vidTwo = document.querySelector(".vidTwo");
  let vidThree = document.querySelector(".vidThree");

  vidOne.innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/G6k3aQcKT1s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;

  vidTwo.innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/-FayATeqDoo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;

  vidThree.innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/ZgpXQ3ojDX4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
};

const changeTxt = () => {
  let contentInfo = document.querySelector(".contentInfo");
  contentInfo.innerHTML = `<p>Cupcake ipsum dolor sit amet lollipop. Marzipan soufflé danish jujubes marzipan. I love halvah bear claw carrot cake pie apple pie I love. Liquorice candy canes muffin chocolate topping apple pie brownie lemon drops. Chocolate bar apple pie chocolate bar lollipop cake marshmallow donut macaroon powder. Lemon drops I love dragée candy canes gummi bears marshmallow. Cookie liquorice tiramisu I love tart topping jelly-o. Carrot cake bonbon sesame snaps brownie liquorice I love tootsie roll cookie soufflé. I love candy bear claw chocolate cake chocolate cake cake gingerbread marzipan. Croissant apple pie gummies I love cookie biscuit topping dessert. Jelly beans marshmallow sweet jujubes icing tootsie roll. Marshmallow gummi bears chupa chups chocolate cupcake chupa chups toffee. Chocolate croissant cheesecake candy cupcake muffin.</p>`;
};
