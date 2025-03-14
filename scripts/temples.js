// Hamburger Menu Functionality
const hamburger = document.getElementById('hamburger');
const navUl = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    navUl.classList.toggle('show');
});

// Dynamic Footer Functionality
const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;

document.getElementById('currentYear').textContent = currentYear;
document.getElementById('lastModified').textContent = lastModified;
