let factButton = document.querySelector(".btn-fact");
let factText = document.querySelector(".fact-text");

let imageButton = document.querySelector(".btn-image");
let imageContainer = document.querySelector(".image-container");
let catImage = document.querySelector(".cat-image");

imageButton.addEventListener("click", getCatImage);
factButton.addEventListener("click", getCatFact);

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

function getCatFact() {
  fetch("https://cat-fact.herokuapp.com/facts")
    .then(function (response) {
      return response.json();
    })
    .then(displayFact);
}

function displayFact(response) {
  factText.innerText = response.all[Math.floor(Math.random() * 238)].text;
}

getCatImage();
getCatFact();
