var images = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
    "img5.jpg"
];

var index = 0;

var slide = document.getElementById("sliderImage");
var imageCounter = document.getElementById("imageCounter");
// var dots = document.getElementsByClassName("dot");   
var nextArrowEls = document.getElementsByClassName("right-arrow");
var prevArrowEls = document.getElementsByClassName("left-arrow");
var nextArrow = nextArrowEls[0] || null;
var prevArrow = prevArrowEls[0] || null;
var nextBtn = document.getElementsByClassName("next-btn")[0];
var prevBtn = document.getElementsByClassName("prev-btn")[0];

function showImage(){
    slide.src = images[index];
    imageCounter.innerHTML = "Image " + (index + 1) + " of " + images.length;
}

function showNext(){
    index++;
    if(index >= images.length){
        index = 0;
    }
    showImage();
}

function showPrev(){
    index--;
    if(index < 0){
        index = images.length - 1;
    }
    showImage();
}

if(nextArrow){
    nextArrow.onclick = function(){
        showNext();
    }
}

if(nextBtn){
    nextBtn.onclick = function(){
        showNext();
    }
}

if(prevArrow){
    prevArrow.onclick = function(){
        showPrev();
    }
}

if(prevBtn){
    prevBtn.onclick = function(){
        showPrev();
    }
}

// if(dots.length > 0){
//     for(var i = 0; i < dots.length; i++){
//         dots[i].onclick = function(){
//             index = Array.from(dots).indexOf(this);
//             showImage();
//         }
//     }
// }

showImage();