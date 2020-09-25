const menuBtn = document.querySelector('.menu-btn');
const hamBurger = document.querySelector('.menu-btn-burger')
const nav = document.querySelector('.nav')
const menuNav = document.querySelector('.menu-nav')
const menuNavAll = document.querySelectorAll('.menu-nav-item')

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu () {
    if(!showMenu) {
    hamBurger.classList.add('open')
    nav.classList.add('open')
    menuNav.classList.add('open')
    menuNavAll.forEach(item => item.classList.add('open')); 

    showMenu = true;       
    } else {
    hamBurger.classList.remove('open')
    nav.classList.remove('open')
    menuNav.classList.remove('open')
    menuNavAll.forEach(item => item.classList.remove('open'));
    showMenu = false;
    }
}
