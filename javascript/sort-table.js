let currentSortState = {
  column: null,
  order: null // "asc" for ascending, "desc" for descending, or null for default
};

function sortTable(sortBy, headerElement) {
  const table = document.getElementById("affiliates-table-body");
  let rows = Array.from(table.getElementsByTagName("tr"));

  // Reset all icons first
  document.querySelectorAll('.sort-icon').forEach(icon => {
      icon.style.transform = "rotate(90deg)";
  });

  // Determine sorting order based on previous state
  if (currentSortState.column === sortBy) {
      if (currentSortState.order === "asc") {
          currentSortState.order = "desc";
      } else if (currentSortState.order === "desc") {
          currentSortState.order = null; // Return to default order
      } else {
          currentSortState.order = "asc";
      }
  } else {
      currentSortState.column = sortBy;
      currentSortState.order = "asc";
  }

  // Sort based on the determined order
  if (currentSortState.order === "asc") {
      rows.sort((a, b) => compareValues(a, b, sortBy));
      headerElement.querySelector(".sort-icon").style.transform = "rotate(0deg)";
  } else if (currentSortState.order === "desc") {
      rows.sort((a, b) => compareValues(b, a, sortBy));
      headerElement.querySelector(".sort-icon").style.transform = "rotate(180deg)";
  } else {
      // If order is null, return the table to its default state (no sorting)
      rows = rows.sort((a, b) => {
          return parseInt(a.dataset.originalIndex) - parseInt(b.dataset.originalIndex);
      });
  }

  // Clear the current table and append sorted rows
  table.innerHTML = "";
  rows.forEach(row => table.appendChild(row));
}

function compareValues(a, b, sortBy) {
  let valA, valB;

  if (sortBy === "name") {
      valA = a.cells[0].textContent.toLowerCase();
      valB = b.cells[0].textContent.toLowerCase();
  } else if (sortBy === "email") {
      valA = a.cells[1].textContent.toLowerCase();
      valB = b.cells[1].textContent.toLowerCase();
  } else if (sortBy === "earnings") {
      valA = parseFloat(a.cells[3].textContent.replace('€', ''));
      valB = parseFloat(b.cells[3].textContent.replace('€', ''));
  }

  if (valA < valB) return -1;
  if (valA > valB) return 1;
  return 0;
}

// Add a data attribute to each row to store the original order
document.addEventListener("DOMContentLoaded", function () {
  const rows = Array.from(document.getElementById("affiliates-table-body").getElementsByTagName("tr"));
  rows.forEach((row, index) => {
      row.setAttribute("data-original-index", index);
  });
});
