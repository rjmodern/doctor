// ১. শনিবারের ডাটা
const initialSaturdayDocs = [
    { name: "Doctor Admin", specialty: "অর্থোপেডিক বিশেষজ্ঞ", origin: "Dhaka", room: "222", time: "8:00 AM - 8:00 PM", shift: "সকাল", status: "ON" },
    { name: "অধ্যাপক ডা. আবদুল হামিদ", specialty: "বক্ষব্যাধি ও মেডিসিন", origin: "সিটি মেডিকেল", room: "145", time: "10:00 AM - 3:00 PM", shift: "সকাল", status: "ON" },
    { name: "অধ্যাপক ডা. আশিষ কুমার ঘোষ", specialty: "নবজাতক, শিশু ও রক্তরোগ", origin: "ক্যান্সার ইনস্টিটিউট", room: "146", time: "10:00 AM - 2:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা. জাহিদাতুন নিসা", specialty: "গাইনী বিশেষজ্ঞ", origin: "সোহরাওয়ার্দী", room: "119", time: "10:00 AM - 8:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা. সাব্বির আহমেদ চৌধুরী", specialty: "ডায়াবেটিস ও মেডিসিন", origin: "সলিমুল্লাহ মেডিকেল", room: "155", time: "10:00 AM - 8:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা. নারগীছ আক্তার", specialty: "স্ত্রীরোগ ও প্রসূতীবিদ্যা", origin: "CMH", room: "121", time: "10:00 AM - 2:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা. নিগার সুলতানা", specialty: "গাইনী ও প্রসূতি রোগ", origin: "ঢামেক", room: "159", time: "10:00 AM - 7:00 AM", shift: "সকাল", status: "ON" },
    { name: "ডাঃ খালেদা আক্তার হ্যাপি", specialty: "নকজাতক ও শিশু", origin: "তাজউদ্দিন মেডিকেল", room: "115", time: "10:00 AM - 8:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা. মোঃ শরিফুল ইসলাম রুদ্র", specialty: "অর্থোপেডিক ও ট্রমা", origin: "পিজি হাসপাতাল", room: "147", time: "10:00 AM - 8:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা. মো: মোস্তাফিজুর রহমান", specialty: "ডার্মাটোলজিস্ট", origin: "বেভারলি হিলস", room: "116", time: "10:00 AM - 2:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডাঃ মোঃ সুজন মাহমুদ", specialty: "চক্ষু ও মাথা ব্যথা", origin: "কেবিএমএইচ", room: "N/A", time: "9:00 AM - 9:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা. এম. আরফান মাহমুদ", specialty: "মুখ ও দন্ত রোগ", origin: "সোহরাওয়ার্দী হাসপাতাল", room: "N/A", time: "10:00 AM - 2:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা. রিজিয়া পারভীন শিখা", specialty: "ডেন্টাল সার্জন", origin: "ঢাকা ডেন্টাল", room: "N/A", time: "11:00 AM - 1:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা. মুহাম্মদ হাসিফ", specialty: "ফিজিওথেরাপি", origin: "গণস্বাস্থ্য", room: "N/A", time: "9:00 AM - 9:00 PM", shift: "সকাল", status: "ON" },
    { name: "পুষ্টিবিদ সায়মা আক্তার লিজা", specialty: "নিউট্রিশন ও ডায়েট", origin: "ইবনে সিনা মেডিকেল", room: "-1", time: "10:00 AM - 8:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা. রাবেয়া জামান নাদিয়া", specialty: "সনোলজিস্ট", origin: "কেবিএমএইচ", room: "103", time: "10:00 AM - 8:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডাঃ মোঃ ফারুক রহমান মজুমদার", specialty: "হৃদরোগ ও মেডিসিন", origin: "হৃদরোগ ইনষ্টিটিউট", room: "160", time: "10:00 AM - 6:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা. হাসনাইন সরকার (পি.টি.)", specialty: "ফিজিওথেরাপি", origin: "কেবিএমএইচ", room: "N/A", time: "10:00 AM - 6:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা:নিপা কর্মকার", specialty: "স্ত্রীরোগ ও প্রসূতীবিদ্যা", origin: "মির্জাপুর স্বাস্থ্য কমপ্লেক্স", room: "159", time: "3:00 AM - 8:00 AM", shift: "সকাল", status: "ON" },
    { name: "অধ্যাপক ডা. শিশির রঞ্জন দাস", specialty: "নবজাতক ও শিশু", origin: "ঢামেক", room: "115", time: "6:00 PM - 9:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. সৈয়দ রেজওয়ান কবির", specialty: "হৃদরোগ ও মেডিসিন", origin: "ঢামেক", room: "N/A", time: "3:00 PM - 9:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. হুমায়ূন কবির কল্লোল", specialty: "জেনারেল সার্জন", origin: "ঢামেক", room: "144", time: "6:00 PM - 9:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. সাব্বির আহমেদ ভূঁইয়া", specialty: "নবজাতক ও শিশু", origin: "তাজউদ্দিন মেডিকেল", room: "158", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. অর্পন কুমার বসাক", specialty: "চর্ম ও যৌন রোগ", origin: "খাজা ইউনুস আলী", room: "121", time: "4:00 PM - 7:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. মাহমুদুর রহমান", specialty: "অর্থোপেডিক সার্জন", origin: "পঙ্গু হাসপাতাল", room: "148", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. মোঃ জাহাঙ্গীর আলম", specialty: "অর্থোপেডিক্স ও স্পাইন", origin: "পঙ্গু হাসপাতাল", room: "118", time: "3:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডাঃ মোঃ সাইয়েদুল আশিক", specialty: "লিভার ও মেডিসিন", origin: "তাজউদ্দিন মেডিকেল", room: "-2", time: "3:30 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডাঃ কে. এম. রেজাউল হক", specialty: "নাক, কান ও গলা", origin: "ডেল্টা মেডিকেল", room: "120", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "সহযোগী অধ্যাপক ডা. তানিয়া হক", specialty: "চর্ম ও যৌন বিশেষজ্ঞ", origin: "গণ-স্বাস্থ্য মেডিকেল", room: "N/A", time: "3:00 PM - 6:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. ফয়সাল বিন মহসিন", specialty: "নাক, কান, গলা", origin: "বর্ডার গার্ড হাসপাতাল", room: "149", time: "5:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. মোঃ আসিফুর রহমান আসিফ", specialty: "মেডিসিন ও হৃদরোগ", origin: "ঢামেক", room: "145", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. শরমিন আক্তার", specialty: "স্ত্রী ও প্রসূতি বিদ্যা", origin: "মিটফোর্ড হাসপাতাল", room: "159", time: "5:00 PM - 9:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. অন্তরা পাল", specialty: "গাইনী ও ক্যান্সার", origin: "বাংলাদেশ মেডিকেল", room: "146", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "সহকারী অধ্যাপক ডা. মাহফুজ উল্লাহ", specialty: "চক্ষু বিশেষজ্ঞ", origin: "ঢামেক", room: "N/A", time: "5:00 PM - 6:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. মোঃ রেজাউল হক (রেজা)", specialty: "ডেন্টাল সার্জন", origin: "সোহরাওয়ার্দী হাসপাতাল", room: "N/A", time: "4:00 PM - 9:00 PM", shift: "বিকেল", status: "ON" },
    { name: "KBMH Others", specialty: "others", origin: "KBMH", room: "102", time: "12:00 PM - 11:59 AM", shift: "বিকেল", status: "ON" },
    { name: "ডাঃ মোঃ রিপন মিয়া", specialty: "নাক কাল গলা ও হেড সার্জন", origin: "ডেলটা মেডিকেল", room: "120", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" }
];

// === ২. রবিবারের পূর্ণাঙ্গ ডাটা তালিকা ===
const initialSundayDocs = [
    // সকাল (Morning Shift)
    { name: "ডা. মোফাজ্জলুল হক", specialty: "অর্থোপেডিক ও ট্রমা সার্জন", origin: "সিটি মেডিকেল কলেজ", room: "118", time: "10:00 AM - 1:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা. মাহমুদা খাতুন", specialty: "গাইনী বিশেষজ্ঞ ও সার্জন", origin: "পিজি হাসপাতাল", room: "119", time: "10:00 AM - 3:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা. সুরজিৎ সাহা", specialty: "হাড় জোড়া, হাড় ভাঙ্গা ও বাত ব্যথা", origin: "সোহরাওয়ার্দী হাসপাতাল", room: "118", time: "10:00 AM - 7:00 AM", shift: "সকাল", status: "ON" },
    { name: "ডা. মোঃ ইমাদুল ইসলাম (মিঠু)", specialty: "মেডিসিন ও ডায়াবেটিস বিশেষজ্ঞ", origin: "পিজি হাসপাতাল", room: "117", time: "10:00 AM - 3:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা. নারগীছ আক্তার", specialty: "স্ত্রীরোগ ও প্রসূতীবিদ্যা বিশেষজ্ঞ", origin: "CMH", room: "121", time: "10:00 AM - 2:00 PM", shift: "সকাল", status: "ON" },
    { name: "সহকারী অধ্যাপক ডা. মোঃ মিরাজ হোসেন", specialty: "পেইন মেডিসিন বিশেষজ্ঞ", origin: "খাজা ইউনুস আলী মেডিকেল", room: "149", time: "10:00 AM - 8:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডাঃ খালেদা আক্তার হ্যাপি", specialty: "নকজাতক ও শিশুরোগ বিশেষজ্ঞ", origin: "তাজউদ্দিন মেডিকেল", room: "115", time: "10:00 AM - 1:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডাঃ মোঃ সুজন মাহমুদ", specialty: "চক্ষু ও মাথা ব্যথা রোগে অভিজ্ঞ", origin: "কেবিএমএইচ", room: "N/A", time: "9:00 AM - 9:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা. মুহাম্মদ হাসিফ", specialty: "ফিজিওথেরাপি বিশেষজ্ঞ", origin: "গণস্বাস্থ্য", room: "N/A", time: "9:00 AM - 9:00 PM", shift: "সকাল", status: "ON" },
    { name: "পুষ্টিবিদ সায়মা আক্তার লিজা", specialty: "নিউট্রিশন ও ডায়েট কনসালটেন্ট", origin: "ইবনে সিনা মেডিকেল", room: "-1", time: "10:00 AM - 8:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা. রুমা আক্তার", specialty: "গাইনী রোগ ও সনোলজিস্ট", origin: "কেবিএমএইচ", room: "106", time: "10:00 AM - 8:00 PM", shift: "সকাল", status: "ON" },
    { name: "প্রফেসর ডা. আবুল হাসনাত মোঃ জাফর", specialty: "হৃদরোগ, মেডিসিন ও বাতজ্বর", origin: "জাতীয় হৃদরোগ ইনস্টিটিউট", room: "145", time: "10:00 AM - 2:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা. মোঃ শোয়েব মাহমুদ চৌধুরী", specialty: "মেডিসিন ও গ্যাস্ট্রোএন্টারোলজী", origin: "সিটি মেডিকেল কলেজ", room: "121", time: "10:00 AM - 3:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা:এস এম নাজমুল হাসান", specialty: "চক্ষু ও মাথা ব্যাথা অভিজ্ঞ", origin: "কেবিএমএইচ", room: "N/A", time: "9:00 AM - 2:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা. হাসনাইন সরকার (পি.টি.)", specialty: "ফিজিওথেরাপি কনসালন্টে", origin: "কেবিএমএইচ", room: "N/A", time: "10:00 AM - 6:00 PM", shift: "সকাল", status: "ON" },

    // বিকেল (Afternoon Shift)
    { name: "অধ্যাপক ডা. মোঃ আরিফ চৌধুরী", specialty: "চর্ম, যৌন ও এলার্জি বিশেষজ্ঞ", origin: "আশিয়ান মেডিকেল", room: "160", time: "4:00 PM - 7:00 PM", shift: "বিকেল", status: "ON" },
    { name: "অধ্যাপক ডা. মোঃ মুইদুল হক", specialty: "মেডিসিন, বক্ষব্যাধি ও হৃদরোগ", origin: "ইন্টারন্যাশনাল মেডিকেল", room: "116", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "অধ্যাপক ডা. শাহ্ মোঃ ফয়সাল", specialty: "অর্থোপেডিক বিশেষজ্ঞ ও সার্জন", origin: "এনাম মেডিকেল", room: "157", time: "5:00 PM - 9:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. আহমেদ কবির চৌধুরী", specialty: "জেনারেল ও কোলোরেক্টাল সার্জন", origin: "সোহরাওয়ার্দী হাসপাতাল", room: "121", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "সহযোগী অধ্যাপক ডা. আয়শা সিদ্দিকা", specialty: "গাইনী বিশেষজ্ঞ ও সার্জন", origin: "স্যার সলিমুল্লাহ মেডিকেল", room: "119", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. আশিক আহমেদ", specialty: "অর্থোপেডিক, ট্রমা ও স্পাইন", origin: "পঙ্গু হাসপাতাল", room: "146", time: "3:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. সাইফুল ইসলাম", specialty: "নাক, কান, গলা সার্জন", origin: "জাতীয় নাক কান গলা ইনস্টিটিউট", room: "145", time: "3:00 PM - 6:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. জুলকার নঈমূল ইসলাম (সোহেল)", specialty: "কিডনী, মূত্রনালী ও ইউরোলজী", origin: "জাতীয় কিডনী ইনস্টিটিউট", room: "144", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "সহকারি অধ্যাপক ডা. তাহমিদ মাহবুব", specialty: "গ্যাস্ট্রো-লিভার ও মেডিসিন", origin: "শেখ রাসেল গ্যাস্ট্রোলিভার", room: "-2", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "সহকারী অধ্যাপক ডাঃ মোঃ কায়সারুল ইসলাম", specialty: "মেডিসিন, ডায়াবেটিস ও হৃদরোগ", origin: "তাজউদ্দিন মেডিকেল", room: "117", time: "5:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "সহকারী অধ্যাপক ডাঃ মোঃ আজহারুল ইসলাম", specialty: "মেডিসিন ও হৃদরোগ বিশেষজ্ঞ", origin: "জাতীয় হৃদরোগ হাসপাতাল", room: "145", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "সহযোগী অধ্যাপক ডা. মুনতাসির মাহবুব", specialty: "নাক, কান, গলা ও থাইরয়েড", origin: "খাজা ইউনুস আলী মেডিকেল", room: "158", time: "5:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. ফারজানা আক্তার দিতি", specialty: "শিশুরোগ বিশেষজ্ঞ", origin: "তাজউদ্দিন মেডিকেল", room: "-2", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. মোঃ রাসেল ভূঁইয়া", specialty: "নবজাতক, শিশু ও কিশোর রোগ", origin: "ঢাকা মেডিকেল কলেজ", room: "155", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "সহকারী অধ্যাপক ডা. এম.এম. আব্দুল্লাহ আল মামুন", specialty: "অর্থোপেডিক সার্জারী ও ট্রমা", origin: "পঙ্গু হাসপাতাল", room: "118", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. তাহমিদা সারমিন", specialty: "চর্ম, যৌন ও এলার্জি বিশেষজ্ঞ", origin: "তাজউদ্দিন মেডিকেল", room: "147", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. সুলতান মাহমুদ", specialty: "মেডিসিন, নিউরো ও ডায়াবেটিস", origin: "ঢাকা মেডিকেল কলেজ", room: "115", time: "5:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. নাছিমা বেগম", specialty: "গাইনী বিশেষজ্ঞ ও সার্জন", origin: "রংপুর মেডিকেল কলেজ", room: "159", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. এম. আরফান মাহমুদ", specialty: "মুখ ও দন্ত রোগ বিশেষজ্ঞ", origin: "সোহরাওয়ার্দী হাসপাতাল", room: "N/A", time: "1:00 PM - 4:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. খন্দকার আবুল হোসাইন", specialty: "ফিজিওথেরাপি বিশেষজ্ঞ", origin: "পঙ্গু হাসপাতাল", room: "N/A", time: "4:30 PM - 8:30 PM", shift: "বিকেল", status: "ON" },
    { name: "KBMH Others", specialty: "others", origin: "KBMH", room: "102", time: "12:00 PM - 11:59 AM", shift: "বিকেল", status: "ON" },
    { name: "ডাঃ মোঃ রিপন মিয়া", specialty: "নাক কাল গলা ও হেড-নেক সার্জন", origin: "ডেল্টা মেডিকেল", room: "120", time: "4:00 PM - 7:00 PM", shift: "বিকেল", status: "ON" }
];

// ৩. সোমবারের ডাটা
const initialMondayDocs = [
    { name: "ডা. প্রফুল্ল চন্দ্র নাথ তালুকদার", specialty: "মেডিসিন, হৃদরোগ ও বক্ষব্যাধি", origin: "নোয়াখালী মেডিকেল", room: "117", time: "10:00 AM - 3:00 PM", shift: "সকাল", status: "ON" },
    { name: "অধ্যাপক ডা. আশিষ কুমার ঘোষ", specialty: "নবজাতক, শিশু ও রক্তরোগ", origin: "জাতীয় ক্যান্সার ইনস্টিটিউট", room: "146", time: "10:00 AM - 2:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা. মাহমুদা খাতুন", specialty: "গাইনী বিশেষজ্ঞ ও সার্জন", origin: "পিজি হাসপাতাল", room: "119", time: "10:00 AM - 8:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা. সাব্বির আহমেদ চৌধুরী", specialty: "ডায়াবেটিস ও মেডিসিন", origin: "সলিমুল্লাহ মেডিকেল", room: "155", time: "10:00 AM - 8:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা. সুরজিৎ সাহা", specialty: "হাড় জোড়া ও বাত ব্যথা", origin: "সোহরাওয়ার্দী হাসপাতাল", room: "118", time: "10:00 AM - 2:00 PM", shift: "সকাল", status: "ON" },
    { name: "সহযোগী অধ্যাপক ডা. এ.কে এম তারিকুল হাসান", specialty: "কিডনী ও মেডিসিন বিশেষজ্ঞ", origin: "ইষ্ট-ওয়েষ্ট মেডিকেল", room: "120", time: "9:00 AM - 2:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা. নারগীছ আক্তার", specialty: "স্ত্রীরোগ ও প্রসূতীবিদ্যা", origin: "CMH", room: "121", time: "10:00 AM - 2:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডাঃ খালেদা আক্তার হ্যাপি", specialty: "নকজাতক ও শিশু", origin: "তাজউদ্দিন মেডিকেল", room: "115", time: "10:00 AM - 1:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা. মোঃ নাজমুল হাসান", specialty: "অর্থোপেডিক ও ট্রামা", origin: "পিজি হাসপাতাল", room: "114", time: "11:00 AM - 9:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডাঃ মোঃ সুজন মাহমুদ", specialty: "চক্ষু ও মাথা ব্যথা", origin: "কেবিএমএইচ", room: "N/A", time: "9:00 AM - 9:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা. নাজমুন্নাহার সাথী", specialty: "মেডিসিন, ডায়াবেটিস ও হরমোন", origin: "মিটফোর্ড হাসপাতাল", room: "154", time: "10:00 AM - 8:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা. এম. আরফান মাহমুদ", specialty: "মুখ ও দন্ত রোগ", origin: "সোহরাওয়ার্দী হাসপাতাল", room: "N/A", time: "10:00 AM - 2:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা. রিজিয়া পারভীন শিখা", specialty: "ডেন্টাল সার্জন", origin: "ঢাকা ডেন্টাল", room: "N/A", time: "11:00 AM - 1:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা. মুহাম্মদ হাসিফ", specialty: "ফিজিওথেরাপি বিশেষজ্ঞ", origin: "গণস্বাস্থ্য", room: "N/A", time: "9:00 AM - 9:00 PM", shift: "সকাল", status: "ON" },
    { name: "পুষ্টিবিদ সায়মা আক্তার লিজা", specialty: "নিউট্রিশন ও ডায়েট", origin: "ইবনে সিনা মেডিকেল", room: "-1", time: "10:00 AM - 8:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা. রুমা আক্তার", specialty: "গাইনী রোগ ও সনোলজিস্ট", origin: "কেবিএমএইচ", room: "106", time: "10:00 AM - 1:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা. হাসনাইন সরকার (পি.টি.)", specialty: "ফিজিওথেরাপি কনসালন্টে", origin: "কেবিএমএইচ", room: "N/A", time: "10:00 AM - 6:00 PM", shift: "সকাল", status: "ON" },
    { name: "অধ্যাপক ডা. শিশির রঞ্জন দাস", specialty: "নবজাতক ও শিশু বিশেষজ্ঞ", origin: "ঢাকা মেডিকেল", room: "115", time: "6:00 PM - 9:00 PM", shift: "বিকেল", status: "ON" },
    { name: "অধ্যাপক ডা. শাহ্ মোঃ ফয়সাল", specialty: "অর্থোপেডিক বিশেষজ্ঞ ও সার্জন", origin: "এনাম মেডিকেল", room: "157", time: "5:00 PM - 9:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. সাব্বির আহমেদ ভূঁইয়া", specialty: "নবজাতক, শিশু ও কিশোর", origin: "তাজউদ্দিন মেডিকেল", room: "158", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "সহযোগী অধ্যাপক ডা. মোঃ সুমন রহমান", specialty: "জেনারেল ও ল্যাপারোস্কপিক", origin: "মনসুর আলী মেডিকেল", room: "144", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. সাইফুল ইসলাম", specialty: "নাক, কান, গলা সার্জন", origin: "জাতীয় ইএনটি ইনস্টিটিউট", room: "145", time: "5:00 PM - 9:00 PM", shift: "বিকেল", status: "ON" },
    { name: "সহযোগী অধ্যাপক ডা. অরুন জ্যোতি তরফদার", specialty: "গ্যাস্ট্রোলিভার ও মেডিসিন", origin: "ময়মনসিংহ মেডিকেল", room: "116", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা:সাহারা আরবী", specialty: "Obstetrics and Gynecology", origin: "ডিজিএইচএস/কেবিএমএইচ", room: "148", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা: তানিয়া আক্তার বিথী", specialty: "গাইনী বিশেষজ্ঞ", origin: "কেবিএমএইচ", room: "159", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. মোঃ আমান উল্লাহ কবির (মিলটন)", specialty: "হাড় জোড়া ও আঘাত জনিত রোগ", origin: "পিজি হাসপাতাল", room: "118", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "অধ্যাপক ডা. সোলায়মান হোসেন", specialty: "হৃদরোগ ও মেডিসিন", origin: "এনাম মেডিকেল", room: "117", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. মোঃ শাহজাদা তাবরেজ", specialty: "বক্ষব্যাধি মেডিসিন বিশেষজ্ঞ", origin: "মুগদা মেডিকেল", room: "147", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. ফারzana আক্তার দিতি", specialty: "শিশুরোগ বিশেষজ্ঞ", origin: "তাজউদ্দিন মেডিকেল", room: "-2", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "সহযোগী অধ্যাপক ডা. তানিয়া হক", specialty: "চর্ম ও যৌন বিশেষজ্ঞ", origin: "গণ-স্বাস্থ্য মেডিকেল", room: "N/A", time: "4:00 PM - 7:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. মো. জাহিদ হাসান সিদ্দিক", specialty: "অর্থোপেডিক ও ট্রমা সার্জন", origin: "পঙ্গু হাসপাতাল", room: "118", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. মোঃ নাজমুল হাসান", specialty: "অর্থোপেডিক ও ট্রামা", origin: "পিজি হাসপাতাল", room: "114", time: "6:00 PM - 9:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. মোঃ রাকিবুল হাসান", specialty: "চর্ম, যৌন ও এলার্জি", origin: "বঙ্গবন্ধু মেডিকেল (PG)", room: "121", time: "4:00 PM - 7:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. অনন্যা বিশ্বাস", specialty: "ওরাল এন্ড ডেন্টাল সার্জন", origin: "ঢাকা ডেন্টাল", room: "N/A", time: "3:00 PM - 7:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. খন্দকার আবুল হোসাইন", specialty: "ফিজিওথেরাপি বিশেষজ্ঞ", origin: "পঙ্গু হাসপাতাল", room: "N/A", time: "4:30 PM - 8:30 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. রাবেয়া জামান নাদিয়া", specialty: "সনোলজিস্ট ও জেনারেল", origin: "কেবিএমএইচ", room: "103", time: "5:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "KBMH Others", specialty: "others", origin: "KBMH", room: "102", time: "12:00 PM - 11:59 AM", shift: "বিকেল", status: "ON" },
    { name: "ডা আহসানুল কবির শিপলু", specialty: "Urology & Laparoscopic", origin: "Urologist", room: "149", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডাঃ তমাল পিটার ঘোষ", specialty: "হৃদরোগ ও মেডিসিন", origin: "জাতীয় হৃদরোগ ইনস্টিটিউট", room: "117", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" }
];
// === ৪. মঙ্গলবারের ডাটা ===
const initialTuesdayDocs = [
    // সকাল
    { name: "ডা. প্রফুল্ল চন্দ্র নাথ তালুকদার", specialty: "মেডিসিন, হৃদরোগ ও বক্ষব্যাধি", origin: "নোয়াখালী মেডিকেল", room: "117", time: "10:00 AM - 3:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা. মাহমুদা খাতুন", specialty: "গাইনী বিশেষজ্ঞ ও সার্জন", origin: "পিজি হাসপাতাল", room: "119", time: "10:00 AM - 3:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা. জাহিদাতুন নিসা", specialty: "গাইনী বিশেষজ্ঞ ও সার্জন", origin: "সোহরাওয়ার্দী হাসপাতাল", room: "119", time: "10:00 AM - 2:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা. নারগীছ আক্তার", specialty: "স্ত্রীরোগ ও প্রসূতীবিদ্যা", origin: "CMH", room: "121", time: "10:00 AM - 2:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা. ফারজানা আক্তার দিতি", specialty: "শিশুরোগ বিশেষজ্ঞ", origin: "তাজউদ্দিন মেডিকেল", room: "-2", time: "10:00 AM - 1:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা. মো: মোস্তাফিজুর রহমান", specialty: "ডার্মাটোলজিস্ট", origin: "বেভারলি হিলস", room: "116", time: "10:00 AM - 2:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা. মুহাম্মদ হাসিফ", specialty: "ফিজিওথেরাপি বিশেষজ্ঞ", origin: "গণস্বাস্থ্য", room: "N/A", time: "9:00 AM - 9:00 PM", shift: "সকাল", status: "ON" },
    { name: "পুষ্টিবিদ সায়মা আক্তার লিজা", specialty: "নিউট্রিশন ও ডায়েট", origin: "ইবনে সিনা মেডিকেল", room: "-1", time: "10:00 AM - 8:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা. রুমা আক্তার", specialty: "গাইনী রোগ ও সনোলজিস্ট", origin: "কেবিএমএইচ", room: "106", time: "10:00 AM - 1:00 PM", shift: "সকাল", status: "ON" },
    { name: "প্রফেসর ডা. আবুল হাসনাত মোঃ জাফর", specialty: "হৃদরোগ, মেডিসিন ও গ্যাস্ট্রো", origin: "জাতীয় হৃদরোগ হাসপাতাল", room: "145", time: "10:00 AM - 2:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা:এস এম নাজমুল হাসান", specialty: "চক্ষু ও মাথা ব্যথা", origin: "কেবিএমএইচ", room: "N/A", time: "9:00 AM - 2:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা. হাসনাইন সরকার (পি.টি.)", specialty: "ফিজিওথেরাপি কনসালন্টে", origin: "কেবিএমএইচ", room: "N/A", time: "10:00 AM - 6:00 PM", shift: "সকাল", status: "ON" },

    // বিকেল
    { name: "অধ্যাপক ডা. মোঃ আরিফ চৌধুরী", specialty: "চর্ম, যৌন ও এলার্জি", origin: "আশিয়ান মেডিকেল", room: "160", time: "4:00 PM - 7:00 PM", shift: "বিকেল", status: "ON" },
    { name: "অধ্যাপক ডা. দেলোয়ার হোসেন", specialty: "নাক, কান, গলা ও হেড নেক", origin: "পিজি হাসপাতাল", room: "149", time: "4:00 PM - 6:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. হুমায়ূন কবির কল্লোল", specialty: "জেনারেল ও ইউরোলজিস্ট", origin: "ঢামেক", room: "144", time: "6:00 PM - 9:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. সাব্বির আহমেদ ভূঁইয়া", specialty: "নবজাতক, শিশু ও কিশোর", origin: "তাজউদ্দিন মেডিকেল", room: "158", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "সহকারী অধ্যাপক ডাঃ বিশ্বজিৎ কুমার বিশ্বাস", specialty: "বক্ষব্যাধি ও মেডিসিন", origin: "জাতীয় বক্ষব্যাধি ইনস্টিটিউট", room: "N/A", time: "3:30 PM - 7:00 PM", shift: "বিকেল", status: "ON" },
    { name: "সহকারী অধ্যাপক ডাঃ মোঃ সাইয়েদুল আশিক", specialty: "লিভার ও মেডিসিন", origin: "তাজউদ্দিন মেডিকেল", room: "-2", time: "3:30 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. মাহমুদুর রহমান", specialty: "অর্থোপেডিক বিশেষজ্ঞ", origin: "পঙ্গু হাসপাতাল", room: "148", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. লুবনা খানম", specialty: "স্ত্রী ও প্রসূতি রোগ", origin: "কালিগঞ্জ স্বাস্থ্য কমপ্লেক্স", room: "119", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "সহকারী অধ্যাপক ডাঃ মোঃ কায়সারুল ইসলাম", specialty: "মেডিসিন, ডায়াবেটিস ও হৃদরোগ", origin: "তাজউদ্দিন মেডিকেল", room: "117", time: "5:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. মোসাঃ হুরে জান্নাত", specialty: "কিডনি, ডায়াবেটিস ও মেডিসিন", origin: "মিটফোর্ড হাসপাতাল", room: "155", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. মোহাম্মদ আবু হাসনাত", specialty: "শিশুরোগ বিশেষজ্ঞ", origin: "ঢাকা শিশু হাসপাতাল", room: "158", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. তাহমিদা সারমিন", specialty: "চর্ম, যৌন ও এলার্জি", origin: "তাজউদ্দিন মেডিকেল", room: "147", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. এস.এম. মশিউর রহমান", specialty: "বাত ব্যথা ও হাড় ভাঙ্গা", origin: "পঙ্গু হাসপাতাল", room: "118", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "সহকারী অধ্যাপক ডা. মোঃ বদিউজ্জামান (সজীব)", specialty: "মেডিসিন ও হৃদরোগ", origin: "তাজউদ্দিন মেডিকেল", room: "116", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. সুলতান মাহমুদ", specialty: "মেডিসিন ও নিউরো মেডিসিন", origin: "ঢামেক", room: "115", time: "5:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "সহকারী অধ্যাপক ডাঃ হোসনেয়ারা খাতুন", specialty: "চক্ষু বিশেষজ্ঞ ও সার্জন", origin: "কুর্মিটোলা জেনারেল হাসপাতাল", room: "N/A", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "সহকারী অধ্যাপক ডাঃ মোঃ হাসানুল হক (নিপুন)", specialty: "নাক, কান ও গলা", origin: "পিজি হাসপাতাল", room: "145", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. এম. আরফান মাহমুদ", specialty: "মুখ ও দন্ত রোগ", origin: "সোহরাওয়ার্দী হাসপাতাল", room: "N/A", time: "1:00 PM - 4:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. মোঃ রেজাউল হক (রেজা)", specialty: "ডেন্টাল ও ম্যাক্সলোফেসিয়াল", origin: "সোহরাওয়ার্দী হাসপাতাল", room: "N/A", time: "5:00 PM - 9:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. খন্দকার আবুল হোসাইন", specialty: "ফিজিওথেরাপি বিশেষজ্ঞ", origin: "পঙ্গু হাসপাতাল", room: "N/A", time: "4:30 PM - 8:30 PM", shift: "বিকেল", status: "ON" },
    { name: "সহযোগী অধ্যাপক ডা. মোঃ মাসুদ রানা", specialty: "অর্থোপেডিক্স ও ট্রমা", origin: "এনাম মেডিকেল", room: "157", time: "3:00 PM - 7:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডাঃ রোকেয়া সুলতানা", specialty: "সনোলজিস্ট", origin: "কেবিএমএইচ", room: "103", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "KBMH Others", specialty: "others", origin: "KBMH", room: "102", time: "12:00 PM - 11:59 AM", shift: "বিকেল", status: "ON" },
    { name: "ডা:নিপা কর্মকার", specialty: "স্ত্রীরোগ ও প্রসূতীবিদ্যা", origin: "মির্জাপুর স্বাস্থ্য কমপ্লেক্স", room: "159", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" }
];
// === ৫. বুধবারের ডাটা (নতুন যুক্ত) ===
const initialWednesdayDocs = [
    // সকাল (Morning Shift)
    { name: "অধ্যাপক ডা. আবদুল হামিদ", specialty: "বক্ষব্যাধি ও মেডিসিন বিশেষজ্ঞ", origin: "সিটি মেডিকেল কলেজ", room: "145", time: "10:00 AM - 3:00 PM", shift: "সকাল", status: "ON" },
    { name: "অধ্যাপক ডা. আশিষ কুমার ঘোষ", specialty: "নবজাতক, শিশু ও রক্তরোগ", origin: "ক্যান্সার ইনস্টিটিউট", room: "146", time: "10:00 AM - 2:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা. মাহমুদা খাতুন", specialty: "গাইনী বিশেষজ্ঞ ও সার্জন", origin: "পিজি হাসপাতাল", room: "119", time: "10:00 AM - 3:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা. মাহমুদুর রহমান", specialty: "অর্থোপেডিক বিশেষজ্ঞ", origin: "পঙ্গু হাসপাতাল", room: "148", time: "11:00 AM - 1:00 AM", shift: "সকাল", status: "ON" },
    { name: "ডা. সুরজিৎ সাহা", specialty: "হাড় জোড়া, হাড় ভাঙ্গা ও বাত ব্যথা", origin: "সোহরাওয়ার্দী হাসপাতাল", room: "118", time: "10:00 AM - 2:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা. মোঃ ইমাদুল ইসলাম (মিঠু)", specialty: "মেডিসিন ও ডায়াবেটিস বিশেষজ্ঞ", origin: "পিজি হাসপাতাল", room: "117", time: "10:00 AM - 3:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা. নারগীছ আক্তার", specialty: "স্ত্রীরোগ ও প্রসূতীবিদ্যা", origin: "CMH", room: "121", time: "10:00 AM - 2:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা. মোঃ শরিফুল ইসলাম রুদ্র", specialty: "অর্থোপেডিক ও ট্রমা বিশেষজ্ঞ", origin: "পিজি হাসপাতাল", room: "147", time: "10:00 AM - 8:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডাঃ খালেদা আক্তার হ্যাপি", specialty: "নকজাতক ও শিশুরোগ বিশেষজ্ঞ", origin: "তাজউদ্দিন মেডিকেল", room: "115", time: "10:00 AM - 8:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডাঃ মোঃ সুজন মাহমুদ", specialty: "চক্ষু ও মাথা ব্যথা রোগে অভিজ্ঞ", origin: "কেবিএমএইচ", room: "N/A", time: "9:00 AM - 9:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা. নাজমুন্নাহার সাথী", specialty: "মেডিসিন, ডায়াবেটিস ও হরমোন", origin: "মিটফোর্ড হাসপাতাল", room: "154", time: "10:00 AM - 7:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা. এম. আরফান মাহমুদ", specialty: "মুখ ও দন্ত রোগ বিশেষজ্ঞ", origin: "সোহরাওয়ার্দী হাসপাতাল", room: "N/A", time: "10:00 AM - 2:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা. রিজিয়া পারভীন শিখা", specialty: "ওরাল এন্ড ডেন্টাল সার্জন", origin: "ঢাকা ডেন্টাল কলেজ", room: "N/A", time: "11:00 AM - 1:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা. মুহাম্মদ হাসিফ", specialty: "ফিজিওথেরাপি বিশেষজ্ঞ", origin: "গণস্বাস্থ্য", room: "N/A", time: "9:00 AM - 9:00 PM", shift: "সকাল", status: "ON" },
    { name: "পুষ্টিবিদ সায়মা আক্তার লিজা", specialty: "নিউট্রিশন ও ডায়েট কনসালটেন্ট", origin: "ইবনে সিনা মেডিকেল", room: "-1", time: "10:00 AM - 8:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা. রুমা আক্তার", specialty: "গাইনী রোগ ও সনোলজিস্ট", origin: "কেবিএমএইচ", room: "106", time: "10:00 AM - 1:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা:এস এম নাজমুল হাসান", specialty: "চক্ষু ও মাথা ব্যাথা অভিজ্ঞ", origin: "কেবিএমএইচ", room: "N/A", time: "9:00 AM - 2:00 PM", shift: "সকাল", status: "ON" },
    { name: "KBMH Others", specialty: "others", origin: "KBMH", room: "102", time: "4:00 AM - 11:59 AM", shift: "সকাল", status: "ON" },

    // বিকেল (Afternoon Shift)
    { name: "অধ্যাপক ডা. শিশির রঞ্জন দাস", specialty: "নবজাতক ও শিশু বিশেষজ্ঞ", origin: "ঢাকা মেডিকেল কলেজ", room: "115", time: "6:00 PM - 9:00 PM", shift: "বিকেল", status: "ON" },
    { name: "অধ্যাপক ডা. সৈয়দ সহিদুল ইসলাম", specialty: "অর্থোপেডিক্স, ট্রমা ও স্পাইন", origin: "পঙ্গু হাসপাতাল", room: "148", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "অধ্যাপক ডা. শাহ্ মোঃ ফয়সাল", specialty: "অর্থোপেডিক বিশেষজ্ঞ ও সার্জন", origin: "এনাম মেডিকেল", room: "157", time: "5:00 PM - 9:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. কল্লোল দে", specialty: "জেনারেল ও ক্যান্সার সার্জন", origin: "জাতীয় ক্যান্সার ইনস্টিটিউট", room: "144", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "সহযোগী অধ্যাপক ডা. আয়শা সিদ্দিকা", specialty: "গাইনী বিশেষজ্ঞ ও সার্জন", origin: "স্যার সলিমুল্লাহ মেডিকেল", room: "119", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "সহকারী অধ্যাপক ডা. এনামুল কবির খান", specialty: "হৃদরোগ, মেডিসিন ও বাতজ্বর", origin: "তাজউদ্দিন মেডিকেল", room: "116", time: "5:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. সাব্বির আহমেদ ভূঁইয়া", specialty: "নবজাতক, শিশু ও কিশোর", origin: "তাজউদ্দিন মেডিকেল", room: "158", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "সহকারী অধ্যাপক ডাঃ মোঃ সাইয়েদুল আশিক", specialty: "লিভার ও মেডিসিন বিশেষজ্ঞ", origin: "তাজউদ্দিন মেডিকেল", room: "-2", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. মোঃ রাসেল ভূঁইয়া", specialty: "নবজাতক, শিশু ও কিশোর রোগ", origin: "ঢাকা মেডিকেল কলেজ", room: "155", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "সহযোগী অধ্যাপক ডা. তানিয়া হক", specialty: "চর্ম, যৌন ও এলার্জী বিশেষজ্ঞ", origin: "গণ-স্বাস্থ্য মেডিকেল", room: "N/A", time: "4:00 PM - 7:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. এস.এম. মশিউর রহমান", specialty: "বাত ব্যথা ও হাড় ভাঙ্গা বিশেষজ্ঞ", origin: "পঙ্গু হাসপাতাল", room: "118", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. মোঃ আসিফুর রহমান আসিফ", specialty: "মেডিসিন ও হৃদরোগ অভিজ্ঞ", origin: "ঢাকা মেডিকেল কলেজ", room: "145", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. অন্তরা পাল", specialty: "গাইনী, প্রসূতি ও ক্যান্সার বিশেষজ্ঞ", origin: "বাংলাদেশ মেডিকেল", room: "146", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. মোঃ মাহবুব ইসলাম", specialty: "বক্ষব্যাধি ও মেডিসিন বিশেষজ্ঞ", origin: "জাতীয় বক্ষব্যাধি ইন্সটিটিউট", room: "151", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. অনন্যা বিশ্বাস", specialty: "ওরাল এন্ড ডেন্টাল সার্জন", origin: "ঢাকা ডেন্টাল কলেজ", room: "N/A", time: "3:00 PM - 7:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. খন্দকার আবুল হোসাইন", specialty: "ফিজিওথেরাপি বিশেষজ্ঞ", origin: "পঙ্গু হাসপাতাল", room: "N/A", time: "4:30 PM - 8:30 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. মোঃ নাজমুল আলম", specialty: "হৃদরোগ, মেডিসিন ও বাতজ্বর", origin: "মুগদা মেডিকেল কলেজ", room: "146", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. কাজী ইমরান হাসান", specialty: "চর্ম, যৌন ও এলার্জি বিশেষজ্ঞ", origin: "মার্কস মেডিকেল কলেজ", room: "160", time: "5:00 PM - 7:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. সাথী আক্তার", specialty: "গাইনী রোগ ও সনোলজিস্ট", origin: "কেবিএমএইচ", room: "103", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডাঃ মোঃ রিপন মিয়া", specialty: "নাক কাল গলা ও হেড-নেক সার্জন", origin: "ডেল্টা মেডিকেল", room: "120", time: "4:00 PM - 7:00 PM", shift: "বিকেল", status: "ON" }
];
// === ৬. বৃহস্পতিবারের ডাটা (নতুন যুক্ত) ===
const initialThursdayDocs = [
    // সকাল (Morning Shift)
    { name: "অধ্যাপক ডা. মোঃ আব্দুর রহিম", specialty: "মেডিসিন বিশেষজ্ঞ", origin: "পিজি হাসপাতাল", room: "116", time: "10:00 AM - 3:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা. মাহমুদা খাতুন", specialty: "গাইনী বিশেষজ্ঞ ও সার্জন", origin: "পিজি হাসপাতাল", room: "119", time: "10:00 AM - 8:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা. সুরজিৎ সাহা", specialty: "হাড় জোড়া, হাড় ভাঙ্গা ও বাত ব্যথা", origin: "সোহরাওয়ার্দী হাসপাতাল", room: "118", time: "10:00 AM - 2:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা. ফারজানা আক্তার দিতি", specialty: "শিশুরোগ বিশেষজ্ঞ", origin: "তাজউদ্দিন মেডিকেল", room: "-2", time: "10:00 AM - 8:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডাঃ মোঃ সুজন মাহমুদ", specialty: "চক্ষু ও মাথা ব্যথা অভিজ্ঞ", origin: "কেবিএমএইচ", room: "N/A", time: "9:00 AM - 9:00 PM", shift: "সকাল", status: "ON" },
    { name: "পুষ্টিবিদ সায়মা আক্তার লিজা", specialty: "নিউট্রিশন ও ডায়েট কনসালটেন্ট", origin: "ইবনে সিনা মেডিকেল", room: "-1", time: "10:00 AM - 8:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা. রাবেয়া জামান নাদিয়া", specialty: "সনোলজিস্ট ও জেনারেল ফিজিশিয়ান", origin: "কেবিএমএইচ", room: "103", time: "10:00 AM - 8:00 PM", shift: "সকাল", status: "ON" },
    { name: "KBMH Others", specialty: "others", origin: "KBMH", room: "102", time: "4:00 AM - 11:59 AM", shift: "সকাল", status: "ON" },
    { name: "ডা. হাসনাইন সরকার (পি.টি.)", specialty: "ফিজিওথেরাপি কনসালন্টে", origin: "কেবিএমএইচ", room: "N/A", time: "10:00 AM - 6:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা:নিপা কর্মকার", specialty: "স্ত্রীরোগ ও প্রসূতীবিদ্যা বিশেষজ্ঞ", origin: "মির্জাপুর স্বাস্থ্য কমপ্লেক্স", room: "159", time: "10:00 AM - 8:00 PM", shift: "সকাল", status: "ON" },

    // বিকেল (Afternoon Shift)
    { name: "ডা. হুমায়ূন কবির কল্লোল", specialty: "জেনারেল সার্জন ও ইউরোলজিস্ট", origin: "ঢাকা মেডিকেল কলেজ", room: "144", time: "6:00 PM - 9:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. সাব্বির আহমেদ ভূঁইয়া", specialty: "নবজাতক, শিশু ও কিশোর", origin: "তাজউদ্দিন মেডিকেল", room: "158", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "সহকারী অধ্যাপক ডা. সজল রায়", specialty: "নাক, কান ও গলা সার্জন", origin: "তায়রুন্নেসা মেডিকেল", room: "147", time: "5:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. মাহমুদুর রহমান", specialty: "অর্থোপেডিক বিশেষজ্ঞ", origin: "পঙ্গু হাসপাতাল", room: "148", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "সহকারি অধ্যাপক ডা. তাহমিদ মাহবুব", specialty: "গ্যাস্ট্রো-লিভার ও মেডিসিন", origin: "শেখ রাসেল গ্যাস্ট্রোলিভার", room: "-2", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. লুবনা খানম", specialty: "স্ত্রী ও প্রসূতি রোগ বিশেষজ্ঞ", origin: "কালিগঞ্জ স্বাস্থ্য কমপ্লেক্স", room: "119", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "সহকারী অধ্যাপক ডাঃ মোঃ কায়সারুল ইসলাম", specialty: "মেডিসিন, ডায়াবেটিস ও হৃদরোগ", origin: "তাজউদ্দিন মেডিকেল", room: "117", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. মোঃ আমান উল্লাহ কবির (মিলটন)", specialty: "হাড় জোড়া ও মেরুদন্ড বিশেষজ্ঞ", origin: "পিজি হাসপাতাল", room: "118", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. মোঃ রাকিব-উল-হাসান", specialty: "বাত-ব্যথা ও অটো ইমিউনো বিশেষজ্ঞ", origin: "বঙ্গবন্ধু মেডিকেল (PG)", room: "146", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. মোঃ আসিফুর রহমান আসিফ", specialty: "মেডিসিন ও হৃদরোগ অভিজ্ঞ", origin: "ঢাকা মেডিকেল কলেজ", room: "145", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. সুলতান মাহমুদ", specialty: "মেডিসিন ও নিউরো মেডিসিন", origin: "ঢাকা মেডিকেল কলেজ", room: "115", time: "5:00 PM - 9:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. মোঃ রাকিবুল হাসান", specialty: "চর্ম, যৌন ও এলার্জি বিশেষজ্ঞ", origin: "বঙ্গবন্ধু মেডিকেল (PG)", room: "121", time: "4:00 PM - 7:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. এম. আরফান মাহমুদ", specialty: "মুখ ও দন্ত রোগ বিশেষজ্ঞ", origin: "সোহরাওয়ার্দী হাসপাতাল", room: "N/A", time: "1:00 PM - 4:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. খন্দকার আবুল হোসাইন", specialty: "ফিজিওথেরাপি বিশেষজ্ঞ", origin: "পঙ্গু হাসপাতাল", room: "N/A", time: "4:30 PM - 8:30 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. মোঃ হাসনাত আনোয়ার", specialty: "নাক, কান ও গলা সার্জন", origin: "সোহরাওয়ার্দী হাসপাতাল", room: "120", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" }
];

// === ৭. শুক্রবাররের পূর্ণাঙ্গ ডাটা তালিকা ===
const initialFridayDocs = [
    // সকাল (Shift: সকাল)
    { name: "অধ্যাপক ডা. এম. এস জহিরুল হক চৌধুরী", specialty: "নিউরোমেডিসিন বিশেষজ্ঞ", origin: "ন্যাশনাল ইনস্টিটিউট অব নিউরোসায়েন্সেস", room: "147", time: "11:00 AM - 7:00 PM", shift: "সকাল", status: "ON" },
    { name: "অধ্যাপক ডা. মোঃ আরিফ চৌধুরী", specialty: "চর্ম, যৌন ও কসমেটিক্স সার্জন", origin: "আশিয়ান মেডিকেল কলেজ", room: "160", time: "10:00 AM - 7:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা. সৈয়দ রেজওয়ান কবির", specialty: "হৃদরোগ, মেডিসিন ও বাতজ্বর", origin: "ঢাকা মেডিকেল কলেজ", room: "N/A", time: "10:00 AM - 8:00 PM", shift: "সকাল", status: "ON" },
    { name: "সহযোগী অধ্যাপক ডা. আয়শা সিদ্দিকা", specialty: "গাইনী বিশেষজ্ঞ ও সার্জন", origin: "স্যার সলিমুল্লাহ মেডিকেল", room: "119", time: "10:00 AM - 8:00 PM", shift: "সকাল", status: "ON" },
    { name: "সহযোগী অধ্যাপক ডা. মোঃ সুমন রহমান", specialty: "জেনারেল ও ল্যাপারোস্কপিক সার্জন", origin: "শহীদ মনসুর আলী মেডিকেল", room: "144", time: "10:00 AM - 4:00 PM", shift: "সকাল", status: "ON" },
    { name: "সহকারী অধ্যাপক ডাঃ বিশ্বজিৎ কুমার বিশ্বাস", specialty: "বক্ষব্যাধি ও মেডিসিন বিশেষজ্ঞ", origin: "জাতীয় বক্ষব্যাধি ইনস্টিটিউট", room: "N/A", time: "10:00 AM - 3:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা. মাহমুদা খাতুন", specialty: "গাইনী বিশেষজ্ঞ ও সার্জন", origin: "পিজি হাসপাতাল", room: "119", time: "10:00 AM - 8:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা. সাইফুল ইসলাম", specialty: "নাক, কান, গলা ও হেড নেক সার্জন", origin: "জাতীয় নাক, কান, গলা ইনস্টিটিউট", room: "145", time: "10:00 AM - 9:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা. মোঃ জাহাঙ্গীর আলম", specialty: "অর্থোপেডিক্স, স্পাইন ও ট্রমা", origin: "পঙ্গু হাসপাতাল", room: "118", time: "10:00 AM - 7:00 PM", shift: "সকাল", status: "ON" },
    { name: "সহকারি অধ্যাপক ডা. তাহমিদ মাহবুব", specialty: "গ্যাস্ট্রো-লিভার ও মেডিসিন", origin: "শেখ রাসেল গ্যাস্ট্রোলিভার", room: "-2", time: "10:00 AM - 8:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা. সুরজিৎ সাহা", specialty: "হাড় জোড়া, হাড় ভাঙ্গা ও বাত ব্যথা", origin: "সোহরাওয়ার্দী হাসপাতাল", room: "118", time: "10:00 AM - 7:00 AM", shift: "সকাল", status: "ON" },
    { name: "সহকারী অধ্যাপক ডাঃ মোঃ কায়সারুল ইসলাম", specialty: "মেডিসিন, ডায়াবেটিস ও হৃদরোগ", origin: "তাজউদ্দিন মেডিকেল", room: "117", time: "10:00 AM - 6:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা. মোহাম্মদ আবু হাসনাত", specialty: "শিশুরোগ বিশেষজ্ঞ", origin: "ঢাকা শিশু হাসপাতাল", room: "158", time: "10:00 AM - 2:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা. নারগীছ আক্তার", specialty: "স্ত্রীরোগ ও প্রসূতীবিদ্যা বিশেষজ্ঞ", origin: "CMH", room: "121", time: "10:00 AM - 2:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা. ফারজানা আক্তার দিতি", specialty: "শিশুরোগ বিশেষজ্ঞ", origin: "তাজউদ্দিন মেডিকেল", room: "-2", time: "10:00 AM - 1:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা. নিগার সুলতানা", specialty: "গাইনী ও প্রসূতি রোগ বিশেষজ্ঞ", origin: "ঢাকা মেডিকেল কলেজ", room: "159", time: "10:00 AM - 8:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা. মোঃ নাজমুল হাসান", specialty: "অর্থোপেডিক ও ট্রামা বিশেষজ্ঞ", origin: "পিজি হাসপাতাল", room: "114", time: "10:00 AM - 8:00 PM", shift: "সকাল", status: "ON" },
    { name: "সহযোগী অধ্যাপক ডাঃ মোঃ মহর আলী", specialty: "চক্ষু বিশেষজ্ঞ ও সার্জন", origin: "কর্ণেল মালেক মেডিকেল", room: "N/A", time: "10:00 AM - 3:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা. ফাতিমা ওয়াহিদা", specialty: "চর্ম, যৌন ও এলার্জি বিশেষজ্ঞ", origin: "সোহরাওয়ার্দী হাসপাতাল", room: "155", time: "10:00 AM - 5:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা. এম. আরফান মাহমুদ", specialty: "মুখ ও দন্ত রোগ বিশেষজ্ঞ", origin: "সোহরাওয়ার্দী হাসপাতাল", room: "N/A", time: "10:00 AM - 2:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা. রিজিয়া পারভীন শিখা", specialty: "ওরাল এন্ড ডেন্টাল সার্জন", origin: "ঢাকা ডেন্টাল কলেজ", room: "N/A", time: "11:00 AM - 1:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা. খন্দকার আবুল হোসাইন", specialty: "ফিজিওথেরাপি বিশেষজ্ঞ", origin: "পঙ্গু হাসপাতাল", room: "N/A", time: "8:00 AM - 12:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা. মুহাম্মদ হাসিফ", specialty: "ফিজিওথেরাপি বিশেষজ্ঞ", origin: "গণস্বাস্থ্য", room: "N/A", time: "9:00 AM - 9:00 PM", shift: "সকাল", status: "ON" },
    { name: "সহযোগী অধ্যাপক ডা. আশীষ কুমার সরকার", specialty: "রেডিওলজি ও ইমেজিং বিশেষজ্ঞ", origin: "BSMMU (PG Hospital)", room: "103", time: "10:00 AM - 7:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা. রুমা আক্তার", specialty: "গাইনী রোগ ও সনোলজিস্ট", origin: "KBMH", room: "106", time: "10:00 AM - 8:00 PM", shift: "সকাল", status: "ON" },
    { name: "ডা:নিপা কর্মকার", specialty: "স্ত্রীরোগ ও প্রসূতীবিদ্যা বিশেষজ্ঞ", origin: "মির্জাপুর স্বাস্থ্য কমপ্লেক্স", room: "159", time: "10:00 AM - 7:00 PM", shift: "সকাল", status: "ON" },

    // বিকেল (Shift: বিকেল)
    { name: "অধ্যাপক ডা. মৃন্ময় বিশ্বাস", specialty: "কিডনী, ইউরোলজী ও সার্জারী", origin: "শেখ মুজিব মেডিকেল কলেজ", room: "157", time: "3:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "অধ্যাপক ডা. দেলোয়ার হোসেন", specialty: "নাক, কান, গলা ও হেড নেক", origin: "পিজি হাসপাতাল", room: "149", time: "5:00 PM - 6:00 PM", shift: "বিকেল", status: "ON" },
    { name: "অধ্যাপক ডা. শিশির রঞ্জন দাস", specialty: "নবজাতক ও শিশু বিশেষজ্ঞ", origin: "ঢাকা মেডিকেল কলেজ", room: "115", time: "3:00 PM - 9:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. কল্লোল দে", specialty: "জেনারেল ও ক্যান্সার সার্জন", origin: "জাতীয় ক্যান্সার ইনস্টিটিউট", room: "144", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "সহকারী অধ্যাপক ডা. সোহেল মীর্জা", specialty: "চর্ম, এলার্জি ও যৌন রোগ", origin: "তাজউদ্দীন আহমদ মেডিকেল", room: "156", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. সাব্বির আহমেদ ভূঁইয়া", specialty: "নবজাতক, শিশু ও কিশোর", origin: "তাজউদ্দিন মেডিকেল", room: "158", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. মোঃ আমান উল্লাহ কবির (মিলটন)", specialty: "হাড় জোড়া, বাত ও মেরুদন্ড", origin: "পিজি হাসপাতাল", room: "118", time: "2:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "সহযোগী অধ্যাপক ডা. এ.কে এম তারিকুল হাসান", specialty: "কিডনী, মেডিসিন ও ডায়াবেটিস", origin: "ইষ্ট-ওয়েষ্ট মেডিকেল", room: "120", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "সহকারী অধ্যাপক ডা. মোঃ বদিউজ্জামান (সজীব)", specialty: "মেডিসিন, হৃদরোগ ও বাত জ্বর", origin: "তাজউদ্দিন মেডিকেল", room: "116", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. মোঃ মাহবুব ইসলাম", specialty: "বক্ষব্যাধি ও মেডিসিন বিশেষজ্ঞ", origin: "জাতীয় বক্ষব্যাধি ইন্সটিটিউট", room: "151", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. ফরিদ উদ্দীন আহমাদ", specialty: "জেনারেল চক্ষু চিকিৎসক", origin: "চক্ষু হাসপাতাল, ঢাকা", room: "N/A", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "সহযোগী অধ্যাপক ডা. এফ.আর. আল-মাহমুদ", specialty: "মেডিসিন ও প্যারালাইসিস", origin: "টিএমএসএস মেডিকেল", room: "160", time: "3:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "ডা. প্রবীর কুমার সরকার", specialty: "বাত ও ব্যথা রোগ বিশেষজ্ঞ", origin: "দেলদুয়ার স্বাস্থ্য কর্মকর্তা", room: "155", time: "4:00 PM - 8:00 PM", shift: "বিকেল", status: "ON" },
    { name: "KBMH Others", specialty: "others", origin: "KBMH", room: "102", time: "12:00 PM - 11:59 AM", shift: "বিকেল", status: "ON" }
];

// ৮. ম্যানেজমেন্ট সিস্টেম কন্ট্রোল (সকল দিনের জন্য আপডেট করা)
let doctors = [];
let currentDay = '';
let isAdminVisible = false;

// পেজ শুরুর মেইন ফাংশন
function initPage(day) {
    currentDay = day;
    startClock();
    
    // ব্রাউজার থেকে ওই নির্দিষ্ট দিনের ডাটা খোঁজা
    const saved = localStorage.getItem(`doctors_${currentDay}`);
    
    // ডাটা সঠিক কি না তা যাচাই করার লজিক (ভুল ডাটা রোধ করতে)
    let needsReset = false;
    if (saved) {
        const parsedData = JSON.parse(saved);
        // রবিবারের পেজে যদি শনিবারের ডাটা (যেমন: Doctor Admin) পাওয়া যায়, তবে রিসেট হবে
        if (day === 'Sunday' && saved.includes('Doctor Admin')) needsReset = true;
        if (day === 'Monday' && saved.includes('Doctor Admin')) needsReset = true;
        if (day === 'Tuesday' && saved.includes('Doctor Admin')) needsReset = true;
    }

    if (!saved || needsReset) {
        forceResetData(); // প্রথমবার বা ভুল ডাটা থাকলে ডিফল্ট লিস্ট লোড হবে
    } else {
        doctors = JSON.parse(saved);
    }
    renderTable();
}

// ডিফল্ট ডাটা রিসেট করার ফাংশন (সাত দিনের জন্য)
function forceResetData() {
    if (currentDay === 'Saturday') doctors = initialSaturdayDocs;
    else if (currentDay === 'Sunday') doctors = initialSundayDocs;
    else if (currentDay === 'Monday') doctors = initialMondayDocs;
    else if (currentDay === 'Tuesday') doctors = initialTuesdayDocs;
    else if (currentDay === 'Wednesday') doctors = typeof initialWednesdayDocs !== 'undefined' ? initialWednesdayDocs : [];
    else if (currentDay === 'Thursday') doctors = typeof initialThursdayDocs !== 'undefined' ? initialThursdayDocs : [];
    else if (currentDay === 'Friday') doctors = typeof initialFridayDocs !== 'undefined' ? initialFridayDocs : [];
    else doctors = [];

    saveData();
    renderTable();
}

// ডাটা ব্রাউজারে সেভ করে রাখা
function saveData() {
    localStorage.setItem(`doctors_${currentDay}`, JSON.stringify(doctors));
}

// হেডারের ঘড়ি ও তারিখ সচল রাখা
function startClock() {
    setInterval(() => {
        const clockEl = document.getElementById('digitalClock');
        const dateEl = document.getElementById('currentDate');
        if (clockEl) {
            const now = new Date();
            clockEl.innerText = now.toLocaleTimeString('bn-BD');
            dateEl.innerText = now.toLocaleDateString('bn-BD', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        }
    }, 1000);
}

// সেটিং প্যানেল খোলা বা বন্ধ করা
function toggleAdminPanel() {
    isAdminVisible = !isAdminVisible;
    document.getElementById('adminPanel').classList.toggle('hidden');
    renderTable(); // অ্যাকশন কলাম দেখানোর জন্য রি-রেন্ডার
}

// টেবিল রেন্ডার এবং রানিং হেডলাইন আপডেট
function renderTable() {
    const tableBody = document.getElementById('tableBody');
    const searchQuery = document.getElementById('docSearch').value.toLowerCase();
    const deptFilter = document.getElementById('deptFilter').value.toLowerCase();
    const marquee = document.getElementById('runningHeadline');
    
    // দিনের নাম বাংলায় কনভার্ট (হেডলাইনের জন্য)
    const dayMap = {
        'Saturday': 'শনিবার', 'Sunday': 'রবিবার', 'Monday': 'সোমবার', 
        'Tuesday': 'মঙ্গলবার', 'Wednesday': 'বুধবার', 'Thursday': 'বৃহস্পতিবার', 'Friday': 'শুক্রবার'
    };

    tableBody.innerHTML = "";
    let headlineText = `খাজা বদরুদদোজা মডার্ন হাসপাতাল - ${dayMap[currentDay]} শিডিউল: `;
    let count = 0;

    const shifts = ["সকাল", "বিকেল"];
    
    shifts.forEach(shift => {
        const shiftDocs = doctors.filter(d => d.shift === shift);
        let shiftRows = "";

        shiftDocs.forEach(doc => {
            const matchesSearch = doc.name.toLowerCase().includes(searchQuery) || doc.specialty.toLowerCase().includes(searchQuery);
            const matchesDept = (deptFilter === "all" || doc.specialty.toLowerCase().includes(deptFilter));

            if (matchesSearch && matchesDept) {
                count++;
                const index = doctors.indexOf(doc);
                const isOff = doc.status === 'OFF';
                
                // হেডলাইন আপডেট লজিক
                if (isOff) headlineText += `🔴 ডা: ${doc.name} (চেম্বার বন্ধ) | `;
                else if (doc.isNew) headlineText += `🟢 নতুন ডাক্তার: ডা: ${doc.name} | `;

                shiftRows += `
                    <tr class="${isOff ? 'closed-row' : ''}">
                        <td>${count}</td>
                        <td>${doc.name} ${doc.isNew ? '<span class="new-tag">NEW</span>' : ''}</td>
                        <td>${doc.specialty}</td>
                        <td>${doc.origin}</td>
                        <td>${doc.room}</td>
                        <td>${doc.time}</td>
                        <td class="admin-cell ${isAdminVisible ? '' : 'hidden'}">
                            <button class="action-btn ${isOff ? 'btn-on' : 'btn-off'}" onclick="toggleStatus(${index})">
                                ${isOff ? 'খোলা' : 'বন্ধ'}
                            </button>
                            <button class="action-btn btn-del" onclick="deleteDoctor(${index})"><i class="fas fa-trash"></i></button>
                        </td>
                    </tr>
                `;
            }
        });

        if (shiftRows !== "") {
            tableBody.innerHTML += `<tr><td colspan="7" class="shift-title">${shift} শিফট</td></tr>` + shiftRows;
        }
    });

    document.getElementById('docCount').innerText = count;
    marquee.innerText = headlineText;
}

// নতুন ডাক্তার যোগ করার ফরম সাবমিট
document.getElementById('addDoctorForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const newDoc = {
        name: document.getElementById('docName').value,
        specialty: document.getElementById('docSpecialty').value,
        origin: document.getElementById('docOrigin').value,
        room: document.getElementById('docRoom').value,
        time: document.getElementById('docTime').value,
        shift: document.getElementById('docShift').value,
        status: 'ON',
        isNew: true
    };
    doctors.push(newDoc);
    saveData();
    renderTable();
    this.reset();
});

// চেম্বার বন্ধ বা খোলা করা
function toggleStatus(index) {
    doctors[index].status = doctors[index].status === 'ON' ? 'OFF' : 'ON';
    doctors[index].isNew = false; // স্ট্যাটাস চেঞ্জ করলে 'New' ট্যাগ চলে যাবে
    saveData();
    renderTable();
}

// ডাক্তার ডিলিট করা
function deleteDoctor(index) {
    if (confirm("আপনি কি নিশ্চিতভাবে এই ডাক্তারকে তালিকা থেকে মুছে ফেলতে চান?")) {
        doctors.splice(index, 1);
        saveData();
        renderTable();
    }
}