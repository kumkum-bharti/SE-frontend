const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.navlinks');
const cont=document.querySelector('.container');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('navactive');
    cont.classList.toggle('contdrop');
});

const baseUrl=window.APP_CONFIG.baseUrl;
document.addEventListener("DOMContentLoaded", function () {
    // Update UI for all auth-dependent buttons
    Auth.updateUI();
    
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.navlinks');
    const cont = document.querySelector('.container');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('navactive');
        cont.classList.toggle('contdrop');
    });
});


// Logout Function
function logoutUser() {
    window.location.href="/dashboard/db.html" // Reload to update UI
}
