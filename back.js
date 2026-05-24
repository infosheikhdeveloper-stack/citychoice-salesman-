// =========================
// BACK BUTTON FUNCTION
// =========================

function createBackButton() {
  const btn = document.createElement("div");
  btn.className = "back-btn";

  btn.innerHTML = `<i class="fa-solid fa-arrow-left"></i>`;

  btn.onclick = () => {
    window.history.back(); // go previous page
  };

  document.body.appendChild(btn);
}

// AUTO LOAD
document.addEventListener("DOMContentLoaded", createBackButton);