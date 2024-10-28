window.onload = function() {
    const slidesContainer = document.querySelector(".course-slideshow-list");
    const slides = Array.from(document.querySelectorAll(".course-slideshow-list-element"));
    let currentIndex = 0;
    const visibleSlidesCount = 4;

    function updateSlides() {
        slides.forEach((slide, index) => {
            if (index >= currentIndex && index < currentIndex + visibleSlidesCount) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });

        const offset = currentIndex * slides[0].offsetWidth;
        slidesContainer.style.transform = `translateX(-${offset}px)`;
    }

    updateSlides();

    document.querySelector(".course-slideshow-next").addEventListener("click", () => {
        if (currentIndex + visibleSlidesCount < slides.length) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlides();
    });

    document.querySelector(".course-slideshow-prev").addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = slides.length - visibleSlidesCount;
        }
        updateSlides();
    });
};
