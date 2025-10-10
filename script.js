const iframe = document.getElementById('iframe');
const navLinks = document.querySelectorAll('.top-nav ul li');
const loader = document.getElementById('loader');
const darkModeToggle = document.getElementById('darkModeToggle');
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav-links');

// Sections and URLs
const sections = {
    home: 'https://home-zeta-seven.vercel.app/',
    syllabus: 'https://syllabus-phi.vercel.app/',
    notice: 'https://notice-jet-six.vercel.app/',
    about: 'https://about-1-nu.vercel.app/',
    important: 'https://imp-note-sigma.vercel.app/'
};

// Load last visited section or default
let currentSection = localStorage.getItem('lastSection') || 'home';
loadSection(currentSection);

// Nav link click
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const section = link.getAttribute('data-link');
        loadSection(section);
    });
});

// Mobile nav click
mobileNav.addEventListener('click', e => {
    if(e.target.tagName === 'LI') {
        loadSection(e.target.getAttribute('data-link'));
        mobileNav.style.display = 'none';
    }
});

// Load section
function loadSection(section) {
    if(!sections[section]) return;

    // Show loader
    loader.style.display = 'block';
    iframe.style.opacity = 0;

    // Load iframe
    iframe.src = sections[section];

    // Set active nav item
    navLinks.forEach(li => li.classList.remove('active'));
    const activeLink = Array.from(navLinks).find(li => li.getAttribute('data-link') === section);
    if(activeLink) activeLink.classList.add('active');

    // Save last section
    localStorage.setItem('lastSection', section);
    currentSection = section;
}

// Iframe load
iframe.onload = () => {
    loader.style.display = 'none';
    iframe.style.opacity = 1;
}

// Dark mode toggle
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

// Hamburger toggle
hamburger.addEventListener('click', () => {
    if(mobileNav.style.display === 'flex') mobileNav.style.display = 'none';
    else {
        mobileNav.innerHTML = '';
        navLinks.forEach(link => {
            const li = document.createElement('li');
            li.textContent = link.textContent;
            li.setAttribute('data-link', link.getAttribute('data-link'));
            mobileNav.appendChild(li);
        });
        mobileNav.style.display = 'flex';
    }
});
