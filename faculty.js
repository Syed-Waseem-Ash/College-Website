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
 const endd = height + 70;
 
 
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




    gsap.set(".card", {opacity :0, scale:0});
    ScrollTrigger.batch(".card", { interval: .1, batchMax: 9,
     
    onEnter: batch => gsap.to(batch, {opacity: 1,scale:1, stagger: {each:.1}, overwrite: true}), 

    start: "center bottom", end: "bottom " + endd});
        ScrollTrigger.addEventListener("refreshInit", () => gsap.set(".card", {opacity :1,scale :1, x: 0}));

});

function readMore(profile)
    {

        if($(profile + " .less").css("display")==="none")
        {
            $(profile + " .more").css("display","none");
            $(profile +  " .less").css("display","inline");
            $(profile + " .btn").text("Read more");
            $(profile).parent().siblings().each( function() {$(this).css("display","block");});
           
        }
        else
        {
            $(profile + " .more").css("display","inline");
            $(profile + " .less").css("display","none");
            $(profile + " .btn").text("Read less");
            $(profile).parent().siblings().each( function() { $(this).css("display","none");});
           
            }
            $(profile).toggleClass("pop-up");
            
      
    }
