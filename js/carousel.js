document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    const indicatorsContainer = document.querySelector('.carousel-indicators');
    let currentSlide = 0;
    let slideInterval;

    // Create indicators -------------------------------------------------------------------
    slides.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.classList.add('carousel-indicator');
        if (index === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => goToSlide(index));
        indicatorsContainer.appendChild(indicator);
    });

    const indicators = document.querySelectorAll('.carousel-indicator');

    function goToSlide(n) {
        slides[currentSlide].classList.remove('active');
        indicators[currentSlide].classList.remove('active');
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        indicators[currentSlide].classList.add('active');
    }

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    function prevSlide() {
        goToSlide(currentSlide - 1);
    }

    function startAutoRotation() {
        slideInterval = setInterval(nextSlide, 4000);
    }

    function stopAutoRotation() {
        clearInterval(slideInterval);
    }

    // Event listeners --------------------------------------------------
    prevButton.addEventListener('click', () => {
        stopAutoRotation();
        prevSlide();
        startAutoRotation();
    });

    nextButton.addEventListener('click', () => {
        stopAutoRotation();
        nextSlide();
        startAutoRotation();
    });

    // Start auto-rotation ---------------------------------------------- 
    startAutoRotation();

    // Pause auto-rotation when hovering over carousel --------------------------------------------------
    const carousel = document.querySelector('.video-carousel');
    carousel.addEventListener('mouseenter', stopAutoRotation);
    carousel.addEventListener('mouseleave', startAutoRotation);
}); 