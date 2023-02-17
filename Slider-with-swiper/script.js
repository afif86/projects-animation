const swiper = new Swiper('.swiper-container', {
  slideToClickedSlide: true,
  slidePerView: "auto",
  effect: 'fade',

  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
    dragSize: 100,
  },
  mousewheel: {
    invert: false,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    bulletElement: 'span',
    bulletClass: 'swiper-pagination-bullet',
  },

});





