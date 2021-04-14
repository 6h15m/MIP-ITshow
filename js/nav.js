const toggleMenu = document.querySelector('.toggle-menu');
const menu = document.querySelector('.menu');

const clickMenu = () => {
  menu.classList.toggle('active');
  snsButtons.classList.toggle('active');
};

toggleMenu.addEventListener('click', clickMenu);