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
// Fonction pour détecter si l'appareil est un appareil iOS
function isIOS() {
    // Teste si l'agent utilisateur est un iPad, iPhone ou iPod, et vérifie également que ce n'est pas un appareil Windows
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
}

// Si la fonction isIOS() renvoie true, cela signifie que nous sommes sur un appareil iOS
function isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
}

if (isIOS()) {
    const parallaxSections = document.querySelectorAll("#parallax, #parallax2");
    parallaxSections.forEach((section) => {
        section.classList.add("hide-parallax");
    });
}

// Appelez la fonction applyIOSParallaxStyles() au chargement de la page
document.addEventListener("DOMContentLoaded", function () {
    applyIOSParallaxStyles();
});
    // Initialisation des fonctions
    animateOnScroll();

    // Gérer l'apparition des éléments animés lors du défilement
    window.addEventListener('scroll', animateOnScroll);
});

$(document).ready(function () {
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
