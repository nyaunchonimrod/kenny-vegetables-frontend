let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let autoSlideInterval;

function showSlide(index) {
  // Hide all slides
  slides.forEach(slide => {
    slide.classList.remove('active');
    slide.setAttribute('aria-hidden', 'true');
  });
  dots.forEach(dot => dot.classList.remove('active'));

  // Show current slide
  if (index >= slides.length) slideIndex = 0;
  if (index < 0) slideIndex = slides.length - 1;
  slides[slideIndex].classList.add('active');
  slides[slideIndex].setAttribute('aria-hidden', 'false');
  dots[slideIndex].classList.add('active');
}

function changeSlide(direction) {
  slideIndex += direction;
  showSlide(slideIndex);
  resetAutoSlide();
}

function currentSlide(index) {
  slideIndex = index - 1;
  showSlide(slideIndex);
  resetAutoSlide();
}

function autoSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

function startAutoSlide() {
  autoSlideInterval = setInterval(autoSlide, 4000); // 4 seconds
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  startAutoSlide();
}

// Initialize
showSlide(slideIndex);
startAutoSlide();

// Pause on hover
const container = document.querySelector('.slider-container');
container.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
container.addEventListener('mouseleave', startAutoSlide);

// Keyboard support
container.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') changeSlide(-1);
  if (e.key === 'ArrowRight') changeSlide(1);
});