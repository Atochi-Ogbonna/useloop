document.addEventListener('DOMContentLoaded', () => {
  // Carousel logic
  const track = document.querySelector('.carousel-track');
  const prevButton = document.querySelector('.prev-btn');
  const nextButton = document.querySelector('.next-btn');
  const items = document.querySelectorAll('.carousel-item');
  let currentIndex = 0;

  // Function to update carousel position
  const updateCarouselPosition = () => {
    const itemWidth = items[0].offsetWidth; // Width of one item
    track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  };

  // Next Button Click
  nextButton.addEventListener('click', () => {
    if (currentIndex < items.length - 4) { // Adjust '4' to the number of visible items
      currentIndex++;
      updateCarouselPosition();
    }
  });

  // Previous Button Click
  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarouselPosition();
    }
  });

  // Add 'active' class on button click
  const buttons = document.querySelectorAll('.carousel-controls button');
  buttons.forEach(button => {
    button.addEventListener('click', (event) => {
      // Remove active class from all buttons
      buttons.forEach(btn => btn.classList.remove('active'));

      // Add active class to the clicked button
      event.target.classList.add('active');
    });
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


