const menuBtn = document.querySelector('.mobile-menu-btn');
const closeMenuBtn = document.querySelector('.menu-close-btn');
const navBar = document.querySelector('.navbar');
let isOpen = false;
function toggleMenu() {
  isOpen = !isOpen;
  if (!isOpen) {
    navBar.style.right = '-100%';
  }
  if (isOpen) {
    navBar.style.right = '0';
  }
}

menuBtn.addEventListener('click', () => {
  toggleMenu();
});

closeMenuBtn.addEventListener('click', () => {
  toggleMenu();
});
