






document.getElementById('menu-toggle').addEventListener('click', function() {
  const menu = document.getElementById('menu');
  const menuIcon = document.getElementById('menu-toggle');
  
  menu.classList.toggle('hidden');
  menuIcon.classList.toggle('toggle'); // Toggles the class to change the icon to 'X' and back
});

