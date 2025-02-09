// Add interactive functionality (e.g., smooth scrolling)
document.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function (event) {
        var _a;
        var targetId = (_a = event.target.getAttribute('href')) === null || _a === void 0 ? void 0 : _a.slice(1);
        var targetElement = document.getElementById(targetId);
        if (targetElement) {
            event.preventDefault();
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
// const hamburger = document.getElementById('hamburger') as HTMLElement;
// const navLinks = document.querySelector('.nav-links') as HTMLElement;
// hamburger.addEventListener('click', () => {
//   hamburger.classList.toggle('active');
//   navLinks.classList.toggle('active');
// });
var hamburgerMenu = document.getElementById('hamburger');
var navLinks = document.querySelector('.nav-links');
hamburgerMenu.addEventListener('click', function () {
    hamburgerMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
});
