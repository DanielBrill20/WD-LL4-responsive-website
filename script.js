// Simple script to toggle the navigation menu on mobile
// Wait for the DOM to load
window.onload = function() {
  // Get the menu button and nav menu
  var menuToggle = document.querySelector('.menu-toggle');
  var navMenu = document.querySelector('nav ul');

  // When the menu button is clicked, show/hide the nav menu
  menuToggle.addEventListener('click', function() {
    navMenu.classList.toggle('show');
  });
};
