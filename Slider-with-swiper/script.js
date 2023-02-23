const swiper = new Swiper('.swiper-container', {
  slideToClickedSlide: true,
  slidePerView: "auto",
  effect: 'fade',
    // different type of effect for swiping:
  // effect: 'Coverflow',
  // coverflowEffect: {
  //   rotate: 150,
  //   slideShadows: false,
  //   depth: 100,
  // },
  // effect: 'Creative',
  // effect: 'cube',
  // effect: 'flip',


  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
    dragSize: 100,
  },
  mousewheel: {
    invert: false,
    releaseOnEdges: true,
    // to release the mouse and Continue when it showed all the sliders .
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
    pageUpDown: true,
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    bulletElement: 'span',
    bulletClass: 'swiper-pagination-bullet',
  },

  on: {
    keyPress: function (e) {
      // keyboard navigation
      console.log(e, e.slides.length);
      e.slides.length

      console.log(e.realIndex)
      if(e.realIndex < e.slides.length ) {
        e.slides.forEach((slide, index) => {
          if (slide.dataset.link) { 
            this.slideTo(index+1)
          }
          });
      }
    },

  }

});



  






