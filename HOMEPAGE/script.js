const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.navlinks');
const cont=document.querySelector('.container');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('navactive');
    cont.classList.toggle('contdrop');
});


document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.getElementById("loginButton");
    const logoutButton = document.getElementById("logoutButton");

    if (localStorage.getItem("isLoggedIn") === "true") {
        loginButton.style.display = "none";  // Hide login button
        logoutButton.style.display = "block"; // Show logout button
    } else {
        loginButton.style.display = "block";
        logoutButton.style.display = "none";
    }
});

// Logout Function
function logoutUser() {
    localStorage.removeItem("isLoggedIn");
    window.location.reload(); // Reload to update UI
}

