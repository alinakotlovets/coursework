const swiper = new Swiper('.swiper-container', {
    slidesPerView: 4, // Кількість видимих слайдів одночасно
    spaceBetween: 30, // Проміжок між слайдами (в пікселях)
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true, // Безкінечний цикл
});
