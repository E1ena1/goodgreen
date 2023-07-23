import 'normalize.css';
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import './styles/main.scss';

const swiper = new Swiper('.swiper', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],
        direction: 'horizontal',
    loop: true,

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


