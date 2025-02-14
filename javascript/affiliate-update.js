function getCookie(name) {
  let nameEQ = name + "=";
  let cookiesArray = document.cookie.split(';');
  for (let i = 0; i < cookiesArray.length; i++) {
      let cookie = cookiesArray[i];
      while (cookie.charAt(0) === ' ') {
          cookie = cookie.substring(1, cookie.length);
      }
      if (cookie.indexOf(nameEQ) === 0) {
          return cookie.substring(nameEQ.length, cookie.length);
      }
  }
  return null;
}


document.addEventListener("DOMContentLoaded", async function () {
  // Assume you already have the token stored somewhere, e.g., in localStorage
  const token = getCookie("jwt");
  
    // Check if the token exists
    if (!token) {
        console.error("No token found");
        return;
    }
  
    try {
        // Make a POST request to the PHP endpoint
        const response = await fetch('https://api.tradeverse.it/php/affiliate_update.php', {
            method: 'POST',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
  
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        // Parse the response as JSON
        const data = await response.json();
  
        if (data.valid === false) {
            console.error("Error from server: ", data.message);
            return;
        } else {
          const name = data.name;
          const surname = data.surname;
          const email = data.email;
          const affiliate_link = data.affiliate_link;
          const affiliate_count = data.affiliate_count;
          const affiliate_earnings = data.affiliate_earnings;
          const affiliates = data.affiliates;
          const plan = data.current_plan;
          const renewal_date = new Date(data.renewal_date);
          const formatted_date = renewal_date.toLocaleDateString('it-IT', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });
  

          document.getElementById("affiliate-count").textContent = `${affiliate_count}`;
          document.getElementById("affiliate-earnings").textContent = `€${affiliate_earnings}`;
          document.getElementById("user-name-surname").textContent = `${name} ${surname}`;
          document.getElementById("email").textContent = `${email}`;
          document.getElementById("current_plan").textContent = `${plan}`;
          document.getElementById("renewal_date").textContent = `${formatted_date}`;
          document.getElementById("aff-link").textContent = `${affiliate_link}`;
        }
    } catch (error) {
        console.error("Failed to fetch affiliate update data: ", error);
    }
  
  });
  