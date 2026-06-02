// ডিজিটাল ঘড়ি আপডেট ফাংশন
function startClock() {
    const clockElement = document.getElementById('digitalClock');
    const dateElement = document.getElementById('currentDate');

    if (clockElement) {
        setInterval(() => {
            const now = new Date();
            
            // সময় (12 ঘণ্টার ফরম্যাট)
            let hours = now.getHours();
            let minutes = now.getMinutes();
            let seconds = now.getSeconds();
            let ampm = hours >= 12 ? 'PM' : 'AM';
            
            hours = hours % 12;
            hours = hours ? hours : 12; // ০ হলে ১২ দেখাবে
            minutes = minutes < 10 ? '0' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;
            
            clockElement.innerText = `${hours}:${minutes}:${seconds} ${ampm}`;

            // বাংলা তারিখ ও দিন
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            dateElement.innerText = now.toLocaleDateString('bn-BD', options);
        }, 1000);
    }
}

// পেজ লোড হলে ঘড়ি শুরু হবে
window.onload = startClock;

// ডাক্তার টেবিল ফিল্টার (দিনভিত্তিক পেজের জন্য)
function filterDoctors() {
    const filterValue = document.getElementById("deptFilter").value.toLowerCase();
    const rows = document.querySelectorAll(".doctor-row");

    rows.forEach(row => {
        const specialty = row.getAttribute("data-dept").toLowerCase();
        if (filterValue === "all" || specialty.includes(filterValue)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}
