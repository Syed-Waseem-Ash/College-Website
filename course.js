gsap.set("#logo",{opacity :0});


/* -------- Sub-Menu -------- icon */
function iconToggle(icon,drop)
{
    $(icon).toggleClass("alter-icon");
    $(drop).stop().slideToggle(500);
}


$(function ()
{  

    var height = $("#header").outerHeight()
  var fh = $(".body").offset().top + $(".body").outerHeight();
 $("#menu").offset({top:height});
 $(".body").offset({top:height});
 $(".footer").offset({top:fh + height});
 const endd = height;
 
 
    $("#ham-X").click(function ()
    {
      //  $(".menu").slideToggle(500);
        //$("#ham-X")
        $(this).toggleClass("open");
        $("#menu").stop().animate({width : "toggle"},500);
        
        
        if(!$(this).hasClass("open"))
        {
        $(".sub").css("display","none");
        $(".drop-icon").removeClass("alter-icon");
        }
    });
    
    var hd = gsap.timeline();
    
    
    hd.fromTo("#logo",{y : -100, opacity :0},{opacity:1,ease: "back.out" , y:0})
    .fromTo("nav",{x : -100, opacity :0}, {x:0,opacity :1,  ease: "back.out"})
    .fromTo("#ham-X",{x : -50, rotateZ: -120, opacity :0}, {x:0,opacity :1,  ease: "power4.out(1,0.1)" ,delay :-.4, rotateZ :0})
    
    
    gsap.set(".card-body", {opacity : 0}); ScrollTrigger.batch(".card-body", { interval: 0.1,
    
onEnter: batch => {gsap.from(batch, {y:-100,  stagger: .1, overwrite: true}); gsap.to(batch ,{y:0,opacity :1,overwrite :true, stagger :.1})},

 onLeave: batch => gsap.to(batch, {opacity :0, y: 100, overwrite: true, stagger :.1}), 
 
 onEnterBack: batch => /*{ gsap.from(batch, { x :-100,  stagger: 0.15, overwrite: true}); */gsap.to(batch ,{y:0,opacity :1, overwrite :true , stagger :.1}), 
 
 onLeaveBack: batch => gsap.to(batch, {opacity :0,y:-100, overwrite: true, stagger :.1}), start: "10% bottom", end: "bottom " + (endd + 70)}); 
 
  ScrollTrigger.addEventListener("refreshInit", () => gsap.set(".card-body", {opacity  :1,x: 0})); 

        gsap.set("img", {opacity : 0}); ScrollTrigger.batch("img", { interval: 0.1, // time window (in seconds) for batching to occur. 
batchMax: 99, // maximum batch size (targets). Can be function-based for dynamic values 
onEnter: batch => {gsap.from(batch, {y:100,  stagger: .1, overwrite: true}); gsap.to(batch ,{y:0,opacity :1,overwrite :true, stagger :.1})},

 onLeave: batch => gsap.to(batch, {opacity :0, y: -100, overwrite: true, stagger :.1}), 
 
 onEnterBack: batch => /*{ gsap.from(batch, { x :-100,  stagger: 0.15, overwrite: true}); */gsap.to(batch ,{x:0,y:0,opacity :1, overwrite :true , stagger :.1}), 
 
 onLeaveBack: batch => gsap.to(batch, {opacity :0,y:100,  overwrite: true, stagger :.1}), start: "10% bottom", end: "bottom " + (endd + 50)}); 
 ScrollTrigger.addEventListener("refreshInit", () => gsap.set("img", {opacity  :1,x: 0})); 
 
    
});
