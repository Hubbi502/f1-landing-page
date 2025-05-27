// Mobile Navigation
const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Close mobile menu when clicking a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("active");
    navLinks.classList.remove("active");
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll("section").forEach((section) => {
  observer.observe(section);
});

// Header background change on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.style.background = "rgba(0, 0, 0, 0.98)";
  } else {
    header.style.background = "rgba(0, 0, 0, 0.95)";
  }
});

// Add dynamic speed lines
function createSpeedLine() {
  const speedLines = document.querySelector(".speed-lines");
  const line = document.createElement("div");
  line.className = "speed-line";
  line.style.top = Math.random() * 100 + "%";
  line.style.animationDelay = Math.random() * 3 + "s";
  line.style.opacity = Math.random() * 0.5 + 0.2;
  speedLines.appendChild(line);

  // Remove line after animation
  setTimeout(() => {
    line.remove();
  }, 3000);
}

// Create speed lines periodically
setInterval(createSpeedLine, 2000);

// Counter animation for statistics
function animateCounter(element) {
  const target = parseInt(element.textContent);
  const increment = target / 100;
  let current = 0;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 20);
}

// Animate counters when they come into view
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const statNumber = entry.target.querySelector(".stat-number");
      if (statNumber && /^\d+$/.test(statNumber.textContent)) {
        animateCounter(statNumber);
      }
      statObserver.unobserve(entry.target);
    }
  });
});

document.querySelectorAll(".stat-card").forEach((card) => {
  statObserver.observe(card);
});

// Add parallax effect to hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector(".hero");
  const rate = scrolled * -0.5;
  hero.style.transform = `translateY(${rate}px)`;
});

// Add hover effects to content cards
document.querySelectorAll(".content-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px) rotateX(5deg)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0) rotateX(0)";
  });
});
