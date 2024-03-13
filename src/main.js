import Swiper from 'swiper/bundle';

import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-2',
    prevEl: '.swiper-button-1',
  },
});
