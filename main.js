// TYPREWRITER

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = [
  "Full-Stack Web Developer",
  "Sofware Engineer",
  "Tech Bro😜",
];
const typingDelay = 100;
const erasingDelay = 60;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});

// NAV-TOGGLE
const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
const link = document.querySelector("#i");

link.addEventListener("click", (e) => {
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});

// LIGHT AND DARK MODE SWITCHING

// const v = document.getElementById("light");

// v.addEventListener("click", () => {
//   document.getElementById("circle").style.display = "block";
//   document.getElementById("crescent").style.display = "none";
//   document.getElementById("light").style.display = "none";
//   document.getElementById("dark").style.display = "block";
// });

// const y = document.getElementById("dark");

// y.addEventListener("click", () => {
//   document.getElementById("crescent").style.display = "block";
//   document.getElementById("circle").style.display = "none";
//   document.getElementById("dark").style.display = "none";
//   document.getElementById("light").style.display = "block";
// });

// let itheme = localStorage.getItem("theme", switchTheme);

// if (itheme == null) {
//   setTheme("light");
// } else {
//   setTheme(itheme);
// }

// let themeDots = document.getElementsByClassName("theme-dot");

// for (var i = 0; themeDots.length > i; i++) {
//   themeDots[i].addEventListener("click", function () {
//     let mode = this.dataset.mode;

//     setTheme(mode);
//   });
// }

// function setTheme(mode) {
//   if (mode == "light") {
//     document.getElementById("theme-style").href = "style.css";
//     document.getElementById("light").style.display = "none";
//   }

//   if (mode == "black") {
//     document.getElementById("theme-style").href = "darkMode.css";
//     document.getElementById("dark").style.display = "none";
//   }

//   localStorage.setItem("theme", mode)
// }

var themeSwitcher = document.querySelector(".switch input");

var currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    themeSwitcher.checked = true;
  }
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");

    localStorage.setItem("theme", "light");
  }
}

themeSwitcher.addEventListener("change", switchTheme);
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show')
    } else {
      entry.target.classList.remove('show')
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el))
