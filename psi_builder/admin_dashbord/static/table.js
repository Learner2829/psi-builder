let stockData = [];
let dataTable;

const searchInput = document.getElementById("stockSearch");
const autoList = document.getElementById("autocomplete-list");

// Load stock.json on page load
fetch(STOCK_JSON_URL)
  .then(response => response.json())
  .then(data => {
    stockData = data;
    console.log(stockData);
  })
  .catch(error => {
    console.error("Error fetching stock data:", error);
  });

searchInput.addEventListener("input", () => {
  const val = searchInput.value.trim().toLowerCase();
  autoList.innerHTML = "";
  if (!val || stockData.length === 0) return;

  stockData.forEach(stock => {
    if (stock.symbol.toLowerCase().startsWith(val) || stock.name.toLowerCase().startsWith(val)) {
      const item = document.createElement("div");
      item.innerHTML = `
        <span>${stock.name} (${stock.symbol})</span>
        <button class="btn btn-sm btn-primary float-end add-stock-btn" data-symbol="${stock.symbol}" data-token="${stock.token}">Add</button>
      `;
      autoList.appendChild(item);
    }
  });

  document.querySelectorAll(".add-stock-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const symbol = e.target.getAttribute("data-symbol");
      const token = e.target.getAttribute("data-token");
      addStock(symbol, token);
      searchInput.value = "";
      autoList.innerHTML = "";
    });
  });
});

document.addEventListener("click", (e) => {
  if (e.target !== searchInput) autoList.innerHTML = "";
});

function addStock(symbol, token) {
  if (!dataTable) {
    $('#stockTable').show();
    dataTable = new DataTable('#stockTable');
  }

  const exists = dataTable
    .rows()
    .data()
    .toArray()
    .some(row => row[0] === symbol);

  if (exists) return alert("Stock already added.");

  const row = [
    symbol,
    token,
    "$0", "$0", "$0", "$0",
    `<span class="negative">0%</span>`,
    "-", "-", `<button class="remove-btn">Remove</button>`
  ];
  dataTable.row.add(row).draw();
}

$('#stockTable tbody').on('click', '.remove-btn', function () {
  dataTable.row($(this).parents('tr')).remove().draw();
  if (dataTable.rows().count() === 0) $('#stockTable').hide();
});

document.getElementById("themeToggle").addEventListener("click", () => {
  const navbar = document.getElementById("navbar");

  // Toggle dark mode on the body
  document.body.classList.toggle("dark-mode");

  // Toggle the dark and light mode classes on the navbar
  if (document.body.classList.contains("dark-mode")) {
    // Dark mode enabled
    navbar.classList.remove("navbar-light", "bg-light");
    navbar.classList.add("navbar-dark", "bg-dark");
    // Set navbar text color to white in dark mode (optional, as navbar-dark already sets this)
    navbar.style.color = 'white';
  } else {
    // Light mode enabled
    navbar.classList.remove("navbar-dark", "bg-dark");
    navbar.classList.add("navbar-light", "bg-light");
    // Reset navbar text color to black in light mode
    navbar.style.color = 'black';
  }

  // Store theme preference in local storage
  localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
});



window.onload = () => {
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.remove("dark-mode");
  }
};