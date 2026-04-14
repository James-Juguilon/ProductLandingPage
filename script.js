// JS
// 1. Smooth scroll for nav links
document.querySelectorAll('#nav-bar a').forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    var target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// 2. Mobile hamburger menu toggle
var menuToggle = document.getElementById('menu-toggle');
var navList = document.querySelector('#nav-bar ul');

menuToggle.addEventListener('click', function() {
  navList.classList.toggle('active');
});

// 3. Close the menu when a nav link is clicked on mobile
document.querySelectorAll('#nav-bar a').forEach(function(link) {
  link.addEventListener('click', function() {
    navList.classList.remove('active');
  });
});