// JS
document.querySelectorAll('#nav-bar a').forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const menuToggle = document.getElementById("menu-toggle");
const navList = document.querySelector("#nav-bar ul");

menuToggle.addEventListener("click", function() {
  navList.classList.toggle("active");
});