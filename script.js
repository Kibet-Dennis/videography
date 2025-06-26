// Tab Switching Function
function switchTab(evt, tabName) {
  // Hide all tab content
  const tabContents = document.querySelectorAll(".tab-content");
  tabContents.forEach(tab => tab.classList.remove("active"));

  // Remove 'active' from all tab buttons
  const tabButtons = document.querySelectorAll(".tab");
  tabButtons.forEach(btn => btn.classList.remove("active"));

  // Show the selected tab content and set button to active
  const selectedTab = document.getElementById(tabName);
  if (selectedTab) selectedTab.classList.add("active");

  evt.currentTarget.classList.add("active");
}

function toggleReadMore(button) {
  // Close all other expanded sections
  const allCards = document.querySelectorAll('.card');
  allCards.forEach(card => {
    if (card.contains(button)) return; // skip the one that was clicked
    const extraContent = card.querySelector('.extra-content');
    if (extraContent) extraContent.style.display = 'none';
    const btn = card.querySelector('.read-more-btn');
    if (btn) btn.textContent = 'Read More';
  });

  // Toggle the current one
  const moreText = button.previousElementSibling.querySelector('.extra-content');
  if (moreText) {
    const isVisible = moreText.style.display === 'block';
    moreText.style.display = isVisible ? 'none' : 'block';
    button.textContent = isVisible ? 'Read More' : 'Read Less';
  }
}


// Show Payment Popup
function showPopup(type) {
  document.getElementById(`popup-${type}`).style.display = "block";
}

// Close Payment Popup
function closePopup(type) {
  document.getElementById(`popup-${type}`).style.display = "none";
}

// Close popups when clicking outside
window.onclick = function(event) {
  const popups = document.querySelectorAll(".popup");
  popups.forEach(popup => {
    if (event.target === popup) {
      popup.style.display = "none";
    }
  });
};
