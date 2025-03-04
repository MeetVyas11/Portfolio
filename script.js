// Mobile menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
const body = document.body;

mobileMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
navLinks.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  navLinks.classList.remove('active');
});

// Form submission handling
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for your message! I will get back to you soon.');
  this.reset();
});

// Scroll animations
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.animate__animated');
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    if (elementPosition < screenPosition) {
      element.classList.add('animate__fadeIn');
    }
  });
};

window.addEventListener('scroll', animateOnScroll);