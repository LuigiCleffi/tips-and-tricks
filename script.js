// Loading Screen
window.addEventListener('load', () => {
  document.querySelector('.loader').classList.add('hidden');
});

// Navigation and Scroll
const navDots = document.querySelectorAll('.nav-dot');
const sections = document.querySelectorAll('.parallax-container, .product-section');
const layers = document.querySelectorAll('.parallax-layer');
const productSection = document.querySelector('.product-section');
const products = document.querySelectorAll('.product-item');
const productInfo = document.querySelector('.product-info');

window.addEventListener('scroll', () => {
  // Navigation Dots Update
  const currentScroll = window.scrollY;
  const windowHeight = window.innerHeight;

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (currentScroll >= sectionTop - windowHeight / 2 &&
      currentScroll < sectionTop + sectionHeight - windowHeight / 2) {
      navDots.forEach(dot => dot.classList.remove('active'));
      navDots[index].classList.add('active');
    }
  });

  // Scroll Indicator Visibility
  const scrollIndicator = document.querySelector('.scroll-indicator');
  scrollIndicator.style.opacity = currentScroll > 100 ? '0' : '0.8';

  // Parallax Effect
  layers.forEach(layer => {
    const depth = parseFloat(getComputedStyle(layer).transform.split(',')[14] || -3);
    const movement = currentScroll * (depth / 10);
    layer.style.transform = `translateY(${movement}px) translateZ(${depth}px) scale(${Math.abs(depth) + 1})`;
  });

  // Product Animation
  const rect = productSection.getBoundingClientRect();
  const sectionTop = rect.top;

  if (sectionTop < windowHeight && sectionTop > -rect.height) {
    const progress = Math.max(0, Math.min(1, 1 - (sectionTop / windowHeight)));

    products.forEach(product => {
      if (product.classList.contains('can-left')) {
        product.style.transform = `
                        translate(${progress * 70}%, -50%) 
                        rotateY(${45 - progress * 45}deg) 
                        translateZ(${-500 + progress * 300}px)
                    `;
      } else if (product.classList.contains('can-right')) {
        product.style.transform = `
                        translate(${-progress * 70}%, -50%) 
                        rotateY(${-45 + progress * 45}deg) 
                        translateZ(${-500 + progress * 300}px)
                    `;
      } else if (product.classList.contains('can-center')) {
        product.style.transform = `
                        translate(-50%, -50%) 
                        translateZ(${-800 + progress * 600}px) 
                        scale(${0.8 + progress * 0.4})
                    `;
      }
    });

    productInfo.classList.add('visible');
  }
});

// Smooth Scroll for Navigation Dots
navDots.forEach(dot => {
  dot.addEventListener('click', () => {
    const targetSection = document.querySelector(`.${dot.dataset.section}-section`);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});