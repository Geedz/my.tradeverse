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
    const response = await fetch('https://api.tradeverse.it/php/get_affiliates.php', {
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

    const affiliates = await response.json();
    populateAffiliateTable(affiliates);

} catch (error) {
    console.error("Error fetching affiliate data:", error);
}});



function populateAffiliateTable(affiliates) {
  const tableBody = document.getElementById("affiliates-table-body");
  tableBody.innerHTML = ""; // Clear any existing rows

  affiliates.forEach((affiliate) => {
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      nameCell.textContent = affiliate.affiliate_name;
      row.appendChild(nameCell);

      const emailCell = document.createElement("td");
      emailCell.textContent = affiliate.affiliate_email;
      row.appendChild(emailCell);

      const planCell = document.createElement("td");

      if (affiliate.affiliate_plan === "NOPLAN") {
        planCell.textContent = `Nessun Piano`;
      } else {
        planCell.textContent = affiliate.affiliate_plan;
      }
      row.appendChild(planCell);

      const earningsCell = document.createElement("td");

      let earnings = parseFloat(affiliate.affiliate_earnings);
      if (isNaN(earnings)) {
          earnings = 0.00; // Default to 0 if earnings is not a number
      }
      
      earningsCell.textContent = `€${earnings.toFixed(2)}`;
      row.appendChild(earningsCell);

      tableBody.appendChild(row);
  });
}