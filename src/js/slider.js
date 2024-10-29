var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 32,
        breakpoints: {
            1200: {
                slidesPerView: 4,
                spaceBetween: 32
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            420: {
                slidesPerView: 4,
                spaceBetween: 16
            }
        },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".mySwiperSkill", {
    slidesPerView: 3,
    spaceBetween: 32,
    breakpoints: {
        1200: {
            slidesPerView: 3,
            spaceBetween: 32
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20
        }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});