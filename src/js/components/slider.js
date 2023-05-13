import Swiper, { Navigation, Pagination, Parallax, Autoplay, Thumbs } from 'swiper';

// main-block__slider
if (document.querySelector('.main-block__slider')) {
  const swiper = new Swiper('.main-block__slider', {
    modules: [Pagination, Parallax, Autoplay],
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    observer: true,
    observeParents: true,
    parallax: true,
    fade: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    slideClass: 'main-block__slide',
    wrapperClass: 'main-block__swiper',

    pagination: {
      el: '.controll-main-block__dotts',
      clickable: true,
    },

    on: {
      init: function (swiper) {
        const allSlides = document.querySelector('.fraction-controll__all');
        const allSlidesItems = document.querySelectorAll('.slide-main-block:not(.swiper-slide-duplicate)');
        allSlides.innerHTML = allSlidesItems.length < 10 ? `0${allSlidesItems.length}` : swiper.slides.length;
      },
      slideChange: function (swiper) {
        const currentSlides = document.querySelector('.fraction-controll__current');
        currentSlides.innerHTML = swiper.realIndex + 1 < 10 ? `0${swiper.realIndex + 1}` : swiper.realIndex + 1;
        console.log(swiper);
      },
    },
  });

  swiper.on('swiper-slide', function () {
    console.log('Слайд переключён');
  });
}

// products-slider
if (document.querySelector('.products-slider__slider')) {
  new Swiper('.products-slider__slider', {
    modules: [Navigation, Pagination, Parallax, Autoplay],
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    watchOverflow: true,
    slidesPerView: 4,
    spaceBetween: 30,
    observer: true,
    observeParents: true,

    slideClass: 'products-slider__slide',
    wrapperClass: 'products-slider__swiper',

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1370: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },

    pagination: {
      el: '.products-slider__dotts',
      clickable: true,
      dynamicBullets: true,
    },
  });
}

// products-new
if (document.querySelector('.products-new__slider')) {
  new Swiper('.products-new__slider', {
    modules: [Navigation, Pagination, Parallax, Autoplay],
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    watchOverflow: true,
    slidesPerView: 3,
    spaceBetween: 30,
    observer: true,
    observeParents: true,
    slideClass: 'products-new__slide',
    wrapperClass: 'products-new__swiper',

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1330: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    pagination: {
      el: '.products-new__dotts',
      clickable: true,
      dynamicBullets: true,
    },
  });
}

// products-blocks
if (document.querySelector('.images-product-block')) {
  const thumbsSwiper = new Swiper('.thumbs-images', {
    modules: [Navigation, Pagination, Parallax, Autoplay, Thumbs],

    watchOverflow: true,
    slidesPerView: 4,
    spaceBetween: 16,
    observer: true,
    observeParents: true,
    parallax: true,
    speed: 800,

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      800: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1370: {
        slidesPerView: 4,
        spaceBetween: 16,
      },
    },
    slideClass: 'thumbs-images__slide-ibg',
    wrapperClass: 'thumbs-images__swiper',
  });

  new Swiper('.images-product-block-slider__slider', {
    modules: [Navigation, Pagination, Parallax, Autoplay, Thumbs],
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    thumbs: {
      swiper: thumbsSwiper,
    },
    watchOverflow: true,
    slidesPerView: 1,
    spaceBetween: 30,
    observer: true,
    observeParents: true,
    centeredSlides: true,

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 1,
      },
      992: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      1370: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
    },
    slideClass: 'images-product-slider__slide-ibg',
    wrapperClass: 'images-product-block__swiper',
  });
}

console.log('On slider');
