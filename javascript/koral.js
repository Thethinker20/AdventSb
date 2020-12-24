$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('.navMHZ').addClass('affix');
        console.log("OK");
    } else {
        $('.navMHZ').removeClass('affix');
    }
});

$('.navMHZTrigger').click(function () {
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


  var slideIndex = 0;
  showSlides();
  
  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
     dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 8000); // Change image every 2 seconds
  }