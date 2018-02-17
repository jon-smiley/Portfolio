console.log("animation");


// =======================================================
function titleAnime(){

anime({
  targets: '#home_title', 
  translateX: 25,
  translateY: 45,
  delay: 300,
  easing: 'easeInOutQuart'
});

anime({
  targets: '#content', 
  translateX: 10,
  delay: 300,
  easing: 'easeInOutQuart'
});

};
// ======================================================

function icons(){
    anime({
      targets: '#skill1', 
      translateX: 1100,
      easing: 'easeInOutQuart'
  });
  anime({
    targets: '#skill2', 
    translateX: 1150,
      delay: 5,
    easing: 'easeInOutQuart'
  });
  anime({
    targets: '#skill3', 
    translateX: 1200,
    delay: 10,
    easing: 'easeInOutQuart'
  });
  anime({
    targets: '#skill4', 
    translateX: 1350,
    delay: 20,
    easing: 'easeInOutQuart'
  });
  anime({
    targets: '#skill5', 
    translateX: 1400,
    delay: 30,
    easing: 'easeInOutQuart'
  });
  anime({
    targets: '#skill6', 
    translateX: 1450  ,
    delay: 40,
    easing: 'easeInOutQuart'
  });
  }

$(window).on('load', function() {
  $('#cover').removeAttr('id');
  titleAnime();
  console.log("load");
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
  
  
  
  // console.log(scrolled + " Scrolled before");
  if((elementScrolled('#tripWire')) && (scrolled == false)){
  	scrolled = true;
  	// console.log(scrolled);
  	icons();

  // Your function here
  }else{

  	// console.log(scrolled + " Scrolled");

  }
});










