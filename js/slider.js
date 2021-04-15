    var quoteThumbs = new Swiper('.quote-thumbs', {
      allowSlideNext: false,
      allowSlidePrev: false,
      slidesPerView: 8,
      loopedSlides: 8, //looped slides should be the same
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });

    var galleryTop = new Swiper('.quotesSlides', {
      loop:true,
      slidesPerView: 1,
      loopedSlides: 8,
   
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },

      thumbs: {
        swiper: quoteThumbs,
      },
    });