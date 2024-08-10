let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Add event listeners to navigation links
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    // Scroll to the target section
    targetSection.scrollIntoView({ behavior: 'mooth' });

    // Add 'active' class to the corresponding link
    navLinks.forEach((links) => {
      links.classList.remove('active');
    });
    document.querySelector(`header nav a[href*=${targetId}]`).classList.add('active');
  });
});

// Add event listener for scrolling
window.addEventListener('scroll', () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove('active');
      });
      document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
    }
  });
});