//----------------nav responsive view------------//
$(document).ready(function() {
        $('.menu-toggle').on('click',function() {
        $('.nav-menu').toggleClass('show-nav');
        });
    
      });


//=======================================================================//

var slideNo = 1;
Carousel(slideNo);

function Carousel(n){
  var slides = document.getElementsByClassName("image-container");
 
  if (n > slides.length) {
    slideNo = 1;
  }
  if (n < 1) {
    slideNo = slides.length;
  }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideNo - 1].style.display = "block";
 

}
function newSlide(n){
  Carousel(slideNo += n);
}
function currentSlide(n){
  Carousel(slideNo = n);
}
