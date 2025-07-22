console.log('App script loaded');

// Hamburger menu functionality
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
  navToggle.setAttribute('aria-expanded', 'false');
  navToggle.addEventListener('click', () => {
    const navList = navMenu.querySelector('.nav__list');
    const isOpen = navList.classList.toggle('open');
    navToggle.setAttribute(
      'aria-label',
      isOpen ? 'Close navigation menu' : 'Open navigation menu'
    );
    navToggle.setAttribute('aria-expanded', isOpen);
    
    // Animate hamburger toEye icon
    if (isOpen) {
      navToggle.children[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
      navToggle.children[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
      navToggle.children[1].style.opacity = '0';
    } else {
      navToggle.children[0].style.transform = 'rotate(0deg)';
      navToggle.children[2].style.transform = 'rotate(0deg)';
      navToggle.children[1].style.opacity = '1';
    }
  });
}