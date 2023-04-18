// Меню Бургер
const iconMenu = document.querySelector('.icon-menu');
if (iconMenu) {
  const menuBody = document.querySelector('.menu__body');

  iconMenu.addEventListener('click', function (e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('menu-open');
    if (menuBody.classList.contains('catalog-open')) {
      menuBody.classList.toggle('catalog-open');
    }
    if (menuBody.classList.contains('sub-menu-open')) {
      menuBody.classList.remove('sub-menu-open');
    }
  });
}

console.log('On burger-menu');
