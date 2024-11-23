function logout() {
  localStorage.removeItem("jwt");
  localStorage.removeItem("current_plan")
  window.location.href= "../login.html";
}

document.getElementById("logout-btn").addEventListener("click", function() {
  logout();
})

