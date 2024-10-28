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

//====================
// !  JavaScript Concepts Card section
//====================

document.getElementById("alertBtn").addEventListener("click", showAlert);
document.getElementById("confirmBtn").addEventListener("click", showConfirm);
document.getElementById("promptBtn").addEventListener("click", showPrompt);

function showAlert() {
  alert("This is an alert box. It just displays a message.");
}

function showConfirm() {
  const confirmed = confirm("Do you confirm this action?");
  const resultDiv = document.getElementById("popup-result");
  resultDiv.textContent = confirmed
    ? "You confirmed the action!"
    : "You canceled the action!";
}

function showPrompt() {
  const response = prompt("Please enter your name:", "Guest");
  const resultDiv = document.getElementById("popup-result");
  resultDiv.textContent = response
    ? `Hello, ${response}!`
    : "You didn't enter your name .";
}

//==========================================================
// Call the imported setup functions
//==========================================================
setupThemeToggle();
setupScrollButton();
