









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
 
// ==== Logo color switch b/w ================================
function logoSwitch () {
    $('.altLogo').each(function() {
      $(this).css('top',
        $('.startLogo').offset().top -  $(this).closest('.row').offset().top
      );
    });
  }  

  $(document).scroll(function() {logoSwitch();});
  
  logoSwitch();
// ==== Paralax object home ================================
gsap.from(".circle-follow", {duration:5, opacity: 0, delay: 3,});
gsap.from(".slog", {duration:5, opacity: 0, delay: 0.5,});
gsap.from("#logo", {duration:8, opacity: 0, delay: 2.4,});
gsap.from("nav", {duration:8, opacity: 0, delay: 2.4,});
gsap.from(".mov", {duration:8, opacity: 0, delay: 2.4,});         
 
var timeout;
$('body').mousemove(function(e){
  if(timeout) clearTimeout(timeout);
  setTimeout(callParallax.bind(null, e), 200);
   
});

function callParallax(e){
  parallaxIt(e, '.mov.decor-project-anim-v1', -13);
  parallaxIt(e, '.mov.decor-project-anim-v2', -24);
  parallaxIt(e, '.mov.decor-project-anim-v3', -15);
  parallaxIt(e, '.mov.decor-project-anim-v4', -19);
  parallaxIt(e, '.mov.decor-project-anim-v5', -15);
  parallaxIt(e, '.mov.decor-project-anim-v6', -35);
  parallaxIt(e, '.mov.decor-project-anim-v7', -37);
  parallaxIt(e, '.mov.decor-project-anim-v8', -50);
  parallaxIt(e, '.mov.decor-project-anim-v9', -18);
  parallaxIt(e, '.mov.decor-project-anim-v10', -61);
  parallaxIt(e, '.mov.decor-project-anim-v11', -49);
}

function parallaxIt(e, target, movement){ 
  var $this = $('body');
  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;
  
  TweenMax.to(target, 0.2, {
    x: (relX - $this.width()/2) / $this.width() * movement,
    y: (relY - $this.height()/2) / $this.height() * movement,
    ease: Power2.easeOut
  });
} 