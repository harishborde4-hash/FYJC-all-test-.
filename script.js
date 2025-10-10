// Get DOM elements
const menuButton = document.getElementById('menuButton');
const closeButton = document.getElementById('closeButton');
const sidebar = document.getElementById('sidebar');
const sidebarBackdrop = document.getElementById('sidebarBackdrop');
const navItems = document.querySelectorAll('.nav-item');
const contentFrame = document.getElementById('contentFrame');
const loadingIndicator = document.getElementById('loadingIndicator');

// Track current section
let currentSection = 'home';

// Toggle sidebar open
function openSidebar() {
    sidebar.classList.add('open');
    sidebarBackdrop.classList.add('show');
    menuButton.classList.add('open');
}

// Toggle sidebar closed
function closeSidebar() {
    sidebar.classList.remove('open');
    sidebarBackdrop.classList.remove('show');
    menuButton.classList.remove('open');
}

// Handle navigation item click
function navigateToSection(section, url, title) {
    // Update active state
    navItems.forEach(item => {
        if (item.dataset.section === section) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    // Update current section
    currentSection = section;

    // Show loading indicator
    loadingIndicator.classList.remove('hidden');
    loadingIndicator.querySelector('p').textContent = `Loading ${title}...`;

    // Update iframe src
    contentFrame.src = url;
    contentFrame.title = title;

    // Close sidebar
    closeSidebar();

    // Log navigation
    console.log(`Navigating to: ${section}`);
}

// Event listeners
menuButton.addEventListener('click', () => {
    if (sidebar.classList.contains('open')) {
        closeSidebar();
    } else {
        openSidebar();
    }
});

closeButton.addEventListener('click', closeSidebar);

sidebarBackdrop.addEventListener('click', closeSidebar);

// Add click handlers to nav items
navItems.forEach(item => {
    item.addEventListener('click', () => {
        const section = item.dataset.section;
        const url = item.dataset.url;
        const title = item.querySelector('span').textContent;
        navigateToSection(section, url, title);
    });
});

// Handle iframe load event
contentFrame.addEventListener('load', () => {
    // Hide loading indicator after iframe loads
    setTimeout(() => {
        loadingIndicator.classList.add('hidden');
    }, 300);
});

// Close sidebar on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebar.classList.contains('open')) {
        closeSidebar();
    }
});

// Handle initial load
window.addEventListener('load', () => {
    console.log('FYJC Portal loaded successfully');
});
