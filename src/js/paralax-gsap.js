// ==== Paralax object home ================================
gsap.from(".circle-follow", {duration:1, opacity: 0, delay: 3,});
gsap.from(".slog", {duration:3, opacity: 0, delay: 0.2,});
gsap.from("#logo", {duration:2, opacity: 0, delay: 2.4,});
gsap.from("nav", {duration:2, opacity: 0, delay: 2.4,});
gsap.from(".mov", {duration:2, opacity: 0, delay: 2.4,});         
 
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

 