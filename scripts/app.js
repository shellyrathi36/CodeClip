console.log('app script loaded');
  const hamburger = document.getElementById('ham');
  const navLinks = document.getElementById('navlink');

  ham.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
