var currentProjectSlide = 0;

function nextSlideP(n) {
    showSlidesP(currentProjectSlide + n);
}

function gotoSlideP(n) {
    showSlidesP(n);
}

function showSlidesP(n) {
    console.log("current slide: " + currentProjectSlide);
    console.log("n: " + n);

    var slides = document.getElementsByClassName("ProjectSlide");
    var dot = document.getElementsByClassName("ProjectDot");
    var i;

    currentProjectSlide = n;

    if (n > slides.length - 1) {
        currentProjectSlide = 0;
    }
    if (n < 0) {
        currentProjectSlide = slides.length - 1;
    }
    for(i=0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dot[i].style.backgroundColor = "whitesmoke";
    }
    slides[currentProjectSlide].style.display = "block";
    dot[currentProjectSlide].style.backgroundColor = "#7f7f7f";
}