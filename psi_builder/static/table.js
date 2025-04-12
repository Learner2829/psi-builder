document.getElementById("addStockBtn").addEventListener("click", function () {
    let table = document.getElementById("tradingTable");
    let tbody = table.getElementsByTagName("tbody")[0];

    // Get input values
    let stockSymbol = document.getElementById("stockSymbol").value.toUpperCase();
    let stockPrice = document.getElementById("stockPrice").value;
    let stockHigh = document.getElementById("stockHigh").value;
    let stockLow = document.getElementById("stockLow").value;
    let stockLTP = document.getElementById("stockLTP").value;
    let stockChange = document.getElementById("stockChange").value;
    let stockAction = document.getElementById("stockAction").value;
    let stockIndicator = document.getElementById("stockIndicator").value;

    if (stockSymbol && stockPrice && stockHigh && stockLow && stockLTP && stockChange) {
        let newRow = tbody.insertRow();

        newRow.innerHTML = `
            <td>${stockSymbol}</td>
            <td>$${stockPrice}</td>
            <td>$${stockHigh}</td>
            <td>$${stockLow}</td>
            <td>$${stockLTP}</td>
            <td class="${parseFloat(stockChange) > 0 ? 'positive' : 'negative'}">${stockChange}%</td>
            <td>${stockAction}</td>
            <td>${stockIndicator}</td>
            <td><button class="remove-btn">Remove</button></td>
        `;

        // Add remove button functionality
        newRow.querySelector(".remove-btn").addEventListener("click", function () {
            newRow.remove();
            if (tbody.rows.length === 0) {
                table.style.display = "none"; // Hide table if no rows exist
            }
        });

        // Show the table
        table.style.display = "table";

        // Clear input fields
        document.querySelectorAll(".add-stock-form input").forEach(input => input.value = "");
    } else {
        alert("Please fill in all fields.");
    }
});

// Theme Toggle
document.getElementById("themeToggle").addEventListener("click", function () {
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }
});

// Load saved theme
window.onload = function () {
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-mode");
    }
};