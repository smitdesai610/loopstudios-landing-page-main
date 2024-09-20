const menuContainer = document.querySelector(".menu-container");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const closeBtn = document.querySelector(".close-btn");
const navLinks = document.querySelector(".navlinks");

function openMenu() {
  menuContainer.classList.add("open");
  hamburgerBtn.style.display = "none";
  closeBtn.style.display = "block";
}

function closeMenu() {
  menuContainer.classList.remove("open");
  hamburgerBtn.style.display = "block";
  closeBtn.style.display = "none";
}

hamburgerBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);

// Close menu when a link is clicked
navLinks.addEventListener("click", function (e) {
  if (e.target.tagName === "A" && window.innerWidth <= 768) {
    closeMenu();
  }
});