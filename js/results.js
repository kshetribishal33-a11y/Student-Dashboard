function filterResults() {
    let input = document.getElementById("searchInput").value.toLowerCase();

    let rows = document.querySelectorAll("#resultsTableBody tr");

    rows.forEach(row => {
        let code = row.cells[0].textContent.toLowerCase();
        let subject = row.cells[1].textContent.toLowerCase();

        if (code.includes(input) || subject.includes(input)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}