setTimeout(() => {$("#msg").css("display","none");
$("body").css("display","block")
},4000);

gsap.set("#logo",{opacity :0});


/* -------- Sub-Menu -------- icon */
function iconToggle(icon,drop)
{
    $(icon).toggleClass("alter-icon");
    $(drop).stop().slideToggle(500);
}

function height()
{
  var height = $("#header").outerHeight();
  var fh = $(".body").offset().top + $(".body").outerHeight();
  $("#menu").offset({top:height});
  $(".body").offset({top:height});
  $(".footer").offset({top:fh});
  
}


$(function ()
{ 
     
 var height = $("#header").outerHeight()
  var fh = $(".body").offset().top + $(".body").outerHeight();
 console.log(height);
 $("#menu").offset({top:height});
 $(".body").offset({top:height});
 $(".footer").offset({top:fh + height});
 const endd = height +50;
 
 
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
    
    
 /*   $(".link img").click(() =>
    {
       var tl = gsap.timeline(".link img");
        tl.to($(this), {x :-20});
    });
    */
    $(".link .col-sm-6").each(createEffect);
    
  function createEffect(i, element) 
  {
     var tl = gsap.timeline({ paused: true });
     var htag = $(this);
      tl.to(htag,{ scale:.9, scrub:true});
      $(element).hover(over, out);
      function over() { tl.play(); }
      function out() { tl.reverse(); }
  }
    
    var hd = gsap.timeline();
    
    
    hd.fromTo("#logo",{y : -100, opacity :0},{opacity:1,ease: "back.out" , y:0})
    .fromTo("nav",{x : -100, opacity :0}, {x:0,opacity :1,  ease: "back.out"})
    .fromTo("#ham-X",{x : -50, rotateZ: -120, opacity :0}, {x:0,opacity :1,  ease: "power4.out(1,0.1)" ,delay :-.4, rotateZ :0})
    
    
    
    gsap.set(".para p, .para h1", {opacity : 0}); ScrollTrigger.batch(".para p, .para h1", { interval: 0.1, // time window (in seconds) for batching to occur. 
batchMax: 99, // maximum batch size (targets). Can be function-based for dynamic values 
onEnter: batch => {gsap.from(batch, {y:100,  stagger: .1, overwrite: true}); gsap.to(batch ,{y:0,opacity :1,overwrite :true, stagger :.1})},

 onLeave: batch => gsap.to(batch, {opacity :0, y: -100, overwrite: true, stagger :.1}), 
 
 onEnterBack: batch => /*{ gsap.from(batch, { x :-100,  stagger: 0.15, overwrite: true}); */gsap.to(batch ,{y:0,opacity :1, overwrite :true , stagger :.1}), 
 
 onLeaveBack: batch => gsap.to(batch, {opacity :0,y:100, overwrite: true, stagger :.1}), start: "20% bottom", end: () =>  "90% " + endd }); // when ScrollTrigger does a refresh(), it maps all the positioning data which // factors in transforms, but in this example we're initially setting all the ".box" // elements to a "y" of 100 solely for the animation in which would throw off the normal // positioning, so we use a "refreshInit" listener to reset the y temporarily. When we // return a gsap.set() in the listener, it'll automatically revert it after the refresh()!
 ScrollTrigger.addEventListener("refreshInit", () => gsap.set(".para p, .para h1", {opacity  :1,y: 0})); 

    
});


