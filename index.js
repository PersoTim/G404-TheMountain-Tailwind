const menu = document.querySelector('#mobile-menu');
const menuIcon = document.querySelector('#menuOpen');
const menuClose = document.querySelector('#menuClose');

document.querySelector('#menuOpen').addEventListener('click', () => {
  menu.classList.toggle('invisible');
  menuIcon.classList.toggle('invisible');
  menuClose.classList.toggle('invisible');
  menuClose.classList.toggle('z-40');
});

menu.querySelectorAll('a[href^="#"]').forEach(l => l.addEventListener('click', () => {
    menu.classList.add('invisible');
    menuClose.classList.add('invisible')
    menuIcon.classList.add('visible');
}));

document.querySelector('#menuClose').addEventListener('click', () => {
  menu.classList.toggle('invisible');
  menuIcon.classList.toggle('invisible');
  menuClose.classList.toggle('invisible');
  menuClose.classList.toggle('z-40');
});