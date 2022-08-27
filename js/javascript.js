// counter js 
// var Cont = { val: 0 },
//   NewVal = 100;
// TweenLite.to(Cont, 2, {
//   val: NewVal,
//   roundProps: "val",
//   onUpdate: function () {
//     document.getElementById("counter").innerHTML = Cont.val;
//   }
// });
// // counter js 
// // loading animation js
// var loading_bar = CSSRulePlugin.getRule(".load_wrapper:after");
// const load = gsap.timeline();
// load.to(loading_bar ,{
//     duration:2,
//     cssRule:{
//        width:"100%"
//     }
// });
// load.to(".load_wrapper #counter",{
//         opacity:1,
//         delay:-1.7
// });
// load.to(".load_wrapper #counter",{
//         opacity:0,
//         delay:-0.2
// });
// load.to(".load_wrapper",{
//     height:0,
//     duration:1,
//     ease: Circ.easeOut
// });
// load.to(".load_wrapper",{
//     zIndex:0
// });
// loading animation js
// First Step
var mainmenu = CSSRulePlugin.getRule(".main_menu_list .main_list"); 
const firststep = gsap.timeline({paused: true});
firststep.to(mainmenu,{
  cssRule:{
    fontSize:68,
    lineHeight:'93px',
    letterSpacing:0,
    fontWeight:300,
    scaleY:1.7, 
    scaleX:0.9,
  },
    duration:0.6,
    ease:"Power4.easein",
    delay:0.1
});
firststep.to(".second_menu",{
   translateX:0,
   duration:0.6,
   ease:Power2,
   delay:-0.5
});
firststep.to(".second_list",{
    scaleX:1.45,
    stagger:0.09,
    duration:1.2,
    ease:"Expo.easeInOut",
    delay:-1.1
});
$("#directors").click(function(){
  firststep.play(0);
  $('.main_menu_list .main_list').removeClass('active');
  $(this).addClass('active');
  $('.menu_inner').addClass('animate');
  $('.second_menu_inner').addClass('second_first_step')
  $('.first_hidden_wrapper').css('display','block'); 
});
const firststepreverse = gsap.timeline({paused: true});
firststepreverse.to(".second_menu",{
  translateX:"200%",
  duration:0.4,
  ease:"Power1.easein",
});
firststepreverse.to(mainmenu,{
  cssRule:{
    fontSize:211,
    lineHeight:'172px',
    letterSpacing:-8,
    fontWeight:900,
    scaleY:1, 
    scaleX:1.45,
    },
    duration:0.6,
    delay:-0.3
});

$(".first_hidden_wrapper").click(function(){
  $(this).hide();
  firststepreverse.play(0);
  $('.main_menu_list .main_list').removeClass('active');
  $('.menu_inner').removeClass('animate');
});
$(".second_list").hover(function () {
  $(this).toggleClass("hover");
});
// First Step
// second step
var videolist = CSSRulePlugin.getRule(".video_list_part .video_list"); 
const secondstep = gsap.timeline({paused:true});
secondstep.to(mainmenu,{
  cssRule:{
    fontSize:42,
    lineHeight:'57px',
    duration:0.3,
    ease:"Power3.easeOut",
  }
});
secondstep.to(".second_list",{
    scaleX:0.5,
    fontWeight:300,
    letterSpacing:0,
    opacity:0.5,
    ease:"Power2.easeInOut",
    duration:0.6,
    delay:-0.5
});
secondstep.to(".second_menu",{
  width:"600px",
  delay:-0.9,
  duration:0.9,
  ease:"Power2.easeInOut",
});
secondstep.to(".video_list_part .video_list",{
    translateX:0,
    stagger:0.09,
    delay:-0.7,
    duration:0.7,
    ease:"Power2.easeInOut",
})
secondstep.to(".video_list_part .video_list img",{
    scaleX:1,
    ease:"Power3.easeOut",
    duration:0.7,
    delay:-0.7

})
$(".second_list").click(function(){
  secondstep.play(0);
  $(this).addClass('active');
  $('.second_menu_inner').addClass('second_step_active').removeClass('second_first_step');
  $('.second_hidden_wrapper').show();
});
const secondstepreverse = gsap.timeline({paused:true});
secondstepreverse.to(".second_list",{
  scaleX:1.45,
  fontWeight:900,
  letterSpacing:-8,
  opacity:1,
  ease:"Power3.easeOut",
  duration:0.4,
});
secondstepreverse.to(mainmenu,{
  cssRule:{
    fontSize:68,
    lineHeight:'93px',
  },
  duration:0.6,
  ease:"Power2.easeIn",
  delay:-0.5
});
secondstepreverse.to(".video_list_part .video_list",{
  translateX:"200%",
  duration:0.4,
  ease:"Power1.easein",
  delay:-0.5
})
$(".second_hidden_wrapper").click(function(){
  secondstepreverse.play(0);
  $('.second_list').removeClass('active');
  $('.second_menu_inner').removeClass('second_step_active').addClass('second_first_step');
  $(this).hide();
});
// second step


