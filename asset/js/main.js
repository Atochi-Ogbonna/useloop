document.addEventListener('DOMContentLoaded', () => {
  // Carousel logic
  // const track = document.querySelector('.carousel-track');
  // const prevButton = document.querySelector('.prev-btn');
  // const nextButton = document.querySelector('.next-btn');
  // const items = document.querySelectorAll('.carousel-item');
  // let currentIndex = 0;

  // Function to update carousel position
  // const updateCarouselPosition = () => {
  //   const itemWidth = items[0].offsetWidth; // Width of one item
  //   track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  // };

  // Next Button Click
  // nextButton.addEventListener('click', () => {
  //   if (currentIndex < items.length - 4) { // Adjust '4' to the number of visible items
  //     currentIndex++;
  //     updateCarouselPosition();
  //   }
  // });

  // Previous Button Click
  // prevButton.addEventListener('click', () => {
  //   if (currentIndex > 0) {
  //     currentIndex--;
  //     updateCarouselPosition();
  //   }
  // });

  // Add 'active' class on button click
  // const buttons = document.querySelectorAll('.carousel-controls button');
  // buttons.forEach(button => {
  //   button.addEventListener('click', (event) => {
      // Remove active class from all buttons
      // buttons.forEach(btn => btn.classList.remove('active'));

      // Add active class to the clicked button
  //     event.target.classList.add('active');
  //   });
  // });



  //Nav Bar Scroll Logic


  const navbar = document.querySelector('.navbar');
  let lastScrollY = window.scrollY;
  
  window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
  
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
          navbar.classList.add('hide-navbar'); // Add a class to hide navbar
      } else {
          navbar.classList.remove('hide-navbar'); // Remove the class to show navbar
      }
  
      lastScrollY = currentScrollY;
  });
  
  // Ensure the navbar shows when scrolling stops after 1 second
  let isScrolling;
  window.addEventListener('scroll', () => {
      clearTimeout(isScrolling);
      isScrolling = setTimeout(() => {
          navbar.classList.remove('hide-navbar');
      }, 1000);
  });
  



  // Hamburger menu logic
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('open');
  });
});



  // Video play section logic

const video = document.querySelector('.video-element');
const playButton = document.querySelector('.play-button');

playButton.addEventListener('mouseenter', () => {
  video.pause();
});

playButton.addEventListener('mouseleave', () => {
  video.play();
});






// Start shop section


const prevBtn = document.querySelector('.previous');
const nextBtn = document.querySelector('.next');
const shopSlides = document.querySelector('.shop-slide-container');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;
const updateDots = () => {
  dots.forEach((dot, index) => {
    dot.classList.toggle('active-dot', index === currentIndex);
  });
};

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % dots.length;
  shopSlides.scrollLeft += shopSlides.offsetWidth;
  updateDots();
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + dots.length) % dots.length;
  shopSlides.scrollLeft -= shopSlides.offsetWidth;
  updateDots();
});


// Close shop section




// Testimonial section



const testimonialsContainer = document.querySelector(".testimonials-cards");
const prevTestimonialBtn = document.querySelector(".testimonials-prev-btn");
const nextTestimonialBtn = document.querySelector(".testimonials-next-btn");

let testimonialIndex = 0;
const totalTestimonialItems = 7;
const itemsVisibleAtOnce = 3; // Number of items fully visible at once
const testimonialItemWidth = 316; // Adjust this to match the actual width with margin/gap

function updateTestimonialCarousel() {
    const maxIndex = totalTestimonialItems - itemsVisibleAtOnce;
    if (testimonialIndex > maxIndex) testimonialIndex = maxIndex;
    testimonialsContainer.style.transform = `translateX(-${testimonialIndex * testimonialItemWidth}px)`;
}

nextTestimonialBtn.addEventListener("click", () => {
    if (testimonialIndex < totalTestimonialItems - itemsVisibleAtOnce) {
        testimonialIndex++;
    }
    updateTestimonialCarousel();
});

prevTestimonialBtn.addEventListener("click", () => {
    if (testimonialIndex > 0) {
        testimonialIndex--;
    }
    updateTestimonialCarousel();
});


// Close Testimonial section