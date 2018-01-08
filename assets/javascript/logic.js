

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

$(document).on('scroll', function(){

  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("navbar").style.top = "0";
    $(document).off('scroll');
  } else{
    document.getElementById("navbar").style.top = "-500px";

  }
  
});

// show information ==============================
$(".port-imgs").mouseover(function(){
    $(".info_Trivia").slideDown("slow");
  });
$(".port-imgs").mouseleave(function(){
    $(".info_Trivia").slideUp("slow");
});

// ===============================================
$(function() {
    $('body').removeClass('fade-out');
});


