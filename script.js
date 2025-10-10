const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const frame = document.getElementById("contentFrame");
const appTitle = document.querySelector(".app-title");

// Toggle sidebar
menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

// Load a new page in iframe with fade transition
function loadPage(url, title) {
  sidebar.classList.remove("active");
  frame.classList.add("fade");

  setTimeout(() => {
    frame.src = url;
    appTitle.textContent = `FYJC - ${title}`;
    frame.classList.remove("fade");
  }, 400);
}
