const openMenuButton = document.querySelector('.hamburger');
const closeMenuButton = document.querySelector('.closeButton');
const pageMask = document.querySelector('.pageMask');
const menu = document.querySelector('.mobile-navigation-container');

openMenuButton.addEventListener('click', () => {
  menu.classList.add('show');
});
closeMenuButton.addEventListener('click', () => {
  menu.classList.remove('show');
});
pageMask.addEventListener('click', () => {
  menu.classList.remove('show');
});
