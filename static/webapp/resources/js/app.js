// Easter egg for geeks :)
console.log('Hello fellow geek, We are always looking for good curious lads like you!');
console.log('Want to join our team? Please, feel free to reach us out at career@axetay.co.uk');
console.log('------------------');
console.log('Running jQuery %s', $().jquery);




// Animisition - Page to page transition
$(".animsition").animsition(
    {
      inClass: 'fade-in',
      outClass: 'fade-out',
      inDuration: 1500,
      outDuration: 400,
      linkElement: '.animsition-link',
      // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
      loading: true,
      loadingParentElement: 'body', //animsition wrapper element
      loadingClass: 'animsition-loading',
      loadingInner: '', // e.g '<img src="loading.svg" />'
      timeout: false,
      timeoutCountdown: 5000,
      onLoadEvent: true,
      browser: [ 'animation-duration', '-webkit-animation-duration'],
      // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
      // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
      overlay : false,
      overlayClass : 'animsition-overlay-slide',
      overlayParentElement : 'body',
      transition: function(url){ window.location.href = url; }
    }
);




// WOW.js - Scroll-triggered Animation Library
var wow = new WOW(
  {
    boxClass:     'axetay',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
$('body').on('animsition.inStart', function(){
    wow.init();
});


// --------------------------
// Arrow Down Click
// --------------------------

var $this = $(this),
    ha = $(".p-home--heroimgbg .arrow");


function arrowDown() {
    ha.on("click", function() {
        var banner = $(this).parent().height()+50;
        $("html, body").animate({
            scrollTop: banner
        }, 450);
        return false;
    });
}
arrowDown(); // Initialize arrowDown on document ready



// --------------------------
// Logo Slider - Owl Carousel
// --------------------------
$('#c_logos .slide, .logo-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 2500,
    responsive: {
        0: {
            items: 3
        },
        600: {
            items: 4
        },
        1000: {
            items: 6
        }
    }
});


// --------------------------
// Testimonials - Owl Carousel
// --------------------------
$('#c_testimonials .slider').owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    nav: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 5000
});

// --------------------------
// .matchHeight() - Initialize Same Height Script : vendor/jquery.matchHeight-min.js
// --------------------------
$(".mh").matchHeight();

// ----------------------------
// Tabs
// ----------------------------
$('.tabs').tabslet();

// --------------------------
// Parallax
// --------------------------
$('.parallax').parallax();


// --------------------------
// Smart Sticky Header
// --------------------------
var nav = new Headroom(document.querySelector("header"), {
    
    classes: {
        initial: "initial",
        pinned: "fixed",
        unpinned: "unfixed"
    }
});
nav.init();