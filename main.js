// Kung Fu Panda Slideshow / Gallery

// Global Variable
let imgPaths = [
  "po.png",
  "viper.png",
  "tigress.png",
  "monkey.png",
  "mantis.png",
  "crane.png",
];

// Create image gallery
let imgContainerEl = document.getElementById("img-container");
for (let i = 0; i < imgPaths.length; i++) {
  imgContainerEl.innerHTML += "<img src='images/" + imgPaths[i] + "'>";
}
