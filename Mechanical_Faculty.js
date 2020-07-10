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
            $(profile).parent().siblings().each( function() {$(this).css("display","none");});
           
            }
            $(profile).toggleClass("pop-up");
            
      
    }
    
    setTimeout(() => $("#msg").css("display","none"),2500);

function iconToggle(icon,drop)
{
    $(icon).toggleClass("alter-icon");
    $(drop).slideToggle(500);
}


$(function ()
{  
    $(".ham-X").click(function ()
    {
      //  $(".menu").slideToggle(500);
        $(".ham-X").toggleClass("open");
        $(".menu").animate({width : "toggle"},1000);
    }
)});

