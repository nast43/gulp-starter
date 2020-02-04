window.addEventListener("deviceorientation", orientation, true);

function orientation(event) {
  var x = event.beta;
  var y = event.gamma;
  
  $('.square').css({
    'top':x,
    'left': y
  });
}