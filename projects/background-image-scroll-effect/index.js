const bgImageEl = document.getElementById("bg-image");

window.addEventListener("scroll", () => {
  updateImage();
});

function updateImage() {
  bgImageEl.style.opacity = 1 - window.screenY / 900;
  bgImageEl.style.backgroundSize = 160 - window.screenY / 12 + "%";
}
