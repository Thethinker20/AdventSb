$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('.nav').addClass('affix');
        console.log("OK");
    } else {
        $('.nav').removeClass('affix');
    }
});

$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});

const modal = document.querySelector('#my-modalR');
const modalBtn = document.querySelector('#modal-btnR');
const closeBtn = document.querySelector('.closeBtnR');


// Events
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
  modal.style.display = 'block';
}

// Close
function closeModal() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}


var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    autoplay:{
      delay:2500,
      disableOnInteraction: true,
    },
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows : true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });

  ScrollOut({
    targets: '.bon-titlte, .mvText, .regla-box2VT, .regla-box2VT1, .KOPtion-box, .KOPtion-box1, .KOPtion-box2, .aktividadK-title, .aktividadK-text',
    once: true
  });


  (function slider() {
    var $slides = document.querySelectorAll('.slide');
    var $controls = document.querySelectorAll('.slider__control');
    var numOfSlides = $slides.length;
    var slidingAT = 1300; // sync this with scss variable
    var slidingBlocked = false;
  
    [].slice.call($slides).forEach(function($el, index) {
      var i = index + 1;
      $el.classList.add('slide-' + i);
      $el.dataset.slide = i;
    });
  
    [].slice.call($controls).forEach(function($el) {
      $el.addEventListener('click', controlClickHandler);
    });
  
    function controlClickHandler() {
      if (slidingBlocked) return;
      slidingBlocked = true;
  
      var $control = this;
      var isRight = $control.classList.contains('m--right');
      var $curActive = document.querySelector('.slide.s--active');
      var index = +$curActive.dataset.slide;
      (isRight) ? index++ : index--;
      if (index < 1) index = numOfSlides;
      if (index > numOfSlides) index = 1;
      var $newActive = document.querySelector('.slide-' + index);
  
      $control.classList.add('a--rotation');
      $curActive.classList.remove('s--active', 's--active-prev');
      document.querySelector('.slide.s--prev').classList.remove('s--prev');
      
      $newActive.classList.add('s--active');
      if (!isRight) $newActive.classList.add('s--active-prev');
      
  
      var prevIndex = index - 1;
      if (prevIndex < 1) prevIndex = numOfSlides;
  
      document.querySelector('.slide-' + prevIndex).classList.add('s--prev');
      setTimeout(function() {
        $control.classList.remove('a--rotation');
        slidingBlocked = false;
      }, slidingAT*0.75);
    };
  }());
  
  jQuery(document).ready(function($) {

    //Count nr. of square classes
    var countSquare = $('.square').length;
  
    //For each Square found add BG image
    for (i = 0; i < countSquare; i++) {
      var firstImage = $('.square').eq([i]);
      var secondImage = $('.square2').eq([i]);
  
      var getImage = firstImage.attr('data-image');
      var getImage2 = secondImage.attr('data-image');
  
      firstImage.css('background-image', 'url(' + getImage + ')');
      secondImage.css('background-image', 'url(' + getImage2 + ')');
    }
  
  });