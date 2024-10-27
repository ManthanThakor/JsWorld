const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("change", function () {
  const newTheme = themeToggle.checked ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  themeToggle.checked = savedTheme === "dark";
});

const cards = document.querySelectorAll(".card");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const closeButton = document.querySelector(".close-button");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const title = card.getAttribute("data-title");
    const description = card.getAttribute("data-description");

    modalTitle.textContent = title;
    modalDescription.textContent = description;

    modal.style.display = "block";
  });
});

// Close the modal when the close button is clicked
closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close the modal when clicking outside the modal content
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
