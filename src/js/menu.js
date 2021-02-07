import menuTemplate from '../templates/menu.hbs';
import menuMath from '../menu.json'


const menu = menuTemplate(menuMath);
const menuRef = document.querySelector('.js-menu');
menuRef.insertAdjacentHTML('beforeend', menu);

