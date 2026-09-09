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

