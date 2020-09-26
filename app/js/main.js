$(function () {

  $('.slider__inner').slick({
    autoplay: 3000,
    fade: true
  });


});


var text = document.querySelectorAll('.choice__text'),
    heart = document.querySelectorAll('.choice__link');

heart.forEach((link) => {
    link.addEventListener('mouseenter', function() {
        link.previousElementSibling.style.opacity = '1';
    });
    link.addEventListener('mouseleave', function() {
        link.previousElementSibling.style.opacity = '0';

    });

});

var wrapper = document.querySelector(".wrapper");
var text = document.querySelector(".text");

var textCont = text.textContent;
text.style.display = "none";

for (var i = 0; i < textCont.length; i++) {
  (function(i) {
    setTimeout(function() {
      // Created textNode to append
      var texts = document.createTextNode(textCont[i]);
      var span = document.createElement('span');
      span.appendChild(texts);

      span.classList.add("wave");
      wrapper.appendChild(span);

    }, 75 * i);
  }(i));
}







