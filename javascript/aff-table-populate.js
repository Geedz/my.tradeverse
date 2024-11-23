document.addEventListener("DOMContentLoaded", async function () {
  function getCookie(name) {
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
  }

  // Retrieve the token from the cookie
  const token = getCookie("authToken");
  
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