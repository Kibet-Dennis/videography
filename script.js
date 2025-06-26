document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('.tab-btn');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      showTab(button.dataset.tab);
    });
  });
});

function showTab(tabId) {
  const tabContents = document.querySelectorAll(".tab-content");
  const tabButtons = document.querySelectorAll(".tab-btn");

  tabContents.forEach(tab => tab.classList.remove("active"));
  tabButtons.forEach(btn => btn.classList.remove("active"));

  document.getElementById(tabId)?.classList.add("active");
  document.querySelector(`.tab-btn[data-tab='${tabId}']`)?.classList.add("active");

  // Hide payment section when switching tabs
  document.getElementById("payment").classList.remove("active");
}

// Toggle "Read More" text visibility
function toggleReadMore(button) {
  const paragraph = button.previousElementSibling;
  const isShown = paragraph.classList.contains("show");

  // Close all others
  document.querySelectorAll(".more-text").forEach(p => p.classList.remove("show"));
  document.querySelectorAll(".read-more-btn").forEach(btn => btn.textContent = "Read More");

  if (!isShown) {
    paragraph.classList.add("show");
    button.textContent = "Read Less";
  }
}

// Toggle payment section visibility
function togglePayment() {
  const paymentSection = document.getElementById("payment");
  const isVisible = paymentSection.style.display === "block";

  // Hide all tab content
  document.querySelectorAll(".tab-content.active").forEach(tab => tab.classList.remove("active"));
  document.querySelectorAll(".tab-btn.active").forEach(btn => btn.classList.remove("active"));

  paymentSection.classList.toggle('active');
}
