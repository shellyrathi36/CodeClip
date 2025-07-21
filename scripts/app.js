console.log('app script loaded');

// Hamburger menu functionality
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const navList = navMenu.querySelector('.nav__list');
    navList.classList.toggle('open');
    navToggle.setAttribute(
      'aria-label',
      navList.classList.contains('open') ? 'Close navigation menu' : 'Open navigation menu'
    );
  });
}