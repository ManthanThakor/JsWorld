//====================
// ! Dark And Light Theme
//====================

const themeToggle = document.getElementById("themeToggle");

// Arrow function to set up the theme toggle
export const setupThemeToggle = () => {
  themeToggle.addEventListener("change", () => {
    const newTheme = themeToggle.checked ? "dark" : "light";
    console.log(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  });

  window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
    themeToggle.checked = savedTheme === "dark";
  });
};

//====================
//!  Back to Top Button
//====================

const myButton = document.getElementById("goToTopBtn");

// Arrow function to set up the scroll button
export const setupScrollButton = () => {
  if (!myButton) {
    console.error("Button with ID 'goToTopBtn' not found.");
  }

  window.onscroll = () => {
    scrollFunction();
  };

  const scrollFunction = () => {
    const scrollTopBody = document.body.scrollTop;
    const scrollTopHtml = document.documentElement.scrollTop;

    if (scrollTopBody > 400 || scrollTopHtml > 400) {
      myButton.style.display = "block";
    } else {
      myButton.style.display = "none";
    }
  };

  myButton.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
};

// Call the setup functions when the script loads
setupThemeToggle();
setupScrollButton();
