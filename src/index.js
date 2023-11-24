import 'normalize.css';
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import './styles/main.scss';

var swiper = new Swiper('.swiper', {
    slidesPerView: 4,
    slidesPerGroup: 4,
    // configure Swiper to use modules
    modules: [Navigation, Pagination],
    breakpoints: {
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1
        },
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2
        },
        1000: {
            slidesPerView: 3,
            slidesPerGroup: 3
        }
    },
    direction: 'horizontal',
    loop: false,
    loopFillGroupWithBlank: false,

    // If we need pagination
    pagination: {
    el: '.swiper-pagination',
},

// Navigation arrows
// navigation: {
//     nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
// },

// And if we need scrollbar
scrollbar: {
    el: '.swiper-scrollbar',
},
});


