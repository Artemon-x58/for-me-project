// import Swiper from 'swiper';
// // import Swiper styles
// import 'swiper/css';

const swiper = new Swiper('.swiper-container', {
    // Настройки слайдера
    // slidesPerView: 1,
    spaceBetween: 20,
    // loop: true,
    spaceBetween: 10,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    grabCursor: true,
    slidesPerView: 1,
    // spaceBetween: 30,
  });

  