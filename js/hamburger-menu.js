






document.querySelector('.menu-icon').addEventListener('click', function () {
    const menu = document.getElementById('menu');
    const menuIcon = document.getElementById('menu-toggle');
    menu.classList.toggle('visible');
    menuIcon.classList.toggle('toggle');
});
