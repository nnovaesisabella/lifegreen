let show = true;

const btnMobile = document.querySelector('.openMenu');
btnMobile.addEventListener('click', menuToggle);

const menuItems = document.querySelector('.items_one');
menuItems.addEventListener('click', closeMenu);

const menuItems_two = document.querySelector('.items_two');
menuItems_two.addEventListener('click', closeMenu);

const menuItems_tree = document.querySelector('.items_tree');
menuItems_tree.addEventListener('click', closeMenu);

const menuItems_four = document.querySelector('.items_four');
menuItems_four.addEventListener('click', closeMenu);


function menuToggle() {

    document.body.style.overflow = show ? 'hidden' : 'initial';
    const nav = document.querySelector('.menu-section');
    nav.classList.toggle('active', show);
    show = !show;
}

function closeMenu() {
    const nav = document.querySelector('.menu-section');
    nav.classList.remove('active')
}


