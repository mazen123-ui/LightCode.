let menuBtn = document.querySelector(".menu-btn");
let navUl = document.querySelector("nav ul");
let navLinks = document.querySelectorAll("nav ul li a");
let header = document.querySelector("header");
let scrollBtn = document.querySelector(".scroll-btn");
let testimonialsImgs = document.querySelectorAll("#testimonials-imgs div");
let testimonialsText = document.getElementById("testimonials-text");
let testimonialsName = document.getElementById("testimonials-name");
let testimonialsRole = document.getElementById("testimonials-role");
// navbar on mobile
menuBtn.addEventListener("click", () => {
  navUl.classList.toggle("-translate-y-full");
});

// scroll btn with active header
window.addEventListener("scroll", () => {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    header.classList.add("active__header");
    scrollBtn.classList.remove("hidden");
  } else {
    header.classList.remove("active__header");
    scrollBtn.classList.add("hidden");
  }
});
scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// close navbar when click on nav link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });
    link.classList.add("active");
    navUl.classList.add("-translate-y-full");
  });
});

// dinamic testimonials
let testimonials = [
  {
    name: "John Doe",
    role: "Web Devoloper",
    text: "LightCode transformed our digital presence. Their attention to detail and innovative solutions are unmatched.",
  },
  {
    name: "Jane Smith",
    role: "Androin Devoloper",
    text: "Working with this team was a game-changer for our startup. Professional, responsive, and highly skilled.",
  },
  {
    name: "Bob Johnson",
    role: "IOS Devoloper",
    text: "The quality of work delivered exceeded our expectations. I highly recommend their services for any web project.",
  },
  {
    name: "Alice Williams",
    role: "UI/UX Devoloper",
    text: "Exceptional service and support. They truly understand the client's needs and deliver results that matter.",
  },
  {
    name: "Charlie Brown",
    role: "ML/AI Specialist",
    text: "A fantastic experience from start to finish. The final product is both beautiful and highly functional.",
  },
];
testimonialsImgs.forEach((img, index) => {
  img.addEventListener("click", () => {
    testimonialsImgs.forEach((img) => {
      img.classList.remove("active__testimonials");
    });
    img.classList.add("active__testimonials");
    testimonialsText.innerHTML = `"${testimonials[index].text}"!`;
    testimonialsName.innerHTML = testimonials[index].name;
    testimonialsRole.innerHTML = testimonials[index].role;
  });
});

testimonialsText.innerHTML = `"${testimonials[0].text}"!`;
testimonialsName.innerHTML = testimonials[0].name;
testimonialsRole.innerHTML = testimonials[0].role;
testimonialsImgs[0].classList.add("active__testimonials");

// pricing toggle
let pricingToggle = document.getElementById("pricing-toggle");
let pricingCards = document.querySelectorAll(".pricing-card");

pricingToggle.addEventListener("change", () => {
  pricingCards.forEach((card) => {
    card.classList.toggle("flipped");
  });
});

// scroll reveal
ScrollReveal({
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: true,
});

ScrollReveal().reveal(".home__content", { origin: "left" });
ScrollReveal().reveal(".home__image", { origin: "right" });
ScrollReveal().reveal(".about__content", { origin: "left" });
ScrollReveal().reveal(".about__image", { origin: "right" });
ScrollReveal().reveal(".features__card", { origin: "bottom", interval: 200 });
ScrollReveal().reveal(".testimonials__card", { origin: "bottom"});
ScrollReveal().reveal(".pricing__card", { origin: "bottom", interval: 200 });
ScrollReveal().reveal(".contact__form", { origin: "bottom" });
ScrollReveal().reveal(".footer__content", { origin: "bottom" });

