/* 
================================================================
   KHAJA BADRUDDOJA MODERN HOSPITAL - MAIN JAVASCRIPT
================================================================
*/

// ১. পেজ লোড হওয়ার সাথে সাথে যা যা চলবে
document.addEventListener('DOMContentLoaded', () => {
    // হোম পেজের ঘড়ি সচল করা (যদি ঘড়ির আইডি থাকে)
    if (document.getElementById('digitalClock')) {
        updateClock();
        setInterval(updateClock, 1000);
    }
});

/* -----------------------------------------------------------
   A. দিনভিত্তিক টেবিল ফিল্টার (শনি - শুক্রবার পেজের জন্য)
----------------------------------------------------------- */
function filterDoctors() {
    const filterValue = document.getElementById("deptFilter").value.toLowerCase();
    const rows = document.querySelectorAll(".doctor-row");

    rows.forEach(row => {
        const specialty = row.getAttribute("data-dept").toLowerCase();
        // যদি 'সকল বিভাগ' সিলেক্ট থাকে অথবা বিভাগ মিলে যায়
        if (filterValue === "all" || specialty.includes(filterValue)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}

/* -----------------------------------------------------------
   B. ডিজিটাল ঘড়ি ও তারিখ (হোম পেজ)
----------------------------------------------------------- */
function updateClock() {
    const clockElement = document.getElementById('digitalClock');
    const dateElement = document.getElementById('currentDate');

    if (clockElement && dateElement) {
        const now = new Date();
        // সময়
        clockElement.innerText = now.toLocaleTimeString('en-US', { hour12: true });
        // তারিখ (বাংলায়)
        dateElement.innerText = now.toLocaleDateString('bn-BD', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    }
}

/* -----------------------------------------------------------
   C. স্টপওয়াচ / টাইমার (হোম পেজ)
----------------------------------------------------------- */
let timerInterval;
let seconds = 0;

function startTimer() {
    const timerDisplay = document.getElementById('timerDisplay');
    if (!timerDisplay) return;

    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        seconds++;
        let hrs = Math.floor(seconds / 3600);
        let mins = Math.floor((seconds % 3600) / 60);
        let secs = seconds % 60;
        
        timerDisplay.innerText = 
            `${hrs.toString().padStart(2,'0')}:${mins.toString().padStart(2,'0')}:${secs.toString().padStart(2,'0')}`;
    }, 1000);
}

function stopTimer() { 
    clearInterval(timerInterval); 
}

function resetTimer() { 
    clearInterval(timerInterval); 
    seconds = 0; 
    const timerDisplay = document.getElementById('timerDisplay');
    if (timerDisplay) timerDisplay.innerText = "00:00:00"; 
}

/* -----------------------------------------------------------
   D. বয়স ক্যালকুলেটর (হোম পেজ)
----------------------------------------------------------- */
function calculateAge() {
    const birthInput = document.getElementById('birthDate').value;
    const resultElement = document.getElementById('ageResult');
    
    if (!birthInput) {
        resultElement.innerText = "দয়া করে জন্ম তারিখ সিলেক্ট করুন।";
        return;
    }

    const birthDate = new Date(birthInput);
    const today = new Date();
    
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    resultElement.innerHTML = `<span style="color:#0056b3">আপনার বর্তমান বয়স: ${age} বছর</span>`;
}

/* -----------------------------------------------------------
   E. গ্লোবাল ডাক্তার সার্চ লজিক (হোম পেজ)
----------------------------------------------------------- */
function globalDoctorSearch() {
    const query = document.getElementById('doctorSearchInput').value.toLowerCase();
    const resultsDiv = document.getElementById('searchResults');
    
    if (!resultsDiv) return;
    resultsDiv.innerHTML = "";
    
    // যদি সার্চ বক্সে কিছু না থাকে বা ২ অক্ষরের কম থাকে
    if (query.length < 2) return;

    // doctorsData গ্লোবাল অ্যারে থেকে সার্চ (যা doctors_data.js এ আছে)
    const filtered = doctorsData.filter(doc => 
        doc.name.toLowerCase().includes(query) || 
        doc.specialty.toLowerCase().includes(query)
    );

    if (filtered.length === 0) {
        resultsDiv.innerHTML = "<p style='padding:15px; color:red;'>কোনো ডাক্তার পাওয়া যায়নি।</p>";
        return;
    }

    filtered.forEach(doc => {
        const div = document.createElement('div');
        div.className = "search-item";
        
        // স্ট্যাটাস কন্ট্রোল (চেম্বার খোলা না বন্ধ)
        const isOff = doc.status.toUpperCase() === "OFF";
        const statusClass = isOff ? "status-off" : "status-on";
        const statusText = isOff ? "আজ চেম্বার বন্ধ" : "চেম্বার খোলা";
        
        div.innerHTML = `
            <div style="flex: 1;">
                <strong>${doc.name}</strong> <br>
                <small>${doc.specialty} <br> বসার দিন: ${doc.days}</small>
            </div>
            <div class="${statusClass}" style="text-align:right; font-size: 13px;">
                ${statusText} <br>
                <span style="font-size:11px; color:#666;">Room: ${doc.room || 'N/A'}</span>
            </div>
        `;
        resultsDiv.appendChild(div);
    });
}
