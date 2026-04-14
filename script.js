// JS
// Smooth scroll for nav links
document.querySelectorAll('#nav-bar a').forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    var target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Mobile hamburger menu toggle
var menuToggle = document.getElementById('menu-toggle');
var navList = document.querySelector('#nav-bar ul');

menuToggle.addEventListener('click', function() {
  navList.classList.toggle('active');
});

// Close menu when a nav link is clicked on mobile
document.querySelectorAll('#nav-bar a').forEach(function(link) {
  link.addEventListener('click', function() {
    navList.classList.remove('active');
  });
});

// Guitar image - zoom toward mouse pointer position
var guitarContainer = document.querySelector('.guitar-container');

if (guitarContainer) {
  guitarContainer.addEventListener('mousemove', function(e) {
    var rect = guitarContainer.getBoundingClientRect();
    var x = ((e.clientX - rect.left) / rect.width) * 100;
    var y = ((e.clientY - rect.top) / rect.height) * 100;
    guitarContainer.style.setProperty('--mouse-x', x + '%');
    guitarContainer.style.setProperty('--mouse-y', y + '%');
  });
}