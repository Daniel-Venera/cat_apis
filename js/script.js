let imageButton = document.querySelector(".btn-image");
let imageContainer = document.querySelector(".image-container");
let catImage = document.querySelector(".cat-image");
imageButton.addEventListener("click", getCatImage);

function getCatImage() {
  fetch("https://api.thecatapi.com/v1/images/search")
    .then(function (response) {
      return response.json();
    })
    .then(displayImage);
}

function displayImage(response) {
  catImage.src = response[0].url;
}

getCatImage();
