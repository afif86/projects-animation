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
  
  observer: true, 
  observeParents: true,
  followFinger: false,
  touchReleaseOnEdges: true,
  longSwipes: false,
  parallax: true,

  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
    dragSize: 100,
  },
  mousewheel: {
    invert: false,
    releaseOnEdges: false,
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

  on:{
       slideChange: (swiper) => {
           const {offsetTop} = swiper.el;
           window.scrollY !== offsetTop && window.scrollTo({
               top: offsetTop,
               behavior: 'smooth',
           });
    },
    afterInit: (swiper) => {
      if (swiper.slides.length === 1) {
        console.log("afterinit")
          swiper.params.mousewheel.releaseOnEdges = true
      }
    },
       slideChangeTransitionEnd: (swiper) => {
         const activeIndex = swiper.activeIndex;
           swiper.params.mousewheel.releaseOnEdges = activeIndex === 0  || activeIndex === swiper.slides.length-1 ;
       }
       }

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


// for typing part
  
function typingAnimation() {
  const spanElement = document.querySelector('span#str');
  var string = spanElement.innerText;
  const h = document.getElementById('typing').clientHeight; 
  document.getElementById('typing').style.visibility = 'visible'; 
  document.getElementById('typing').style.opacity = '1';  

  spanElement.innerText = ""
  document.getElementById("typing").style.height = h + 'px';
  // console.log(document.getElementById("typing").style.height)
  var str = string.split("");


  function animate() {
    str.length > 0 ? spanElement.innerHTML += str.shift() : clearTimeout(running); 
    var running = setTimeout(animate, 50);
  };

  setTimeout(animate, 2000)
}
setTimeout(typingAnimation, 10);



  






