//  фильтр в секции works
var mixer = mixitup('.target');


// анимация самолетика при нажатии на кнопку
document.querySelector('.registration__form-send').addEventListener('click', function() {
  var plane = document.querySelector ('.registration-plane');
  plane.classList.add('plane-animation');
  plane.removeEventListener('click', arguments.callee);
  plane.addEventListener('animationend', function() {
    plane.classList.remove('plane-animation');
    plane.addEventListener('click', arguments.callee);
  });
});