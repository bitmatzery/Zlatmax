// Слайдер Swiper
import Swiper, { Navigation, Pagination, Parallax, Autoplay, Thumbs } from 'swiper';

// main-block__slider
if (document.querySelector('.main-block__slider')) {
  const swiper = new Swiper('.main-block__slider', {
    modules: [Pagination, Parallax, Autoplay],
    slidesPerView: 1, //'auto',
    spaceBetween: 50,
    // direction: 'vertical',
    loop: true,
    observer: true,
    observeParents: true,
    parallax: true,
    // speed: 800,
    // dots: true,
    // arrows: false,
    fade: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    // autoHeight: true,
    slideClass: 'main-block__slide',
    wrapperClass: 'main-block__swiper',

    // If we need pagination
    pagination: {
      el: '.controll-main-block__dotts',
      clickable: true,
    },

    on: {
      init: function (swiper) {
        const allSlides = document.querySelector('.fraction-controll__all');
        // с вычетом дубликатов слайдов при вкл loop способ получения кол-ва слайдов для фракции
        const allSlidesItems = document.querySelectorAll('.slide-main-block:not(.swiper-slide-duplicate)');
        allSlides.innerHTML = allSlidesItems.length < 10 ? `0${allSlidesItems.length}` : swiper.slides.length;
        // обычный способ получения кол-ва слайдов для фракции
        //const allSlides = document.querySelector('.fraction-controll__all');
        //allSlides.innerHTML = swiper.slides.length < 10 ? `0${swiper.slides.length}` : swiper.slides.length;
      },
      slideChange: function (swiper) {
        const currentSlides = document.querySelector('.fraction-controll__current');
        // с вычетом дубликатов слайдов при вкл loop способ получения кол-ва слайдов для фракции
        currentSlides.innerHTML = swiper.realIndex + 1 < 10 ? `0${swiper.realIndex + 1}` : swiper.realIndex + 1;
        // обычный способ получения кол-ва слайдов для фракции
        //currentSlides.innerHTML = swiper.activeIndex + 1 < 10 ? `0${swiper.activeIndex + 1}` : swiper.activeIndex + 1;
        console.log(swiper);
      },
    },
  });

  swiper.on('swiper-slide', function () {
    console.log('Слайд переключён');
  });
}

console.log('On slider');
