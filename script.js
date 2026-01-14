// Mobile navigation toggle
const navToggle = document.querySelector(".nav__toggle");
const navLinks = document.querySelector(".nav__links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks.addEventListener("click", (e) => {
    if (e.target.classList.contains("nav__link")) {
      navLinks.classList.remove("open");
    }
  });
}

// Smooth scroll for internal links (older browsers fallback to default)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (!targetId || targetId === "#") return;

    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Simple scroll spy to highlight active nav link
const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav__link");

function setActiveNav() {
  let currentId = "";

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 120 && rect.bottom >= 120) {
      currentId = section.id;
    }
  });

  navItems.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === `#${currentId}`) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", setActiveNav);
window.addEventListener("load", setActiveNav);

// Contact form (front-end only demo)
const contactForm = document.getElementById("contact-form");
const statusEl = document.getElementById("form-status");

if (contactForm && statusEl) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if (!name || !email || !message) {
      statusEl.textContent = "Please fill out all fields.";
      statusEl.classList.remove("form__status--success");
      statusEl.classList.add("form__status--error");
      return;
    }

    statusEl.textContent = "Thank you! Your message has been recorded locally.";
    statusEl.classList.remove("form__status--error");
    statusEl.classList.add("form__status--success");

    // Example: simulate saving locally (no real server)
    console.log("Contact form submitted:", { name, email, message });

    contactForm.reset();
  });
}

// Dynamic year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

