// THEME TOGGLE
const themeSwitch = document.getElementById('themeSwitch');

// Load dark mode from storage
if (localStorage.getItem('dark-mode') === 'true') {
  document.body.classList.add('dark-mode');
  themeSwitch.checked = true;
}

themeSwitch.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));
});

// TAB SWITCHING
function switchTab(evt, tabName) {
  const tabs = document.getElementsByClassName('tab-content');
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove('active');
  }

  const tabButtons = document.getElementsByClassName('tab');
  for (let i = 0; i < tabButtons.length; i++) {
    tabButtons[i].classList.remove('active');
  }

  document.getElementById(tabName).classList.add('active');
  evt.currentTarget.classList.add('active');
}

// READ MORE BUTTONS
function toggleReadMore(btn) {
  // Close all open sections first
  document.querySelectorAll('.more-text.show').forEach(section => {
    section.classList.remove('show');
    const readMoreBtn = section.parentElement.querySelector('.read-more-btn');
    if (readMoreBtn) readMoreBtn.textContent = 'Read More';
  });

  const textContainer = btn.previousElementSibling;

  // Open this one if it wasn’t already open
  if (!textContainer.classList.contains('show')) {
    textContainer.classList.add('show');
    btn.textContent = 'Read Less';
  }
}

// Click anywhere to close read-more sections
document.addEventListener('click', function (event) {
  if (!event.target.closest('.card')) {
    document.querySelectorAll('.more-text.show').forEach(section => {
      section.classList.remove('show');
      const readMoreBtn = section.parentElement.querySelector('.read-more-btn');
      if (readMoreBtn) readMoreBtn.textContent = 'Read More';
    });
  }
});

// POPUPS
function showPopup(method) {
  const popup = document.getElementById(`popup-${method}`);
  
  // Remove any old color classes
  popup.classList.remove('popup-mpesa', 'popup-paypal', 'popup-bank');
  
  // Add new color class
  popup.classList.add(`popup-${method}`);
  
  popup.style.display = 'block';
}

function closePopup(method) {
  document.getElementById(`popup-${method}`).style.display = 'none';
}

// FOOTER YEAR
document.getElementById('year').textContent = new Date().getFullYear();
