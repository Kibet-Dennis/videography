function switchTab(evt, tabName) {
  const tabs = document.querySelectorAll('.tab-content');
  const buttons = document.querySelectorAll('.tab');

  tabs.forEach(tab => tab.classList.remove('active'));
  buttons.forEach(btn => btn.classList.remove('active'));

  document.getElementById(tabName).classList.add('active');
  evt.currentTarget.classList.add('active');
}

function toggleReadMore(button) {
  const paragraph = button.previousElementSibling;
  const allTexts = button.closest(".process-grid").querySelectorAll(".more-text");
  const allButtons = button.closest(".process-grid").querySelectorAll(".read-more-btn");

  allTexts.forEach(p => {
    if (p !== paragraph) p.classList.remove("show");
  });
  allButtons.forEach(btn => {
    if (btn !== button) btn.textContent = "Read More";
  });

  paragraph.classList.toggle("show");
  button.textContent = paragraph.classList.contains("show") ? "^^" : "Read More";
}
function showPopup(type) {
  document.getElementById(`popup-${type}`).style.display = 'block';
}

function closePopup(type) {
  document.getElementById(`popup-${type}`).style.display = 'none';
}

// Optional: Close popup when clicking outside
window.addEventListener('click', function(e) {
  ['mpesa', 'paypal', 'bank'].forEach(type => {
    const popup = document.getElementById(`popup-${type}`);
    if (e.target === popup) {
      popup.style.display = 'none';
    }
  });
});
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}
