// Select elements
const teamMembers = document.querySelector('.team-members');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

// Calculate card width dynamically, including gap
const cardWidth = teamMembers.querySelector('.team-david').offsetWidth + 16; // Adjust gap if needed
let scrollPosition = 0;

// Function to update arrow states
function updateArrowStates() {
    leftArrow.disabled = scrollPosition <= 0;
    rightArrow.disabled =
        scrollPosition >= teamMembers.scrollWidth - teamMembers.offsetWidth;
}

// Event listener for the right arrow
rightArrow.addEventListener('click', () => {
    // Scroll to the right by one card width
    scrollPosition = Math.min(
        scrollPosition + cardWidth,
        teamMembers.scrollWidth - teamMembers.offsetWidth
    );
    teamMembers.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
    });
    updateArrowStates();
});

// Event listener for the left arrow
leftArrow.addEventListener('click', () => {
    // Scroll to the left by one card width
    scrollPosition = Math.max(scrollPosition - cardWidth, 0);
    teamMembers.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
    });
    updateArrowStates();
});

// Initialize arrow states on load
updateArrowStates();





// WORKS PAGE


 // JavaScript for filtering items
 const tabs = document.querySelectorAll('.tab');
 const items = document.querySelectorAll('.portfolio-item');

 tabs.forEach(tab => {
   tab.addEventListener('click', () => {
     // Remove active class from all tabs
     tabs.forEach(tab => tab.classList.remove('active'));
     tab.classList.add('active');

     // Get the category to filter
     const category = tab.getAttribute('data-category');

     // Show/Hide items based on category
     items.forEach(item => {
       const itemCategory = item.getAttribute('data-category');
       if (category === 'all' || itemCategory === category) {
         item.style.display = 'block'; // Show the item
       } else {
         item.style.display = 'none'; // Hide the item
       }
     });
   });
 });

 // Trigger click on the "All" tab to display initial items
 document.querySelector('.tab.active').click();