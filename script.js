// script.js
// Affiche une animation d'entrée et un message d'accueil
window.addEventListener('load', () => {
    document.body.classList.add('fade-in');
    setTimeout(() => {
        alert('Bienvenue sur la plateforme de gestion de vol !');
    }, 2000);
});

// Fonction de confirmation sur les liens de navigation
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        const confirmNavigation = confirm(`Voulez-vous vraiment accéder à ${link.textContent} ?`);
        if (!confirmNavigation) {
            event.preventDefault();
        }
    });
});
