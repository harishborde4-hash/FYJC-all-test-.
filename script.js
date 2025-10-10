const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const iframe = document.getElementById('contentFrame');

// Open/close sidebar
function toggleSidebar() {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

// Three dots button click
menuBtn.addEventListener('click', toggleSidebar);

// Overlay click closes sidebar
overlay.addEventListener('click', toggleSidebar);

// Sidebar menu item click
const links = sidebar.querySelectorAll('li');
links.forEach(link => {
    link.addEventListener('click', () => {
        const url = link.getAttribute('data-link');
        iframe.src = url;
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    });
});
