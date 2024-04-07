const images = [
  {
    url: "./assets/cow.jpg",
    alt: "cow",
  },
  {
    url: "./assets/flag.jpg",
    alt: "flag",
  },
  {
    url: "./assets/village.jpg",
    alt: "village",
  },
  {
    url: "./assets/switzerland-zurich-2.jpg",
    alt: "zurich",
  },
  {
    url: "./assets/snow.jpg",
    alt: "snow",
  },
];

const thumbContainer = document.getElementById("thumbContainer");
const largeImageContainer = document.querySelector(".largeImage");
const nextButton = document.getElementById("nextBtn");
const backButton = document.getElementById("backBtn");

let currentImageIndex = 0;

function createThumbnails() {
  images.forEach(function (image, index) {
    const img = document.createElement("img");
    img.src = image.url;
    img.alt = image.alt;
    thumbContainer.appendChild(img);
    img.addEventListener("click", function () {
      displayLargeImage(index);
    });
  });
}

function displayLargeImage(index) {
  largeImageContainer.innerHTML = "";

  const bigImg = document.createElement("img");
  bigImg.src = images[index].url;
  bigImg.alt = images[index].alt;
  bigImg.classList.add("bigImage");
  largeImageContainer.appendChild(bigImg);

  currentImageIndex = index;
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  displayLargeImage(currentImageIndex);
}

function previousImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  displayLargeImage(currentImageIndex);
}

createThumbnails();
displayLargeImage(0);

nextButton.addEventListener("click", nextImage);
backButton.addEventListener("click", previousImage);
