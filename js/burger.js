const burgerMenu = document.querySelector(".burger-menu");
const burgerMenuButton = document.querySelector(".burger-button");

function burgerMenuOpen() {
  burgerMenu.classList.add("burger-menu-is_open");
}
burgerMenuButton.addEventListener("click", burgerMenuOpen);
