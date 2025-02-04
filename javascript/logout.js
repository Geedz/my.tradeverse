function logout() {
  // Remove the jwt token and current plan from local storage
  localStorage.removeItem("jwt");
  localStorage.removeItem("current_plan");

  // Remove the jwt cookie by setting its expiration date to a date in the past.
  // Ensure that the 'path' (and optionally 'domain') match the ones used when the cookie was set.
  document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.tradeverse.it;";

  // Redirect the user to the login page
  window.location.href = "https://www.tradeverse.it/login.html";
}

document.getElementById("logout-btn").addEventListener("click", function() {
  logout();
});
