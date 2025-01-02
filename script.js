function toggleMenu() {
    const nav = document.querySelector("nav");
    nav.classList.toggle("open");
  }

  document.querySelectorAll('nav a').forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add('active');
    }
  });
  

  const carousel = document.querySelector('.carousel');
  const carouselItems = Array.from(carousel.children);
  
  // Clone the items to ensure an infinite loop effect
  carouselItems.forEach((item) => {
      const clone = item.cloneNode(true);
      carousel.appendChild(clone);
  });
  
  let position = 0;
  
  function moveCarousel() {
      position -= 1; // Adjust this value for speed
      if (Math.abs(position) >= carouselItems[0].offsetWidth + 32) { // 32 is the gap between items
          position = 0;
          carousel.appendChild(carousel.firstElementChild); // Move first item to the end
      }
      carousel.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(moveCarousel);
  }
  
  moveCarousel();
  