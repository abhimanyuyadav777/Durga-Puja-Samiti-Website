/* =================================
   NAVRATRI WELCOME POPUP
================================= */

function closeWelcomePopup() {

    const popup = document.getElementById("welcomePopup");

    popup.classList.add("hide");

    // Animation complete hone ke baad popup ko hata dena
    setTimeout(() => {
        popup.style.display = "none";
    }, 400);
}

/* =================================
   NAVDURGA DETAILS
================================= */

const mataData = [

    {
        name: "माँ शैलपुत्री",
        day: "DAY 01 • प्रथम स्वरूप",
        image: "images/shailputri.jpg",
        description:
            "नवरात्रि के प्रथम दिन माँ शैलपुत्री की पूजा की जाती है। माँ शैलपुत्री को शक्ति और भक्ति का स्वरूप माना जाता है।"
    },

    {
        name: "माँ ब्रह्मचारिणी",
        day: "DAY 02 • द्वितीय स्वरूप",
        image: "images/bramhcharini.jpg",
        description:
            "नवरात्रि के दूसरे दिन माँ ब्रह्मचारिणी की पूजा की जाती है। वे तप, संयम और दृढ़ संकल्प का प्रतीक हैं।"
    },

    {
        name: "माँ चंद्रघंटा",
        day: "DAY 03 • तृतीय स्वरूप",
        image: "images/chandraghanta.jpg",
        description:
            "नवरात्रि के तीसरे दिन माँ चंद्रघंटा की आराधना की जाती है। उनका स्वरूप साहस और शांति का प्रतीक माना जाता है।"
    },

    {
        name: "माँ कूष्मांडा",
        day: "DAY 04 • चतुर्थ स्वरूप",
        image: "images/kushmanda.jpg",
        description:
            "नवरात्रि के चौथे दिन माँ कूष्मांडा की पूजा की जाती है। उन्हें ऊर्जा और सृजन शक्ति से जोड़ा जाता है।"
    },

    {
        name: "माँ स्कंदमाता",
        day: "DAY 05 • पंचम स्वरूप",
        image: "images/skandmata.jpg",
        description:
            "नवरात्रि के पांचवें दिन माँ स्कंदमाता की पूजा की जाती है। वे मातृत्व और करुणा का स्वरूप मानी जाती हैं।"
    },

    {
        name: "माँ कात्यायनी",
        day: "DAY 06 • षष्ठम स्वरूप",
        image: "images/katyayani.jpg",
        description:
            "नवरात्रि के छठे दिन माँ कात्यायनी की आराधना की जाती है। उनका स्वरूप शक्ति और साहस से जुड़ा है।"
    },

    {
        name: "माँ कालरात्रि",
        day: "DAY 07 • सप्तम स्वरूप",
        image: "images/kalratri.jpg",
        description:
            "नवरात्रि के सातवें दिन माँ कालरात्रि की पूजा की जाती है। उनका स्वरूप नकारात्मक शक्तियों से रक्षा का प्रतीक माना जाता है।"
    },

    {
        name: "माँ महागौरी",
        day: "DAY 08 • अष्टम स्वरूप",
        image: "images/mahagauri.jpg",
        description:
            "नवरात्रि के आठवें दिन माँ महागौरी की पूजा की जाती है। उन्हें शांति, पवित्रता और करुणा का स्वरूप माना जाता है।"
    },

    {
        name: "माँ सिद्धिदात्री",
        day: "DAY 09 • नवम स्वरूप",
        image: "images/sidhhidatri.jpg",
        description:
            "नवरात्रि के नौवें दिन माँ सिद्धिदात्री की पूजा की जाती है। उनका स्वरूप सिद्धि और आध्यात्मिक पूर्णता से जुड़ा है।"
    }

];


function openMata(index) {

    const mata = mataData[index];

    document.getElementById("modalMataImage").src = mata.image;

    document.getElementById("modalDay").textContent = mata.day;

    document.getElementById("modalMataName").textContent = mata.name;

    document.getElementById("modalDescription").textContent =
        mata.description;

    document.getElementById("mataModal").classList.add("show");
}


function closeMata() {

    document.getElementById("mataModal").classList.remove("show");
}



// =========================
// GALLERY LIGHTBOX
// =========================
let currentGalleryIndex = 0;

const galleryImages = [
    "images/photo-(1).jpeg",
    "images/photo-(2).jpeg",
    "images/photo-(3).jpeg",
    "images/photo-(4).jpeg",
    "images/photo-(5).jpeg",
    "images/photo-(6).jpeg",
    "images/photo-(7).jpeg",
    "images/photo-(8).jpeg",
    "images/photo-(9).jpeg",
    "images/photo-(10).jpeg",
    "images/photo-(11).jpeg",
    "images/photo-(12).jpeg",
    "images/photo-(13).jpeg",
    "images/photo-(14).jpeg",
    "images/photo-(15).jpeg",
    "images/photo-(16).jpeg",
    "images/photo-(17).jpeg",
    "images/photo-(18).jpeg",
    "images/photo-(19).jpeg",
    "images/photo-(20).jpeg",
    "images/photo-(21).jpeg",
    "images/photo-(22).jpeg",
    "images/photo-(23).jpeg",
    "images/photo-(24).jpeg",
    "images/photo-(25).jpeg",
    "images/photo-(26).jpeg",
    "images/photo-(27).jpeg",
    "images/photo-(28).jpeg",
    "images/photo-(29).jpeg",
    "images/photo-(30).jpeg",
    "images/photo-(31).jpeg",
    "images/photo-(32).jpeg",
    "images/photo-(33).jpeg",
    "images/photo-(34).jpeg",
    "images/photo-(35).jpeg",
    "images/photo-(36).jpeg",
    "images/photo-(37).jpeg",
    
];


function openGallery(index) {

    currentGalleryIndex = index;

    document.getElementById("lightboxImage").src =
        galleryImages[currentGalleryIndex];

    document.getElementById("galleryLightbox")
        .classList.add("show");
}


function closeGallery() {

    document.getElementById("galleryLightbox")
        .classList.remove("show");
}


function nextGalleryImage() {

    currentGalleryIndex++;

    if (currentGalleryIndex >= galleryImages.length) {
        currentGalleryIndex = 0;
    }

    document.getElementById("lightboxImage").src =
        galleryImages[currentGalleryIndex];
}


function previousGalleryImage() {

    currentGalleryIndex--;

    if (currentGalleryIndex < 0) {
        currentGalleryIndex = galleryImages.length - 1;
    }

    document.getElementById("lightboxImage").src =
        galleryImages[currentGalleryIndex];
}


/* SHOW MORE / SHOW LESS */

function toggleGallery() {

    const gallery = document.querySelector(".gallery-grid");
    const button = document.getElementById("galleryMoreBtn");

    gallery.classList.toggle("show-all");

    if (gallery.classList.contains("show-all")) {

        button.innerHTML = "↑ कम तस्वीरें दिखाएँ";

    } else {

        button.innerHTML = "✨ और तस्वीरें देखें";

    }
}

function toggleMembers() {
    const members = document.querySelector(".members-grid");
    const button = document.getElementById("membersMoreBtn");

    members.classList.toggle("show-all");

    if (members.classList.contains("show-all")) {
        button.innerHTML = "↑ कम सदस्य दिखाएँ";
    } else {
        button.innerHTML = "✨ और सदस्य देखें";
    }
}



function showMoreGallery() {

    const gallery = document.querySelector(".gallery-grid");
    const button = document.getElementById("showMoreGallery");

    gallery.classList.toggle("gallery-expanded");

    if (gallery.classList.contains("gallery-expanded")) {
        button.innerHTML = "↑ कम तस्वीरें दिखाएँ";
    } else {
        button.innerHTML = "✨ और तस्वीरें देखें";
    }
}

function toggleGallery() {

    const gallery = document.querySelector(".gallery-grid");
    const button = document.getElementById("galleryMoreBtn");

    gallery.classList.toggle("show-all");

    if (gallery.classList.contains("show-all")) {

        button.innerHTML = "↑ कम तस्वीरें दिखाएँ";

    } else {

        button.innerHTML = "✨ और तस्वीरें देखें";

    }
}

/* =========================
   VIDEO GALLERY
========================= */

let currentVideoIndex = 0;

const galleryVideos = [
    "videos/video(1).mp4",
    "videos/video(2).mp4",
    "videos/video(3).mp4",
    "videos/video(4).mp4",
    "videos/video(5).mp4",
    "videos/video(6).mp4",
    "videos/video(7).mp4",
    "videos/video(8).mp4",
];


function openVideo(videoPath) {

    // jis video par click hua, uska index find karo
    currentVideoIndex = galleryVideos.indexOf(videoPath);

    // agar path array me nahi mila
    if (currentVideoIndex === -1) {
        currentVideoIndex = 0;
    }

    const lightbox = document.getElementById("videoLightbox");
    const video = document.getElementById("popupVideo");

    video.src = galleryVideos[currentVideoIndex];

    lightbox.classList.add("show");

    video.load();
    video.play().catch(() => {});
}


function closeVideo() {

    const lightbox = document.getElementById("videoLightbox");
    const video = document.getElementById("popupVideo");

    video.pause();
    video.currentTime = 0;
    video.removeAttribute("src");
    video.load();

    lightbox.classList.remove("show");
}


function nextVideo() {

    currentVideoIndex++;

    if (currentVideoIndex >= galleryVideos.length) {
        currentVideoIndex = 0;
    }

    changeVideo();
}


function previousVideo() {

    currentVideoIndex--;

    if (currentVideoIndex < 0) {
        currentVideoIndex = galleryVideos.length - 1;
    }

    changeVideo();
}


function changeVideo() {

    const video = document.getElementById("popupVideo");

    video.pause();

    video.src = galleryVideos[currentVideoIndex];

    video.load();

    video.play().catch(() => {});
}


/* =========================
   VIDEO SWIPE
========================= */

let videoTouchStartX = 0;

const videoLightbox = document.getElementById("videoLightbox");

if (videoLightbox) {

    videoLightbox.addEventListener("touchstart", function(e) {

        videoTouchStartX = e.changedTouches[0].screenX;

    }, { passive: true });


    videoLightbox.addEventListener("touchend", function(e) {

        const videoTouchEndX = e.changedTouches[0].screenX;

        const distance =
            videoTouchEndX - videoTouchStartX;

        if (Math.abs(distance) < 50) {
            return;
        }

        if (distance < 0) {
            nextVideo();
        } else {
            previousVideo();
        }

    }, { passive: true });

}

function copyUPI() {

    const upi = "ay6998228-3@okaxis";

    navigator.clipboard.writeText(upi).then(() => {

        document.getElementById("copyMessage").textContent =
            "✓ UPI ID कॉपी हो गई";

        setTimeout(() => {
            document.getElementById("copyMessage").textContent = "";
        }, 2500);

    });

}

/* =================================
   MAA KA AASHIRWAD
================================= */



const bellSound = new Audio("sounds/bell.mp3");

function ringBell() {

    const bell = document.querySelector(".bell-button");
    const message = document.getElementById("blessingMessage");

    // Bell animation
    bell.classList.remove("ringing");
    void bell.offsetWidth;
    bell.classList.add("ringing");

    // Bell sound
    bellSound.currentTime = 0;
    bellSound.play();

    // Blessing message
    message.innerHTML =
        "🙏 माँ दुर्गा का आशीर्वाद आप और आपके परिवार पर बना रहे 🙏";

    message.classList.add("show");

    setTimeout(() => {
        bell.classList.remove("ringing");
    }, 700);

}
bellSound.currentTime = 0;

function toggleMobileMenu() {
    const nav = document.getElementById("mainNav");

    if (nav) {
        nav.classList.toggle("show");
    }
}
