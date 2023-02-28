
const swiper = new Swiper('.swiper', {
  slideToClickedSlide: true,
  slidePerView: "auto",
  slidesPerView: 1,
  effect: 'cube',
  direction: 'horizontal',
  
  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    bulletElement: 'span',
    bulletClass: 'swiper-pagination-bullet',
    clickable: true,
  },

  mousewheel: {
    invert: false,
    releaseOnEdges: true,
  },

});


