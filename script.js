/* 
================================================================
   KHAJA BADRUDDOJA MODERN HOSPITAL - MASTER SCRIPT
   সাপোর্ট: ডিজিটাল ঘড়ি, এডভান্সড অ্যাডমিন কন্ট্রোল, ফি ও শিডিউল লজিক
================================================================
*/

// --- ১. গ্লোবাল ভেরিয়েবলসমূহ ---
let currentDayDoctors = [];
let activeDayName = '';
const daysArray = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const bnDays = {'Saturday':'শনিবার','Sunday':'রবিবার','Monday':'সোমবার','Tuesday':'মঙ্গলবার','Wednesday':'বুধবার','Thursday':'বৃহস্পতিবার','Friday':'শুক্রবার'};

// --- ২. ডিজিটাল ঘড়ি ও তারিখ (সব পেজের জন্য) ---
function startClock() {
    const clockEl = document.getElementById('digitalClock');
    const dateEl = document.getElementById('currentDate');
    
    setInterval(() => {
        const now = new Date();
        if (clockEl) clockEl.innerText = now.toLocaleTimeString('en-US', { hour12: true });
        if (dateEl) {
            dateEl.innerText = now.toLocaleDateString('bn-BD', { 
                weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
            });
        }
    }, 1000);
}

// --- ৩. রানিং হেডলাইন কন্ট্রোল ---
function loadHeadline() {
    const savedHeadline = localStorage.getItem('hospitalHeadline');
    const marquee = document.getElementById('mainMarquee');
    if (marquee && savedHeadline) {
        marquee.innerText = savedHeadline;
    }
}

function updateHeadline() {
    const text = document.getElementById('inpHeadline').value;
    if (text) {
        localStorage.setItem('hospitalHeadline', text);
        alert("হেডলাইন আপডেট হয়েছে!");
        location.reload();
    }
}

function clearHeadline() {
    localStorage.removeItem('hospitalHeadline');
    alert("হেডলাইন মুছে ফেলা হয়েছে।");
    location.reload();
}

// --- ৪. ফি ম্যানেজমেন্ট (সেটিং পেজ) ---
function loadDocsForFee() {
    const dept = document.getElementById('feeDeptSelect').value;
    const docSelect = document.getElementById('feeDocSelect');
    docSelect.innerHTML = '<option value="">-- ডাক্তার নির্বাচন করুন --</option>';
    
    if(!dept) { docSelect.disabled = true; return; }

    const filtered = doctorFeesData.filter(d => d.specialty.includes(dept));
    filtered.forEach(d => {
        let opt = document.createElement('option');
        opt.value = d.name; opt.text = d.name;
        docSelect.appendChild(opt);
    });
    docSelect.disabled = false;
}

function loadSelectedDocFees() {
    const name = document.getElementById('feeDocSelect').value;
    const editArea = document.getElementById('feeEditArea');
    if(!name) { editArea.classList.add('hidden'); return; }

    const customFees = JSON.parse(localStorage.getItem('customFees')) || {};
    const baseDoc = doctorFeesData.find(d => d.name === name);

    document.getElementById('editFee1').value = customFees[name]?.firstFee || baseDoc.firstFee;
    document.getElementById('editFee2').value = customFees[name]?.secondFee || baseDoc.secondFee;
    editArea.classList.remove('hidden');
}

function saveUpdatedFees() {
    const name = document.getElementById('feeDocSelect').value;
    const f1 = document.getElementById('editFee1').value;
    const f2 = document.getElementById('editFee2').value;
    let customFees = JSON.parse(localStorage.getItem('customFees')) || {};
    
    customFees[name] = { firstFee: f1, secondFee: f2 };
    localStorage.setItem('customFees', JSON.stringify(customFees));
    alert("ফি সেভ হয়েছে!");
}

// --- ৫. চেম্বার ও রুম কন্ট্রোল (এডভান্সড সেটিং) ---
function loadDocsForSch() {
    const dept = document.getElementById('schDeptSelect').value;
    const docSelect = document.getElementById('schDocSelect');
    docSelect.innerHTML = '<option value="">-- ডাক্তার নির্বাচন করুন --</option>';
    if(!dept) { docSelect.disabled = true; return; }

    const filtered = doctorFeesData.filter(d => d.specialty.includes(dept));
    filtered.forEach(d => {
        let opt = document.createElement('option');
        opt.value = d.name; opt.text = d.name;
        docSelect.appendChild(opt);
    });
    docSelect.disabled = false;
}

function loadWeeklyControl() {
    const name = document.getElementById('schDocSelect').value;
    const area = document.getElementById('weeklyControlArea');
    area.innerHTML = "";
    if(!name) { area.classList.add('hidden'); return; }

    daysArray.forEach(day => {
        let docs = JSON.parse(localStorage.getItem(`doctors_${day}`)) || [];
        let doc = docs.find(d => d.name === name);

        if(doc) {
            const card = document.createElement('div');
            card.className = 'day-admin-card';
            const isOff = doc.status === 'OFF';
            card.innerHTML = `
                <div style="background:#004A99; color:white; padding:5px; border-radius:5px;">${bnDays[day]}</div>
                <div style="margin:10px 0;">
                    রুম: <input type="text" id="rm_${day}" value="${doc.room}" style="width:60px; text-align:center;">
                    <button onclick="saveSingleRoom('${day}', '${name}')" class="btn-save-sm">রুম সেভ</button>
                </div>
                <button onclick="toggleDayChamber('${day}', '${name}')" class="action-btn ${isOff ? 'btn-on' : 'btn-off'}" style="width:100%;">
                    ${isOff ? 'চেম্বার খুলুন' : 'চেম্বার বন্ধ করুন'}
                </button>
            `;
            area.appendChild(card);
        }
    });
    area.classList.remove('hidden');
}

function saveSingleRoom(day, name) {
    let docs = JSON.parse(localStorage.getItem(`doctors_${day}`));
    let idx = docs.findIndex(d => d.name === name);
    docs[idx].room = document.getElementById(`rm_${day}`).value;
    localStorage.setItem(`doctors_${day}`, JSON.stringify(docs));
    alert("রুম আপডেট হয়েছে!");
}

function toggleDayChamber(day, name) {
    let docs = JSON.parse(localStorage.getItem(`doctors_${day}`));
    let idx = docs.findIndex(d => d.name === name);
    docs[idx].status = (docs[idx].status === 'ON') ? 'OFF' : 'ON';
    localStorage.setItem(`doctors_${day}`, JSON.stringify(docs));
    loadWeeklyControl(); // UI Refresh
}

// --- ৬. শিডিউল পেজ লজিক (Sat-Fri) ---
function initPage(day) {
    activeDayName = day;
    startClock();
    loadHeadline();
    const saved = localStorage.getItem(`doctors_${activeDayName}`);
    currentDayDoctors = saved ? JSON.parse(saved) : (initialScheduleData[activeDayName] || []);
    renderDailyTable();
}

function renderDailyTable() {
    const tableBody = document.getElementById('tableBody');
    if(!tableBody) return;
    tableBody.innerHTML = "";
    let count = 0;

    ["সকাল", "বিকেল"].forEach(shift => {
        const shiftDocs = currentDayDoctors.filter(d => d.shift === shift);
        if(shiftDocs.length > 0) {
            tableBody.innerHTML += `<tr><td colspan="6" class="shift-title">${shift} শিফট</td></tr>`;
            shiftDocs.forEach(doc => {
                count++;
                const isOff = doc.status === 'OFF';
                tableBody.innerHTML += `
                    <tr class="${isOff ? 'closed-row' : ''}">
                        <td>${count}</td>
                        <td><strong>${doc.name}</strong></td>
                        <td>${doc.specialty}</td>
                        <td>${doc.origin}</td>
                        <td style="text-align:center; font-weight:bold;">${doc.room}</td>
                        <td>${doc.time}</td>
                    </tr>`;
            });
        }
    });
}

// --- ৭. সিস্টেম ফাংশন ---
function resetSystem() {
    if(confirm("সব সেটিং এবং আপডেট করা ডাটা মুছে যাবে! আপনি কি নিশ্চিত?")) {
        localStorage.clear();
        location.reload();
    }
}

function initHomePage() {
    startClock();
    loadHeadline();
}

// নিরাপত্তা চেক
function checkAccess() {
    const access = sessionStorage.getItem('adminIn');
    if(!access) {
        const pin = prompt("অ্যাডমিন পিন দিন:");
        if(pin === "1234") { sessionStorage.setItem('adminIn', 'true'); }
        else { alert("ভুল পিন!"); window.location.href = "index.html"; }
    }
}
