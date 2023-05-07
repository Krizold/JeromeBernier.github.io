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

