var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
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