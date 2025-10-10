const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');
const iframe = document.getElementById('contentFrame');

menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    document.body.classList.toggle('sidebar-active');
});

// Handle sidebar link clicks
const links = sidebar.querySelectorAll('li');
links.forEach(link => {
    link.addEventListener('click', () => {
        const url = link.getAttribute('data-link');
        iframe.src = url;
        sidebar.classList.remove('active');
        document.body.classList.remove('sidebar-active');
    });
});
