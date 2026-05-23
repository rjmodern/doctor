function filterDoctors() {

    const filterValue = document.getElementById("deptFilter").value.toLowerCase();

    const rows = document.querySelectorAll(".doctor-row");



    rows.forEach(row => {

        const specialty = row.getAttribute("data-dept").toLowerCase();

        if (filterValue === "all" || specialty === filterValue) {

            row.style.display = "";

        } else {

            row.style.display = "none";

        }

    });

}
