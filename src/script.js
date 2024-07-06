let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

showSlide(slideIndex);

function moveSlide(n) {
    showSlide(slideIndex += n);
}

function currentSlide(n) {
    showSlide(slideIndex = n - 1);
}

function showSlide(n) {
    if (n >= totalSlides) { slideIndex = 0; }
    if (n < 0) { slideIndex = totalSlides - 1; }

    const offset = -slideIndex * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;

    updateDots();
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.className = dot.className.replace(' active', '');
        if (index === slideIndex) {
            dot.className += ' active';
        }
    });
}
