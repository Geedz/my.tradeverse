function logout() {
  localStorage.removeItem("jwt");
  localStorage.removeItem("current_plan")
  window.location.href= "https://www.tradeverse.it/login.html";
}

document.getElementById("logout-btn").addEventListener("click", function() {
  logout();
})

