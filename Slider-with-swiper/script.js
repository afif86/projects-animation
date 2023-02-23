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
    clickable: true,
    draggable: true,
    clickableClass: 	'swiper-pagination-clickable',
  },

  on: {
    keyPress: function (e) {
      
    // to run just when it is active otherwise it will pass the navigation 
      const elem = document.querySelector('.checking');
      console.log('it is focused')
      if (elem === document.activeElement) {
        
// it will check if the other slides has button or not
        
      console.log(e.realIndex)
      if(e.realIndex < e.slides.length ) {
        e.slides.forEach((slide, index) => {
          console.log(index)
          if (slide.dataset.link) {
            console.log(slide.dataset.link)
            this.slideTo(index)
          }
          });
       }

      } 
    },

  }

});





  






