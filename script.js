function filterDoctors() {
    const filterValue = document.getElementById("deptFilter").value.toLowerCase();
    const rows = document.querySelectorAll(".doctor-row");
    const shiftHeaders = document.querySelectorAll(".shift-header");

    rows.forEach(row => {
        const specialty = row.getAttribute("data-dept").toLowerCase();
        
        // '===' এর বদলে 'includes' ব্যবহার করা ভালো যাতে একাধিক ক্যাটাগরি সাপোর্ট করে
        if (filterValue === "all" || specialty.includes(filterValue)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });

    // বোনাস: ফিল্টার করলে "সকাল/বিকেল" হেডারগুলো হাইড করা (ঐচ্ছিক)
    shiftHeaders.forEach(header => {
        header.style.display = (filterValue === "all") ? "" : "none";
    });
}
