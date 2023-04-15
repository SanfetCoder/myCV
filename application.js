// Variables
const images = document.querySelectorAll("img");
const prototypeSection = document.querySelector(".content-prototypes");
const contentVideos = document.querySelector(".content-videos");
var selectedImage = -1;
var isPrototypeShowing = true;

// Functions

// Implementation
images.forEach((image, index) => {
  // STEP 1 : add Event Listener to each image
  image.addEventListener("click", function(){
  // STEP 2 : if the image is clicked, assign its index to selectedImage variable
  selectedImage = index;
  // STEP 3 : Toggle the value of isPrototypeShowing
  if (isPrototypeShowing) {
    isPrototypeShowing = false;
    prototypeSection.style.opacity = 0;
    contentVideos.style.display = 'flex';
  }

  });
});

