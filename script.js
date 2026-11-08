
// =================================
// MOBILE NAVIGATION
// =================================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
  });
});


// =================================
// ANIMATED STATISTICS
// =================================

const counters = document.querySelectorAll(".counter");
let countersStarted = false;

const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !countersStarted) {
      countersStarted = true;

      counters.forEach(counter => {
        const target = Number(counter.dataset.target);
        let current = 0;
        const increment = Math.max(1, Math.ceil(target / 100));

        const updateCounter = () => {
          current += increment;

          if (current >= target) {
            counter.textContent = target.toLocaleString("en-IN") + "+";
          } else {
            counter.textContent = current.toLocaleString("en-IN");
            requestAnimationFrame(updateCounter);
          }
        };

        updateCounter();
      });
    }
  });
}, { threshold: 0.3 });

const stats = document.querySelector(".stats");
counterObserver.observe(stats);


// =================================
// COURSE FILTER
// =================================

const filters = document.querySelectorAll(".filter");
const courseCards = document.querySelectorAll(".course-card");

filters.forEach(button => {

  button.addEventListener("click", () => {

    filters.forEach(item => item.classList.remove("active"));
    button.classList.add("active");

    const selected = button.dataset.filter;

    courseCards.forEach(card => {

      if (
        selected === "all" ||
        card.dataset.category === selected
      ) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }

    });

  });

});


// =================================
// 3D ADMINISTRATOR CARD
// =================================

const adminCard = document.querySelector(".admin-card");

if (window.matchMedia("(hover: hover)").matches) {

  adminCard.addEventListener("mousemove", event => {

    const rect = adminCard.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 8;
    const rotateX = (0.5 - (y / rect.height)) * 8;

    adminCard.style.transform =
      `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

  });

  adminCard.addEventListener("mouseleave", () => {
    adminCard.style.transform = "rotateX(0) rotateY(0)";
  });

}


// =================================
// GALLERY LIGHTBOX
// =================================

const galleryImages = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");

galleryImages.forEach(image => {

  image.addEventListener("click", () => {

    lightboxImage.src = image.src;
    lightbox.classList.add("show");

  });

});

closeLightbox.addEventListener("click", () => {
  lightbox.classList.remove("show");
});

lightbox.addEventListener("click", event => {
  if (event.target === lightbox) {
    lightbox.classList.remove("show");
  }
});


// =================================

// =================================
// VIDEO MANAGEMENT
// =================================

const videos = document.querySelectorAll("video");

videos.forEach(video => {

  video.addEventListener("play", () => {

    videos.forEach(otherVideo => {
      if (otherVideo !== video) {
        otherVideo.pause();
      }
    });

  });

});

// ======================================
// INTERACTIVE PROGRAM DETAILS
// ======================================

const programData = {

  npl: {
    label: "ENGINEERING PROGRAM",
    title: "NPL - NEON Premier League",
    subtitle: "Focused preparation for Engineering Entrance Examinations",

    description:
      "NPL is an engineering-oriented program under the NEON academic pathway. It focuses on JEE Main and state-level engineering entrance preparation, along with Intermediate academic learning.",

    target:
      "JEE Main, EAPCET and Intermediate academic preparation.",

    features: [
      {
        icon: "📘",
        title: "Concept Based Learning",
        text: "Structured learning in Mathematics, Physics and Chemistry."
      },
      {
        icon: "🎯",
        title: "JEE Main Preparation",
        text: "Competitive examination-oriented practice."
      },
      {
        icon: "📝",
        title: "Regular Tests",
        text: "Periodic assessments and practice examinations."
      },
      {
        icon: "📊",
        title: "Performance Analysis",
        text: "Identify learning gaps and improve subject understanding."
      },
      {
        icon: "📚",
        title: "Study Material",
        text: "Topic-wise practice and academic resources."
      },
      {
        icon: "⚡",
        title: "EAPCET Preparation",
        text: "Engineering entrance examination practice."
      }
    ]
  },

  elite: {
    label: "ELITE ACADEMIC PROGRAM",
    title: "ELITE PROGRAM",
    subtitle: "Focused learning and advanced academic preparation",

    description:
      "The Elite program is presented as a specialized academic pathway for students aiming for stronger subject understanding and competitive examination preparation. Actual batch eligibility and teaching structure should be confirmed with the branch.",

    target:
      "Strong academic performance and competitive examination readiness.",

    features: [
      {
        icon: "🎓",
        title: "Focused Teaching",
        text: "Structured classroom learning and subject guidance."
      },
      {
        icon: "📖",
        title: "Concept Clarity",
        text: "Build understanding through systematic learning."
      },
      {
        icon: "🧠",
        title: "Problem Solving",
        text: "Practice analytical and application-based questions."
      },
      {
        icon: "📝",
        title: "Test Practice",
        text: "Regular assessment and examination preparation."
      },
      {
        icon: "👨‍🏫",
        title: "Faculty Guidance",
        text: "Academic support and doubt clarification."
      },
      {
        icon: "📈",
        title: "Progress Tracking",
        text: "Review academic progress and improvement areas."
      }
    ]
  },

  aims: {
    label: "MEDICAL PROGRAM",
    title: "AIMS PROGRAM",
    subtitle: "Medical entrance examination preparation",

    description:
      "A medical-oriented learning pathway designed around Biology, Physics and Chemistry, with a focus on conceptual understanding, Intermediate studies and medical entrance examination preparation.",

    target:
      "NEET-oriented preparation and Intermediate BiPC academics.",

    features: [
      {
        icon: "🧬",
        title: "Biology Focus",
        text: "Botany and Zoology concept development."
      },
      {
        icon: "⚛️",
        title: "Physics Preparation",
        text: "Understand concepts and apply them to questions."
      },
      {
        icon: "🧪",
        title: "Chemistry Learning",
        text: "Structured preparation in Physical, Organic and Inorganic Chemistry."
      },
      {
        icon: "📚",
        title: "NCERT Learning",
        text: "Strengthen fundamental concepts and textbook understanding."
      },
      {
        icon: "📝",
        title: "NEET Practice",
        text: "Objective questions and examination-oriented practice."
      },
      {
        icon: "📊",
        title: "Performance Review",
        text: "Assess subject-wise progress through regular tests."
      }
    ]
  },

  super60: {
    label: "SPECIALIZED MEDICAL PROGRAM",
    title: "AIMS SUPER 60",
    subtitle: "Specialized and focused medical entrance preparation",

    description:
      "A specialized medical preparation program presented for students targeting high-level entrance examination performance. The exact batch eligibility, selection criteria and academic schedule must be confirmed with the concerned branch.",

    target:
      "Focused medical entrance preparation and strong Intermediate academics.",

    features: [
      {
        icon: "🏆",
        title: "Focused Preparation",
        text: "Dedicated learning towards medical entrance goals."
      },
      {
        icon: "🧬",
        title: "Biology Mastery",
        text: "Detailed Botany and Zoology preparation."
      },
      {
        icon: "⚛️",
        title: "Physics Practice",
        text: "Conceptual learning and application-based questions."
      },
      {
        icon: "🧪",
        title: "Chemistry Training",
        text: "Systematic subject-wise preparation."
      },
      {
        icon: "📋",
        title: "Test Series",
        text: "Practice assessments and performance reviews."
      },
      {
        icon: "🎯",
        title: "Revision Strategy",
        text: "Structured revision and examination readiness."
      }
    ]
  }

};


// ======================================
// SHOW SELECTED PROGRAM
// ======================================

function showProgram(program) {

  const data = programData[program];

  if (!data) return;

  document.getElementById("detailLabel").textContent =
    data.label;

  document.getElementById("detailTitle").textContent =
    data.title;

  document.getElementById("detailSubtitle").textContent =
    data.subtitle;

  document.getElementById("detailDescription").textContent =
    data.description;

  document.getElementById("detailTarget").textContent =
    data.target;


  // CREATE FEATURE CARDS

  const featureBox = document.getElementById("featuresGrid");

  featureBox.innerHTML = "";

  data.features.forEach(feature => {

    const item = document.createElement("div");

    item.className = "feature-item";

    const icon = document.createElement("span");
    icon.textContent = feature.icon;

    const heading = document.createElement("h4");
    heading.textContent = feature.title;

    const paragraph = document.createElement("p");
    paragraph.textContent = feature.text;

    item.append(icon, heading, paragraph);

    featureBox.appendChild(item);

  });


  // OPEN DETAILS

  const details = document.getElementById("programDetails");

  details.classList.add("active");

  details.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

}


// ======================================
// CLOSE PROGRAM DETAILS
// ======================================

function closeProgram() {

  document.getElementById("programDetails")
    .classList.remove("active");

  document.getElementById("courses")
    .scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

}



// AUTO SELECT COURSE IN ADMISSION FORM

document.querySelectorAll(".program-target a").forEach(link => {

  link.addEventListener("click", () => {

    const title = document.getElementById("detailTitle").textContent;

    const courseSelect = document.getElementById("course");

    if (title.includes("NPL")) {
      courseSelect.value = "JEE";
    } else if (title.includes("ELITE")) {
      courseSelect.value = "MPC";
    } else if (title.includes("SUPER 60") || title.includes("AIMS")) {
      courseSelect.value = "NEET";
    }

  });

});

function calculateExpenses() {

    const tuition = Number(document.getElementById("tuition").value) || 0;
    const books = Number(document.getElementById("books").value) || 0;
    const uniform = Number(document.getElementById("uniform").value) || 0;

    const hostel = Number(document.getElementById("hostel").value) || 0;
    const pocket = Number(document.getElementById("pocket").value) || 0;
    const dhobi = Number(document.getElementById("dhobi").value) || 0;

    const transport = Number(document.getElementById("transport").value) || 0;
    const other = Number(document.getElementById("other").value) || 0;

    // Annual expenses + 12 months of monthly expenses
    const total =
        tuition +
        books +
        uniform +
        hostel +
        transport +
        other +
        (pocket * 12) +
        (dhobi * 12);

    const monthly = pocket + dhobi;

    document.getElementById("grandTotal").textContent =
        "₹" + total.toLocaleString("en-IN");

    document.getElementById("monthlyTotal").textContent =
        "Monthly Pocket Money & Laundry: ₹" +
        monthly.toLocaleString("en-IN");
}


function resetExpenses() {

    const fields = [
        "tuition",
        "books",
        "uniform",
        "hostel",
        "pocket",
        "dhobi",
        "transport",
        "other"
    ];

    fields.forEach(id => {
        document.getElementById(id).value = 0;
    });

    calculateExpenses();
}

const programFees = {

    npl: {
        name: "NPL - Engineering",
        academic: {
    "Tuition Fee": 60000,
    "Books & Study Material": 10500,
    "Uniform": 0,
    "ID Card": 150,
},
        campus: {
            "Hostel Fee": 65000,
            "Pocket Money (Annual)": 6000,
            "Dhobi / Laundry (Annual)": 3000
        },
        other: {
            "Transport Fee": 0,
            "Other Charges": 0
        }
    },
nplsemiac: {
        name: "NPL - Engineering",
        academic: {
    "Tuition Fee": 60000,
    "Books & Study Material": 10500,
    "Uniform": 0,
    "ID Card": 150,
},
        campus: {
            "Hostel Fee": 85000,
            "Pocket Money (Annual)": 6000,
            "Dhobi / Laundry (Annual)": 3000
        },
        other: {
            "Transport Fee": 0,
            "Other Charges": 0
        }
    },
CIPL: {
        name: "CIPL - Engineering",
        academic: {
    "Tuition Fee": 75000,
    "Books & Study Material": 16900,
    "Uniform": 0,
    "ID Card": 150,
},
        campus: {
            "Hostel Fee": 60000,
            "Pocket Money (Annual)": 6000,
            "Dhobi / Laundry (Annual)": 3000
        },
        other: {
            "Transport Fee": 0,
            "Other Charges": 0
        }
    },
CIPL1: {
        name: "CIPL - Engineering",
        academic: {
    "Tuition Fee": 75000,
    "Books & Study Material": 16900,
    "Uniform": 0,
    "ID Card": 150,
},
        campus: {
            "Hostel Fee": 80000,
            "Pocket Money (Annual)": 6000,
            "Dhobi / Laundry (Annual)": 3000
        },
        other: {
            "Transport Fee": 0,
            "Other Charges": 0
        }
    },

    Others: {
        name: "Other",
        academic: {
  "Other Course Fee details Please visit Fee structure Bar": 0,
},
        
    }
};


function loadProgramFees() {
  
  const selected = document.getElementById("feeProgram").value;
  
  const result = document.getElementById("feeResult");
  const list = document.getElementById("programFeeList");
  
  if (!selected) {
    result.style.display = "none";
    return;
  }
  
  // OTHERS OPTION
  if (selected === "Others") {
    
    result.style.display = "block";
    
    document.getElementById("selectedProgramTitle").textContent =
      "More Fee Details";
    
    list.innerHTML = `
            <div class="other-fee-message">
                <p>
                    For more fee details, please refer to our
                    complete fee structure.
                </p>

                <a href="#fee-structure" class="btn primary">
                    View Fee Structure ↗
                </a>
            </div>
        `;
    
    return;
  }
  
  if (!programFees[selected]) {
    result.style.display = "none";
    return;
  }
  
  const data = programFees[selected];
  
  document.getElementById("selectedProgramTitle").textContent =
    data.name + " - Fee Details";
  
  let total = 0;
  let html = "";
  
  function addCategory(title, items) {
    
    html += `<h3 class="program-fee-category">${title}</h3>`;
    
    for (const [name, amount] of Object.entries(items)) {
      
      total += amount;
      
      html += `
                <div class="program-fee-row">
                    <span>${name}</span>
                    <strong>₹${amount.toLocaleString("en-IN")}</strong>
                </div>
            `;
    }
  }
  
  addCategory("🎓 Academic Expenses", data.academic);
  addCategory("🏠 Campus & Living Expenses", data.campus);
  addCategory("🚌 Other Expenses", data.other);
  
  list.innerHTML = html;
  
  document.getElementById("grandTotal").textContent =
    "₹" + total.toLocaleString("en-IN");
  
  result.style.display = "block";
}

const facilityData = {

    digital: {
        icon: "💻",
        title: "Online Exams",
        description: "Technology-supported classroom learning designed to make academic concepts easier to understand through digital teaching resources."
    },

    lab: {
        icon: "🔬",
        title: "Science Laboratories",
        description: "Practical learning opportunities through subject-related demonstrations and laboratory activities."
    },

    library: {
        icon: "📚",
        title: "Library",
        description: "A learning space where students can read, refer to study materials and prepare for academic examinations."
    },

    hostel: {
        icon: "🏠",
        title: "Residential Hostel",
        description: "Residential accommodation facilities designed to support students during their academic journey."
    },

    dining: {
        icon: "🍽️",
        title: "Dining & Food",
        description: "Campus dining arrangements for students staying in the residential campus."
    },

    sports: {
        icon: "⚽",
        title: "Sports & Recreation",
        description: "Sports and recreational activities that encourage teamwork, participation and overall development."
    },

    security: {
        icon: "🛡️",
        title: "CCTV Security",
        description: "CCTV monitoring and campus security arrangements to support a safer learning environment."
    },

    doubts: {
        icon: "👨‍🏫",
        title: "Doubt Clarification",
        description: "Academic guidance and doubt clarification sessions to help students understand their subjects."
    }

};


let currentFacility = "";


function openFacility(name) {

    const data = facilityData[name];

    if (!data) return;

    currentFacility = data.title;

    document.getElementById("modalIcon").textContent =
        data.icon;

    document.getElementById("modalTitle").textContent =
        data.title;

    document.getElementById("modalDescription").textContent =
        data.description;

    document.getElementById("facilityModal")
        .classList.add("active");

    document.body.style.overflow = "hidden";
}


function closeFacility() {

    document.getElementById("facilityModal")
        .classList.remove("active");

    document.body.style.overflow = "";
}


function facilityEnquiry() {

    const message = encodeURIComponent(
        "Hello, I would like to know more about " +
        currentFacility +
        " at Sri Chaitanya Junior College."
    );

    // Replace with your college WhatsApp number
    const number = "916302173772";

    window.open(
        "https://wa.me/" + number + "?text=" + message,
        "_blank"
    );
}


// Close popup when clicking outside

document.getElementById("facilityModal")
    .addEventListener("click", function(event) {

        if (event.target === this) {
            closeFacility();
        }

    });


// Close popup with Escape key

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeFacility();
    }

});
document.getElementById("parentCallbackForm")
.addEventListener("submit", function(event) {

  event.preventDefault();

  const parent = document.getElementById("parentName").value.trim();
  const student = document.getElementById("studentName").value.trim();
  const mobile = document.getElementById("parentMobile").value.trim();
  const course = document.getElementById("callbackCourse").value;
  const message = document.getElementById("callbackMessage").value.trim();

  if (!/^[0-9]{10}$/.test(mobile)) {
    alert("Please enter a valid 10-digit mobile number.");
    return;
  }

  // Replace with your college WhatsApp number
  const collegeWhatsApp = "916302173772";

  const enquiry =
`PARENT CALLBACK REQUEST

Parent Name: ${parent}
Student Name: ${student}
Mobile: ${mobile}
Course: ${course}
Message: ${message || "No additional message"}`;

  const whatsappURL =
    "https://wa.me/" + collegeWhatsApp +
    "?text=" + encodeURIComponent(enquiry);

  window.open(whatsappURL, "_blank");
});
// FULL SCREEN VIDEO PLAYER

function openFullScreenVideo(videoPath) {

  const popup = document.getElementById("videoPopup");
  const video = document.getElementById("popupVideo");

  video.src = videoPath;
  popup.classList.add("active");

  video.play().catch(() => {
    // Play button can be pressed manually.
  });

}

function closeFullScreenVideo() {

  const popup = document.getElementById("videoPopup");
  const video = document.getElementById("popupVideo");

  video.pause();
  video.removeAttribute("src");
  video.load();

  popup.classList.remove("active");

}
document.addEventListener("DOMContentLoaded", function () {

  // MOBILE NAVIGATION
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
      navMenu.classList.toggle("show");
    });

    navMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navMenu.classList.remove("show");
      });
    });
  }

  // ADMISSION FORM
  const admissionForm = document.getElementById("admissionForm");

  if (!admissionForm) return;

  admissionForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const studentName =
      document.getElementById("studentName").value.trim();

    const parentName =
      document.getElementById("parentName").value.trim();

    const mobile =
      document.getElementById("mobile").value.trim();

    const course =
      document.getElementById("course").value;

    const message =
      document.getElementById("message").value.trim();

    const campusInput =
      admissionForm.querySelector('input[readonly]');

    const campus = campusInput ? campusInput.value : "";

    const documents = Array.from(
      admissionForm.querySelectorAll(
        'input[name="documents"]:checked'
      )
    ).map(function (item) {
      return item.value;
    });

    if (!/^[6-9][0-9]{9}$/.test(mobile)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    const date = new Date().toLocaleString("en-IN");

    const details = [
      "SRI CHAITANYA JUNIOR COLLEGE",
      "ADMISSION ENQUIRY",
      "--------------------------",
      "Student Name: " + studentName,
      "Parent Name: " + parentName,
      "Mobile: " + mobile,
      "Course: " + course,
      "Campus: " + campus,
      "Documents: " + (documents.join(", ") || "Not selected"),
      "Message: " + (message || "No message"),
      "Date: " + date
    ].join("\n");

    // GENERATE PDF
    if (!window.jspdf) {
      alert("PDF library not loaded. Please check internet connection.");
      return;
    }

    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF();

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(17);
    pdf.text("SRI CHAITANYA JUNIOR COLLEGE", 20, 20);

    pdf.setFontSize(14);
    pdf.text("ADMISSION ENQUIRY FORM", 20, 32);

    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(11);

    const lines = pdf.splitTextToSize(details, 170);
    pdf.text(lines, 20, 45);

    const fileName =
      "Admission-" + studentName.replace(/[^a-z0-9]/gi, "-") + ".pdf";

    pdf.save(fileName);

    // OPEN WHATSAPP
    const whatsappNumber = "916302173772";

    const whatsappURL =
      "https://wa.me/" + whatsappNumber +
      "?text=" + encodeURIComponent(details);

    window.open(whatsappURL, "_blank");

    alert("Your admission enquiry PDF is ready. Please send the WhatsApp message.");

    admissionForm.reset();
  });

});

// ======================================
// ADMISSION FORM - PDF + WHATSAPP
// ======================================

const admissionForm = document.getElementById("admissionForm");

if (admissionForm) {

  admissionForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const studentName =
      document.getElementById("studentName").value.trim();

    const parentName =
      document.getElementById("parentName").value.trim();

    const mobile =
      document.getElementById("mobile").value.trim();

    const course =
      document.getElementById("course").value;

    const campus =
      admissionForm.querySelector('input[readonly]').value;

    const message =
      document.getElementById("message").value.trim();

    const documents = Array.from(
      admissionForm.querySelectorAll(
        'input[name="documents"]:checked'
      )
    ).map(item => item.value);

    // MOBILE VALIDATION
    if (!/^[6-9][0-9]{9}$/.test(mobile)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    // FORM DETAILS
    const date = new Date().toLocaleString("en-IN");

    const details = [
      "SRI CHAITANYA JUNIOR COLLEGE",
      "ADMISSION ENQUIRY FORM",
      "--------------------------------",
      "Student Name: " + studentName,
      "Parent Name: " + parentName,
      "Mobile Number: " + mobile,
      "Course: " + course,
      "Preferred Campus: " + campus,
      "Documents Available:",
      documents.length ? documents.join(", ") : "Not selected",
      "Message: " + (message || "Not provided"),
      "Date: " + date
    ];

    // CHECK PDF LIBRARY
    if (!window.jspdf || !window.jspdf.jsPDF) {
      alert("PDF library load avvaledhu. Internet check chesi refresh cheyyandi.");
      return;
    }

    // GENERATE PDF
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF();

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(17);
    pdf.text("SRI CHAITANYA JUNIOR COLLEGE", 20, 20);

    pdf.setFontSize(14);
    pdf.text("ADMISSION ENQUIRY FORM", 20, 32);

    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(11);

    let y = 48;

    details.slice(2).forEach(line => {

      const wrappedLines = pdf.splitTextToSize(line, 170);

      if (y + wrappedLines.length * 7 > 275) {
        pdf.addPage();
        y = 20;
      }

      pdf.text(wrappedLines, 20, y);
      y += wrappedLines.length * 7 + 3;

    });

    const safeName = studentName.replace(/[^a-z0-9]/gi, "_");

    pdf.save("Admission_Form_" + safeName + ".pdf");

    // WHATSAPP MESSAGE
    const whatsappNumber = "916302173772";

    const whatsappMessage = details.join("\n");

    const whatsappURL =
      "https://wa.me/" +
      whatsappNumber +
      "?text=" +
      encodeURIComponent(whatsappMessage);

    window.open(whatsappURL, "_blank");

    alert("Admission PDF downloaded! WhatsApp message ready. Please press Send.");

    admissionForm.reset();

  });

}
