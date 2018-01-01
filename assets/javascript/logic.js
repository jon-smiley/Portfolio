

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

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-500px";
  }
}



