document.addEventListener('DOMContentLoaded', () => {
  // Retrieve the token from localStorage
  function getCookie(name) {
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
  }

  // Retrieve the token from the cookie
  const token = getCookie("authToken");
  const current_plan = localStorage.getItem("current_plan")
  // console.log("Token from localStorage:", token);  // Add this to verify token existence

  async function validateToken(token) {
      try {
          const response = await fetch('https://api.tradeverse.it/php/validate_token.php', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`
              },
              credentials: 'include' // This allows cookies to be sent/received in cross-origin requests
          });

          if (!response.ok) {
              throw new Error('Token validation failed.');
          }

          const data = await response.json();
          // console.log("Validation Response: ", data);

          if (data.valid !== true) {
              // If the token is not valid, redirect to the login page
              window.location.href = "https://tradeverse.it/login.html";
          }
      } catch (error) {
          console.error('There was a problem with token validation:', error);
          window.location.href = "https://tradeverse.it/login.html";
      }
  }

  // Controlla se l'utente ha un piano prima di far il login, sennó, mandali ad una pagina apposita
  if (current_plan === null) {
    window.location.href = "https://tradeverse.it/login.html";
  } 
  else if (current_plan !== "Settimanale" && current_plan !== "Mensile" && current_plan !== "Annuale") {
    window.location.href = "https://tradeverse.it/no-plan.html";
  } else {
    if (!token) {
      // If there's no token, redirect to the login page
      console.error("No token found");
      window.location.href = "https://tradeverse.it/login.html";
  } else {
      validateToken(token);
  }
  }
});
