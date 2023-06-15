const slides = document.getElementsByClassName('swiper-slide');
const slidesLength = slides.length;
var el = document.getElementById('swiper-wrapper-ie');
var el2 = document.getElementById('swiper-ie');if ( window.isIE ) {
 document.documentElement.classList.add('ie');
el.style = null;
el2.style = null;
}if (slidesLength > 1 && !window.isIE) {
   var MySwiper = new Swiper('.swiper-container', {
       observer: true,  
       observeParents: true,
     
       speed: 1200,
       mousewheel: {releaseOnEdges: false},
       
       followFinger: false,
       touchReleaseOnEdges: true,
       longSwipes: false,
       parallax: true,
       pagination: {
           el: '.swiper-pagination',
           clickable: true,
           renderBullet: (index, className) => {
               const value = 'text' || '';
               return '<span class=' + className + '>' + '<span class="s-label">' + value + '</span></span>';
           }
       },
       on:{
       slideChange: (swiper) => {
           const {offsetTop} = swiper.el;
           window.pageYOffset !== offsetTop && window.scrollTo({
               top: offsetTop,
               behavior: 'smooth'
           });
       },
       slideChangeTransitionEnd: (swiper) => {
           const activeIndex = swiper.activeIndex;
           swiper.params.mousewheel.releaseOnEdges = activeIndex === 0 || (activeIndex === slidesLength-1);
       }
       }
   });
   }
