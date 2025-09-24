let lastScrollY = window.scrollY;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY) {
    
    navbar.style.top = "-80px";  
  } else {
    
    navbar.style.top = "0";
  }
  lastScrollY = window.scrollY;
});

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let autoSlideInterval;

function showSlide(index) {

  slides.forEach(slide => {
    slide.classList.remove('active');
    slide.setAttribute('aria-hidden', 'true');
  });
  dots.forEach(dot => dot.classList.remove('active'));


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


showSlide(slideIndex);
startAutoSlide();


const container = document.querySelector('.slider-container');
container.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
container.addEventListener('mouseleave', startAutoSlide);


container.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') changeSlide(-1);
  if (e.key === 'ArrowRight') changeSlide(1);
});