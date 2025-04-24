// Toggle menu admin
const menuToggler = document.getElementById("menuToggle");
const sidebar = document.querySelector(".sidebar");

if (menuToggler && sidebar) {
  menuToggler.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
  });
}

// Cek jumlah user / game (dummy)
function loadDashboardStats() {
  document.getElementById("totalUsers").textContent = "124";
  document.getElementById("totalGames").textContent = "37";
}

document.addEventListener("DOMContentLoaded", loadDashboardStats);
