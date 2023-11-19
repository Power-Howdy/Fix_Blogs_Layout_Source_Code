// banner tab js start
function openTab(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;
  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
// banner tab js end



// property slider js start
$(document).ready(function () {
  $('.property_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true,
    dots: false,
    pauseOnHover: false,
    touchMove: true,
    prevArrow:'<button class="slick-prev"> <i class="fas fa-arrow-left"></i> </button>',
    nextArrow:'<button class="slick-next"> <i class="fas fa-arrow-right"></i> </button>',
    responsive: [{
      breakpoint: 1366,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    },
     {
      breakpoint: 300,
      settings: {
        slidesToShow: 1
      }
    }]
  });
});
// property slider js end


// advantage slider js start
$(document).ready(function () {
  $('.advantage_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true,
    dots: false,
    pauseOnHover: false,
    touchMove: true,
    prevArrow:'<button class="slick-prev"> <i class="fas fa-arrow-left"></i> </button>',
    nextArrow:'<button class="slick-next"> <i class="fas fa-arrow-right"></i> </button>',
    responsive: [{
      breakpoint: 1366,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    },
     {
      breakpoint: 300,
      settings: {
        slidesToShow: 1
      }
    }]
  });
});
// advantage slider js end

// news slider js start
$(document).ready(function () {
  $('.news_slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true,
    dots: false,
    pauseOnHover: false,
    touchMove: true,
    prevArrow:'<button class="slick-prev"> <i class="fas fa-arrow-left"></i> </button>',
    nextArrow:'<button class="slick-next"> <i class="fas fa-arrow-right"></i> </button>',
    responsive: [{
      breakpoint: 1366,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    },
     {
      breakpoint: 300,
      settings: {
        slidesToShow: 1
      }
    }]
  });
});
// news slider js end


// journey slider js start
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("journey_slide");
  var dots = document.getElementsByClassName("slide_indicator");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
// journey slider js end