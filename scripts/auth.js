// Validasi login/register
function validateForm(formId) {
  const form = document.getElementById(formId);
  form.addEventListener("submit", function (e) {
    const email = form.querySelector("input[type='email']").value;
    const pass = form.querySelector("input[type='password']").value;
    if (!email || !pass) {
      e.preventDefault();
      alert("Email dan password wajib diisi.");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("loginForm")) validateForm("loginForm");
  if (document.getElementById("registerForm")) validateForm("registerForm");
});
