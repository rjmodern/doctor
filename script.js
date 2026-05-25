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
// ১. ডিজিটাল ঘড়ি
function updateClock() {
    const now = new Date();
    document.getElementById('digitalClock').innerText = now.toLocaleTimeString();
    document.getElementById('currentDate').innerText = now.toLocaleDateString('bn-BD', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}
setInterval(updateClock, 1000);

// ২. স্টপওয়াচ/টাইমার
let timerInterval;
let seconds = 0;
function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        seconds++;
        let hrs = Math.floor(seconds / 3600);
        let mins = Math.floor((seconds % 3600) / 60);
        let secs = seconds % 60;
        document.getElementById('timerDisplay').innerText = 
            `${hrs.toString().padStart(2,'0')}:${mins.toString().padStart(2,'0')}:${secs.toString().padStart(2,'0')}`;
    }, 1000);
}
function stopTimer() { clearInterval(timerInterval); }
function resetTimer() { clearInterval(timerInterval); seconds = 0; document.getElementById('timerDisplay').innerText = "00:00:00"; }

// ৩. বয়স ক্যালকুলেটর
function calculateAge() {
    const birthDate = new Date(document.getElementById('birthDate').value);
    const today = new Date();
    if (!birthDate.getTime()) return;
    
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
    document.getElementById('ageResult').innerText = `আপনার বর্তমান বয়স: ${age} বছর`;
}

// ৪. গ্লোবাল ডাক্তার সার্চ লজিক
function globalDoctorSearch() {
    const query = document.getElementById('doctorSearchInput').value.toLowerCase();
    const resultsDiv = document.getElementById('searchResults');
    resultsDiv.innerHTML = "";
    
    if (query.length < 2) return;

    // doctorsData আসবে doctors_data.js থেকে
    const filtered = doctorsData.filter(d => d.name.toLowerCase().includes(query));

    filtered.forEach(doc => {
        const div = document.createElement('div');
        div.className = "search-item";
        const statusClass = doc.status === "OFF" ? "status-off" : "status-on";
        const statusText = doc.status === "OFF" ? "আজ চেম্বার বন্ধ" : "চেম্বার খোলা";
        
        div.innerHTML = `
            <div>
                <strong>${doc.name}</strong> <br>
                <small>${doc.specialty} | বসার দিন: ${doc.days}</small>
            </div>
            <div class="${statusClass}">${statusText}</div>
        `;
        resultsDiv.appendChild(div);
    });
}
