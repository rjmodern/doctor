// script.js
function filterDoctors() {
    const filterValue = document.getElementById("deptFilter").value;
    const rows = document.querySelectorAll(".doctor-row");
    const shiftHeaders = document.querySelectorAll(".shift-header");

    rows.forEach(row => {
        const dept = row.getAttribute("data-dept");
        if (filterValue === "all" || dept.includes(filterValue)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });

    // ফিল্টার করলে শিফট হেডার (সকাল/বিকেল) হাইড হবে না যদি না সব ডাক্তার হাইড হয়
    // এটি আরও প্রফেশনাল দেখানোর জন্য
}
