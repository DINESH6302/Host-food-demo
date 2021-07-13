"use strict";

//NOTE Toggle-menu
const toggle = document.querySelector("#nav-toggle");
const nav = document.querySelector("#nav-menu");

toggle.addEventListener("click", () => {
  nav.classList.toggle("show-menu");
});

//NOTE Remove menu when click link
const navLink = document.querySelectorAll(".nav__link");

for (let i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("click", () => {
    nav.classList.remove("show-menu");
  });
}

//NOTE Active link while scrolling
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

//NOTE Change background header
function scrollHeader() {
  const nav = document.getElementById("header");
  if (this.scrollY >= 200) {
    nav.classList.add("scroll-header");
  } else {
    nav.classList.remove("scroll-header");
  }
}
window.addEventListener("scroll", scrollHeader);

//NOTE Show scrolltop icon
function scrollTop() {
  const scrollTop = document.getElementById("scroll-top");
  if (this.scrollY >= 350) scrollTop.classList.add("show-scroll");
  else scrollTop.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollTop);

//NOTE Theme-button
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  document.body.classList.contains(darkTheme)
    ? (document.querySelector(".nav__menu").style.backgroundColor = "#1d2521")
    : (document.querySelector(".nav__menu").style.backgroundColor = "#fff");
});

//NOTE Scroll reveal animation
const sr = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 2000,
  reset: true,
});

sr.reveal(
  ".home__data, .home__img, .about__img, .about__data, .services__content, .menu__content, .app__data, .app__img, .contact__data, .contact__button, .footer__content,  .footer__copy",
  {
    interval: 200,
  }
);
