
$(window).on('load', function() {
  $('#front').fadeTo(0, 0, 'linear', function(){
    $(this).css('visibility', 'visible');
    
  }).fadeTo(1000, 1, 'linear');


  $("#loadingScr").fadeOut(400, 0);
  $(".expert").css("width", "100%");
  $(".good").css("width", "88%");
  $(".average").css("width", "65%");
  $(".moderate").css("width", "45%");
  $(".beginner").css("width", "20%");
});


// Find function that will load the function at the right time
var scrolled = false;

$(window).scroll(function(){
  // This is then function used to detect if the element is scrolled into view
  function elementScrolled(elem)
  {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
  }
  // This is where we use the function to detect if ".box2" is scrolled into view, and when it is add the class ".animated" to the <p> child element
    if((elementScrolled('#tripWire')) && (scrolled == false)){
  	scrolled = true;
  	icons();
  }
});










