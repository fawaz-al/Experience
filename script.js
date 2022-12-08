// var swiper = new Swiper('.swiper-container', {
//     effect: 'coverflow',
//     grabCursor: true,
//     centerSlides: true,
//     slidesPerview: 'auto',
//     coverflowEffect: {
//         rotate: 1,
//         stretch: 0,
//         depth: 100,
//         modifier: 1,
//         slideShadows: true,
//     },
//     pagination: {
//         el: '.swiper-pagination',
//     },
//     loop: true,
//     autoplay: {
//         delay: 3000
//     }
// });


var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 3000
    },
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });