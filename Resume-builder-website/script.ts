// Add interactive functionality (e.g., smooth scrolling)
document.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = (event.target as HTMLAnchorElement).getAttribute('href')?.slice(1);
      const targetElement = document.getElementById(targetId as string);
  
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

  const hamburgerMenu = document.getElementById('hamburger') as HTMLElement;
const navLinks = document.querySelector('.nav-links') as HTMLElement;

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  navLinks.classList.toggle('active');
});

