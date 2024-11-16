// JavaScript for handling cuisine filters
function filterCuisines(cuisineType) {
    // Get all cuisine cards
    const allCards = document.querySelectorAll('.cuisine-card');
    
    if (cuisineType === 'all') {
      // Show all cards if 'All' is selected
      allCards.forEach(card => {
        card.style.display = 'block';
      });
    } else {
      // Show only the selected type of cuisine
      allCards.forEach(card => {
        if (card.classList.contains(cuisineType)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    }
  }
  