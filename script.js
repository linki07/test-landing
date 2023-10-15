const swiper = new Swiper('.swiper', {
  pagination: {
    clickable: true,
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    770: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    481: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
  },
});

const burgerMenu = document.querySelector('.burger-menu')
popup = document.querySelector('.menu-popup')
close = document.querySelector('.close-btn')

burgerMenu.addEventListener('click', function() {
  burgerMenu.style = 'transform: translateX(50px)';
  setTimeout(function() {
    popup.style = 'display: block;'
  }, 500)
});

close.addEventListener('click', function() {
  burgerMenu.style = 'transform: translateX(0px)';
  popup.style = 'display: none;'
})