// ==== Cursor change circle ================================
var $follow = $('.circle-follow');
 
function moveCircle(e) {
    TweenLite.to($follow, 0, {
      x: e.clientX,
      y: e.clientY
  });  
}

function hoverFunc(e) {
  TweenLite.to($follow, 0.3, {
      scale: 2
  });  
}

function unhoverFunc(e) {
  TweenLite.to($follow, 0.3, {
      scale: 1
  });  
}

$(window).on('mousemove', moveCircle);

$("a").hover(hoverFunc, unhoverFunc);
 