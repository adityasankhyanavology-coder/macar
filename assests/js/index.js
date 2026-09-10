// toggle js 
document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("headerToggle");
    const header = document.querySelector("header");

    toggle.addEventListener("click", function () {
        header.classList.toggle("menu-open");
    });
});


// sticky
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    const banner = document.querySelector(".banner");

    if (window.scrollY > banner.offsetHeight - 100) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});















const lines = [
    "Bringing you",
    "the excellence",
    "of flavor"
];

const spans = document.querySelectorAll(".banner-wrapper h1 span");

let line = 0;
let char = 0;
let deleting = false;

function typeEffect() {
    const current = lines[line];

    if (!deleting) {
        spans[line].textContent = current.substring(0, char);
        char++;

        if (char > current.length) {
            if (line < lines.length - 1) {
                line++;
                char = 0;
            } else {
                deleting = true;
                setTimeout(typeEffect, 1500);
                return;
            }
        }
    } else {
        spans[line].textContent = current.substring(0, char);
        char--;

        if (char < 0) {
            if (line > 0) {
                line--;
                char = lines[line].length;
            } else {
                deleting = false;
                char = 0;
            }
        }
    }

    setTimeout(typeEffect, deleting ? 60 : 100);
}

spans.forEach(span => span.textContent = "");

typeEffect();




///////////////header////////////


window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

