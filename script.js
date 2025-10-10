const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const frame = document.getElementById("contentFrame");

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

function loadPage(url) {
  sidebar.classList.remove("active");
  frame.classList.add("fade");

  setTimeout(() => {
    frame.src = url;
    frame.classList.remove("fade");
  }, 400);
}