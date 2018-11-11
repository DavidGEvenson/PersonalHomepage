/*! DO NOT EDIT personalhomepage 2018-11-10 */
var currentSlide = 0;

function nextSlide(n) {
    showSlides(currentSlide += n);
    console.log(currentSlide);
}

function getSlide(n) {
    showSlides(currentSlide = n);
    console.log(currentSlide);
}

function showSlides(n) {
    console.log("start");
    var slides = document.getElementsByClassName("ProjectSlide");
    if (n > slides.length - 1) {
        currentSlide = 0;
    }
    if (n < 0) {
        currentSlide = slides.length - 1;
    }
    var i;
    for(i=0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    console.log(i);
    slides[currentSlide].style.display = "block";
}