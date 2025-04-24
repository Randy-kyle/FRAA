export function getUserProfile(token) {
  if (token === "dummy-token") {
    return {
      username: "admin",
      email: "admin@example.com",
      joined: "2024-01-01"
    };
  }
  return null;
}

export function updateUserProfile(data) {
  // Simulasi update profil
  return {
    success: true,
    message: "Profil diperbarui."
  };
}
