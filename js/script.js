let imageButton = document.querySelector(".btn-image");
let bg = document.querySelector(".bg-image");
imageButton.addEventListener("click", getCatImage);

function getCatImage() {
  fetch("https://api.thecatapi.com/v1/images/search")
    .then(function (response) {
      return response.json();
    })
    .then(displayImage);
}

function displayImage(response) {
  bg.style.width = `${response[0].width}px`;
  bg.style.height = `${response[0].height}px`;
  bg.style.background = `url(${response[0].url}) no-repeat center`;
}

getCatImage();
