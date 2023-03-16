document.addEventListener("keydown", (e) => {
  NextToPagination(e);
});

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

});


const checkObject = {
  indexOfSlidesWithLink: [],
};

swiper.on("reachEnd", () => {

})


swiper.slides.forEach((slide,i) => {
  if (slide.dataset.link) {
    checkObject.indexOfSlidesWithLink.push(i);
  }
  
});


const buttonTagInsideSlide = ".checking"

const NextToPagination = (e) => {
  function slideChanger(dir= "forward") {
    function focusOnLink(i) { 
        document.activeElement.blur()
        swiper.slides[i].querySelector(buttonTagInsideSlide).focus()
        if (document.activeElement !== swiper.slides[swiper.activeIndex].querySelector(buttonTagInsideSlide)){
          focusOnLink(i)

        }

      return true
    }


    const changeLogic = (i) => {
      swiper.slideTo(i);
      setTimeout(() => {
        if (
          document.activeElement !==
          swiper.slides[swiper.activeIndex].querySelector(buttonTagInsideSlide)
        ) {
      
          focusOnLink(swiper.activeIndex);
        }
      }, 400);
      return true;
    }

    if(dir==="backward"){
      for(let i = swiper.activeIndex; i >= 0; i--){
        if(i-1 < -1){
          return true;
        }
        if(checkObject.indexOfSlidesWithLink.includes(i-1)){
          changeLogic(i-1);
          return true;
        }
      }
      return;

    } if (dir === "forward") {
      for (let i = swiper.activeIndex; i < swiper.slides.length; i++) {
        if (checkObject.indexOfSlidesWithLink.includes(i+1)) {
          changeLogic(i+1);
          return true;
        }
      }
      return true;
    }
      

  }

  if (swiper.pagination.bullets.includes(document.activeElement) || Array.from(document.querySelectorAll(buttonTagInsideSlide)).includes(document.activeElement)) {

      if (e.shiftKey && e.code === "Tab") {
        slideChanger("backward");
      } else if (e.code === "Tab") {       
        slideChanger();
    
      }
  }
};





  






