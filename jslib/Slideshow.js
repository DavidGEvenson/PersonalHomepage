var currentSlide = 0;

function nextSlide(n) {
    showSlides(currentSlide += n);
    console.log(currentSlide);
}

function gotoSlide(n) {
    showSlides(currentSlide = n);
    console.log(currentSlide);
}

function showSlides(n) {
    console.log("start");
    var slides = document.getElementsByClassName("ProjectSlide");
    var dot = document.getElementsByClassName("Dot");
    if (n > slides.length - 1) {
        currentSlide = 0;
    }
    if (n < 0) {
        currentSlide = slides.length - 1;
    }
    var i;
    for(i=0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dot[i].style.backgroundColor = "whitesmoke";
    }
    console.log(i);
    slides[currentSlide].style.display = "block";
    dot[currentSlide].style.backgroundColor = "#7f7f7f";
}