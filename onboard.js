let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

// Attach to buttons
document.querySelector('.prev').addEventListener('click', () => plusSlides(-1));
document.querySelector('.next').addEventListener('click', () => plusSlides(1));

// Add touch event listeners for swiping
let touchstartX = 0;
let touchendX = 0;
    
function checkSwipeDirection() {
  if (touchendX < touchstartX) plusSlides(1);
  if (touchendX > touchstartX) plusSlides(-1);
}

document.querySelector('.explainer-carousel').addEventListener('touchstart', e => {
  touchstartX = e.changedTouches[0].screenX;
});

document.querySelector('.explainer-carousel').addEventListener('touchend', e => {
  touchendX = e.changedTouches[0].screenX;
  checkSwipeDirection();
});