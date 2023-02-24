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
  },

  on: {
    keyPress: function (e) {
      
      // to run just when it is active otherwise it will pass the navigation 
      const elems = Array.from(document.querySelectorAll('.checking'))
      if (elems.indexOf(document.activeElement) > -1) {

        // it will check if the other slides has button or not        
        if (e.realIndex < e.slides.length) {
          for (let i = e.realIndex; i < e.slides.length; i++){
            if (i + 1 >= e.slides.length) {
              break;
            } else {
                if (e.slides[i + 1].dataset.link) { 
                  this.slideTo(i+1);
                  return true;
                }
              }
            
          }
        }

       
      }

    }
  }

});





  






