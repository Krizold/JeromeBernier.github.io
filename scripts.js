document.addEventListener("DOMContentLoaded", function () {
    // Navigation fluide
    const smoothScrollLinks = document.querySelectorAll("a[href^='#']");

    for (const link of smoothScrollLinks) {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            const scrollToPosition = targetElement.offsetTop;

            window.scrollTo({
                top: scrollToPosition,
                behavior: "smooth",
            });
        });
    }

    // Fonction pour gérer l'apparition des éléments animés lors du défilement
    function animateOnScroll() {
        const animatedElements = document.querySelectorAll('.animate');
        const windowHeight = window.innerHeight;

        animatedElements.forEach((element) => {
            const elementPosition = element.getBoundingClientRect().top;
            if (elementPosition <= windowHeight - 100) {
                element.classList.add('visible');
            }
        });
    }

    // Initialisation des fonctions
    animateOnScroll();

    // Gérer l'apparition des éléments animés lors du défilement
    window.addEventListener('scroll', animateOnScroll);
});

document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".swiper-container", {
        slidesPerView: "auto",
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1, // Affiche 3 éléments à la fois
        loop: true, // Active la boucle
        margin: 10, // Marge entre les éléments
        nav: true, // Affiche les boutons de navigation
        navText: ["Précédent", "Suivant"], // Texte des boutons de navigation
        stagePadding: 50, // Ajoute un espace sur les côtés de la scène pour centrer les éléments
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 5
            }
        }
    });
});
// Anime les barres de progression des compétences
function animateSkillBars() {
    const skills = document.querySelectorAll(".skill");
    skills.forEach((skill) => {
        const progressBar = skill.querySelector(".progress-bar");
        const skillValue = getComputedStyle(progressBar).getPropertyValue("--skill-value");
        progressBar.style.width = "0%";

        if (isElementInViewport(skill)) {
            progressBar.style.transition = "width 2s";
            progressBar.style.width = skillValue + "%";
        }
    });
}

// Vérifie si un élément est visible à l'écran
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Initialise AOS (Animate on Scroll) et ajoute un événement pour animer les barres de compétences
AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
    startEvent: "DOMContentLoaded",
    beforeInit: animateSkillBars,
});

window.addEventListener("scroll", animateSkillBars);
