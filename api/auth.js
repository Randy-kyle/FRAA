// Simulasi login
export function login(email, password) {
  if (email === "admin@example.com" && password === "123456") {
    return { success: true, token: "dummy-token", role: "admin" };
  }
  return { success: false, message: "Email atau password salah." };
}

// Simulasi register
export function register(email, username, password) {
  return {
    success: true,
    message: "Registrasi berhasil. Silakan login."
  };
}
