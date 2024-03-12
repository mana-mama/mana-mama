let body = document.querySelector("body");

body.onload = () => { 
    addAnimationtoPic();
}

let slideIndex = 1;
    showSlides(slideIndex);
    setTimeout(autoSlides, 10000);

let VerticalslideIndex = 1;
    showVerticalSlides(VerticalslideIndex)
    setTimeout(autoVerticalSlides, 5000);

function plusSlides(n) {
    showSlides(slideIndex += n);
}
  
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
  
function autoSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(autoSlides, 10000);
}

function showDes(container) {
    container.childNodes[1].childNodes[13].style.display = "block";
}

function hideDis(container) {
    container.childNodes[1].childNodes[13].style.display = "none";
}

function showVerticalSlides(n) {
    let i;
    let slides = document.getElementsByClassName("ver-img-container");
    if (n > slides.length) {VerticalslideIndex = 1}
    if (n < 1) {VerticalslideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[VerticalslideIndex-1].style.display = "block";
}

function autoVerticalSlides() {
    let i;
    let slides = document.getElementsByClassName("ver-img-container");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    VerticalslideIndex++;
    if (VerticalslideIndex > slides.length) {VerticalslideIndex = 1}
    slides[VerticalslideIndex-1].style.display = "block";
    setTimeout(autoVerticalSlides, 5000);
}

function showList(products) {
    products.childNodes[3].style.display = "block"
}

function hideList(products) {
    products.childNodes[3].style.display = "none"
}

function showClick(box) {
    box.childNodes[11].style.opacity = 100
}

function hideClick(box) {
    box.childNodes[11].style.opacity = 0
}

function showdetailof(this_box) {
    const big_box = document.getElementsByClassName("prod-detail-big-box");
    const pic = this_box.childNodes[1].src;
    const name = this_box.childNodes[3].textContent;
    const price = this_box.childNodes[5].textContent;
    const type = this_box.childNodes[7].textContent;
    const detail = this_box.childNodes[9].textContent;

    big_box[0].childNodes[1].childNodes[1].src = pic;
    big_box[0].childNodes[1].childNodes[3].childNodes[1].textContent = name;
    big_box[0].childNodes[1].childNodes[3].childNodes[5].textContent = price;
    big_box[0].childNodes[1].childNodes[3].childNodes[9].textContent = type;
    big_box[0].childNodes[1].childNodes[3].childNodes[11].textContent = detail;
    big_box[0].style.display = "block";
}

function clsoedetailof(this_box) {
    const big_box = document.getElementsByClassName("prod-detail-big-box");
    big_box[0].style.display = "none";
}

function showInfo(small_box) {
    const small_info = document.getElementsByClassName("small-info");

    small_info[0].childNodes[1].textContent = small_box.childNodes[3].textContent;
    small_info[0].childNodes[3].textContent = small_box.childNodes[5].textContent;
    small_info[0].style.display = "block";

    if (small_box.parentElement.classList[0] == "first") {
        small_info[0].classList.toggle("bottom");
    }
}

function hideInfo(small_box) {
    const small_info = document.getElementsByClassName("small-info");

    small_info[0].style.display = "none";
    small_info[0].classList.remove("bottom");
}

function addAnimationtoPic() {
    const horizontal_bar = document.getElementsByClassName("horizontal-slider");

    for (i=1; i < horizontal_bar[0].childNodes.length ; i = i+2) {
        horizontal_bar[0].childNodes[i].classList.toggle("sliding");
    }
}