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

$(document).ready(function(){
    $("body").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top - 100;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
