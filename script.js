window.addEventListener("load", function () {
    const loader = document.getElementById("loader");

    if (loader) {
        setTimeout(function () {
            loader.style.display = "none";
        }, 500);
    }
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("#nav-menu a");

window.addEventListener("scroll", function () {

    let current = "";

    sections.forEach(function (section) {
        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(function (link) {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });

});

    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });

        const navLinks = navMenu.querySelectorAll("a");

        navLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                navMenu.classList.remove("active");
            });
        });
    }

});
document.addEventListener("DOMContentLoaded", () => {

    const skills = document.querySelectorAll(".skill");

    skills.forEach(skill => {

        const percentage = skill.querySelector(".percentage");
        const progress = skill.querySelector(".skill-progress");

        const target = Number(percentage.dataset.target);
        const width = progress.dataset.width;

        // Animate the blue bar
        setTimeout(() => {
            progress.style.width = width;
        }, 300);

        // Animate the percentage number
        let current = 0;

        const counter = setInterval(() => {
            current++;

            percentage.textContent = current + "%";

            if (current >= target) {
                clearInterval(counter);
            }
        }, 2000 / target);
    });

});
