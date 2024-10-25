import { setupThemeToggle, setupScrollButton } from "../scripts/script.js";

//====================
// !  JavaScript Concepts Card section
//====================

const cards = document.querySelectorAll(".card");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const closeButton = document.querySelector(".close-button");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const title = card.getAttribute("data-title");
    console.log(title);
    const description = card.getAttribute("data-description");

    modalTitle.textContent = title;
    modalDescription.textContent = description;

    modal.style.display = "block";
  });
});

closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
// Call the imported setup functions
setupThemeToggle();
setupScrollButton();
