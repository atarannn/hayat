function menuInit() {
    const menu = document.querySelector('.menu-wrap');
    document.querySelector('[data-menu]').addEventListener('click', () => {
        menu.classList.toggle('active');
        document.querySelector('.span-wrapper').classList.toggle('active');
    });
}

function init() {
    menuInit();
}

window.addEventListener('DOMContentLoaded', init);
