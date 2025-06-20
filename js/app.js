// document.addEventListener('DOMContentLoaded', function () {
//     const downloadButtons = document.querySelectorAll('.button-primary');

//     downloadButtons.forEach(button => {
//         if (button.innerText.includes('Download CV')) {
//             button.addEventListener('click', function () {
//                 const link = document.createElement('a');
//                 link.href = ''; // your PDF file path
//                 link.download = '';
//                 link.click();
//             });
//         }
//     });
// });


// document.addEventListener('DOMContentLoaded', function () {
//     const hireBtn = document.getElementById('hireMeBtn');
//     const aboutSection = document.getElementById('about');

//     hireBtn.addEventListener('click', function () {
//         aboutSection.scrollIntoView({ behavior: 'smooth' });
//     });
// });


// document.addEventListener('DOMContentLoaded', function () {
//     const hireBtn = document.getElementById('hireMeBtn');
//     const aboutSection = document.getElementById('about');
//     const contactBtn = document.getElementById('contactBtn');
//     const footerSection = document.getElementById('footer');

//     // Scroll to About section
//     if (hireBtn && aboutSection) {
//         hireBtn.addEventListener('click', function () {
//             aboutSection.scrollIntoView({ behavior: 'smooth' });
//         });
//     }

//     // Scroll to Footer section
//     if (contactBtn && footerSection) {
//         contactBtn.addEventListener('click', function () {
//             footerSection.scrollIntoView({ behavior: 'smooth' });
//         });
//     }
// });


// document.addEventListener('DOMContentLoaded', function () {
//     const hireBtn = document.getElementById('hireMeBtn');
//     const aboutSection = document.getElementById('about');
//     const contactBtn = document.getElementById('contactBtn');
//     const footerSection = document.getElementById('footer');
//     const aboutTitle = document.getElementById('aboutTitle');

//     if (hireBtn && aboutSection && aboutTitle) {
//         hireBtn.addEventListener('click', function () {
//             aboutSection.scrollIntoView({ behavior: 'smooth' });

//             // Delay adding highlight until scroll finishes
//             setTimeout(() => {
//                 aboutTitle.classList.add('highlight-title');

//                 // Remove class after animation so it can be triggered again
//                 setTimeout(() => {
//                     aboutTitle.classList.remove('highlight-title');
//                 }, 2000);
//             }, 600); // adjust this delay as needed
//         });
//     }

//     if (contactBtn && footerSection) {
//         contactBtn.addEventListener('click', function () {
//             footerSection.scrollIntoView({ behavior: 'smooth' });
//         });
//     }
// });
// script.js

// Smooth scroll to About section
const hireMeBtn = document.getElementById("hireMeBtn");
const contactBtn = document.getElementById("contactBtn");
const aboutSection = document.getElementById("about");
const footer = document.getElementById("footer");

hireMeBtn?.addEventListener("click", () => {
  aboutSection?.scrollIntoView({ behavior: "smooth" });
});

contactBtn?.addEventListener("click", () => {
  footer?.scrollIntoView({ behavior: "smooth" });
});

// Highlight About Me title on scroll
const aboutTitle = document.getElementById("aboutTitle");
window.addEventListener("scroll", () => {
  const position = aboutTitle.getBoundingClientRect();
  if (position.top >= 0 && position.bottom <= window.innerHeight) {
    aboutTitle.classList.add("highlight-title");
  }
});

