

$("#link_home").on("click", function(){
	console.log("home");
});

$("#link_resume").on("click", function(){
	console.log("resume");
});

$("#link_bio").on("click", function(){
	console.log("bio");
});

// ------------top nav bar---------------------------
$(document).ready(function(){

$('#myCarousel').carousel("pause");

// Enable Carousel Indicators
    $(".item1").click(function(){
        $("#myCarousel").carousel(0);
    });
    $(".item2").click(function(){
        $("#myCarousel").carousel(1);
    });
    $(".item3").click(function(){
        $("#myCarousel").carousel(2);
    });
    


// Enable Carousel Controls
    $(".left").click(function(){
        $("#myCarousel").carousel("prev");
    });
    $(".right").click(function(){
        $("#myCarousel").carousel("next");
    });

});

// window.onscroll = function() {
//     scroll()
// };

var pos = false;

$(document).on('scroll', function(){

  if ((document.body.scrollTop > 10 || document.documentElement.

        scrollTop > 10) && (pos == false)){

    document.getElementById("navbar").style.top = "0";

    $(document).off('scroll');

    pos = true;

  } else{
    // document.getElementById("navbar").style.top = "-500px";

  }
});

$(".downInfo").on("click", function(){

     $("html, body").animate({ scrollTop: $("#filler").offset().top }, 2000);

});


// trip nav bar to come down======================
// $("#nav_trig").mouseover(function(){
//     $("#navbar").css("top", "0px");
//     console.log("nav");
// });  

function navDown(){
    $("#navbar").css("top", "0px");
    pos = true;
};

$("#nav_trig").mouseover(function(){
    console.log(pos);
    navDown();
});

// Portfolio animation============================

// show information ==============================
$("#tr_img").mouseover(function(){
    $(".info_Trivia").slideDown("slow");
    $("#trivDem").css("opacity",.75);
  });
$("#tr_img").mouseleave(function(){
    $(".info_Trivia").slideUp("slow");
    $("#trivDem").css("opacity",0);
});
// ===============================================

$("#weath_img").mouseenter(function(){
    $(".info_Weath").slideDown("slow");
    $("#banDem").css("opacity",.75);
  });
$("#weath_img").mouseleave(function(){
    $(".info_Weath").slideUp("slow");
    $("#banDem").css("opacity",0);
});
// ===============================================
$("#pro2_img").mouseenter(function(){
    $(".info_Pro2").slideDown("slow");
    $("#UFOdem").css("opacity",.75);

  });
$("#pro2_img").mouseleave(function(){
    $(".info_Pro2").slideUp("slow");
    $("#UFOdem").css("opacity",0);
});

// ===============================================
$("#pro3_img").mouseenter(function(){
    $(".info_Pro3").slideDown("slow");
    $("#burDem").css("opacity",.75);
  });
$("#pro3_img").mouseleave(function(){
    $(".info_Pro3").slideUp("slow");
    $("#burDem").css("opacity",0);

});

// fade in =======================================
$(function() {
    $('body').removeClass('fade-out');
});




