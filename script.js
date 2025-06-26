// Toggle tab content visibility
function showTab(tabId) {
  const tabs = document.querySelectorAll(".tab-content");
  const buttons = document.querySelectorAll(".tab-btn");

  tabs.forEach(tab => tab.classList.remove("active"));
  buttons.forEach(btn => btn.classList.remove("active"));

  document.getElementById(tabId).classList.add("active");
  document.querySelector(`.tab-btn[onclick="showTab('${tabId}')"]`).classList.add("active");

  // Hide payment section when switching tabs
  document.getElementById("payment").style.display = "none";
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
    button.textContent = "^";
  }
}

// Toggle payment section visibility
function togglePayment() {
  const paymentSection = document.getElementById("payment");
  const isVisible = paymentSection.style.display === "block";

  // Hide all tab content
  document.querySelectorAll(".tab-content").forEach(tab => tab.classList.remove("active"));
  document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));

  paymentSection.style.display = isVisible ? "none" : "block";
}
