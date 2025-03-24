const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.navlinks');
const cont=document.querySelector('.container');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('navactive');
    cont.classList.toggle('contdrop');
});

const baseUrl="https://ba93-14-139-254-36.ngrok-free.app/";

localStorage.setItem("baseUrl", baseUrl);

document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.getElementById("loginButton");
    const dashboardButton = document.getElementById("dashboardButton");

    if (localStorage.getItem("isLoggedIn") === "true") {
        loginButton.style.display = "none";  // Hide login button
        dashboardButton.style.display = "block"; // Show logout button
    } else {
        loginButton.style.display = "block";
        dashboardButton.style.display = "none";
    }
});

// Logout Function
function logoutUser() {
    localStorage.removeItem("isLoggedIn");
    window.location.reload(); // Reload to update UI
}
