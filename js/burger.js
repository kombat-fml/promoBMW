const menuElem = document.querySelector('.menu');

const burgerMenuElem = document.querySelector('.humburger-menu');

const toggleMenu = () => {
  menuElem.classList.toggle('menu-active');
  burgerMenuElem.classList.toggle('humburger-menu-active');
};

const closeMenu = () => {
  menuElem.classList.remove('menu-active');
  burgerMenuElem.classList.remove('humburger-menu-active');
};

burgerMenuElem.addEventListener('click', toggleMenu);
menuElem.addEventListener('click', (event) => {
  const target = event.target;
  if (
    menuElem.classList.contains('menu-active') &&
    target.classList.contains('menu-list__link')
  ) {
    closeMenu();
  }
});

document.body.addEventListener('keydown', (event) => {
  if (menuElem.classList.contains('menu-active') && event.keyCode == '27') {
    closeMenu();
  }
});
