function toggleReadMore(btn) {
  const card = btn.closest('.card');
  const allCards = document.querySelectorAll('.card');

  // Collapse other cards
  allCards.forEach(c => {
    if (c !== card) {
      c.classList.remove('expanded');
      const otherBtn = c.querySelector('.read-more-btn');
      if (otherBtn) otherBtn.textContent = "Read More";
    }
  });

  // Toggle current card
  card.classList.toggle('expanded');
  btn.textContent = card.classList.contains('expanded') ? "Read Less" : "Read More";
}

function switchTab(event, tabId) {
  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

  event.target.classList.add('active');
  document.getElementById(tabId).classList.add('active');
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
function showPopup(id) {
  document.getElementById(`popup-${id}`).style.display = 'flex';
}

function closePopup(id) {
  document.getElementById(`popup-${id}`).style.display = 'none';
}
// Set current year in footer
document.addEventListener("DOMContentLoaded", function () {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
const switchBtn = document.getElementById("themeSwitch");

switchBtn.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");

  // Save preference in localStorage
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// Load saved theme on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    document.getElementById("themeSwitch").checked = true;
  }
});
// Load preference
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    document.getElementById("themeSwitch").checked = true;
  }
});
