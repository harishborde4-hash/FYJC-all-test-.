// FYJC Portal - Simple animation + email notifier
document.addEventListener("DOMContentLoaded", () => {
  const fill = document.getElementById("progressFill");
  const percent = document.getElementById("progressPercent");

  // Animate progress bar
  let progress = 40;
  setTimeout(() => {
    const newProgress = Math.min(90, progress + Math.floor(Math.random() * 20));
    fill.style.width = newProgress + "%";
    percent.textContent = newProgress;
  }, 800);

  // Email subscription logic
  const button = document.getElementById("notifyBtn");
  const email = document.getElementById("email");
  const msg = document.getElementById("msg");

  button.addEventListener("click", () => {
    const value = email.value.trim();
    if (!value || !value.includes("@")) {
      msg.textContent = "⚠️ Please enter a valid email address.";
      msg.style.color = "red";
      return;
    }

    msg.textContent = "✅ Thanks! You'll be notified when FYJC Portal is live.";
    msg.style.color = "#2563eb";
    email.value = "";
  });
});
