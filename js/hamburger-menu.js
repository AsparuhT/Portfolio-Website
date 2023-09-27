

// Get the hamburger menu icon
const menuIcon = document.querySelector('.menu-icon');


// Function that toggle classes, to hide or show the mobile menu and animate the hamuburger icon
menuIcon.addEventListener('click', function () {
    const menu = document.getElementById('menu');
   // const menuIcon = document.getElementById('menu-toggle');
    menu.classList.toggle('visible'); // make the menu visible
    menuIcon.classList.toggle('toggle'); // style the X form of the hamburger spans
});
