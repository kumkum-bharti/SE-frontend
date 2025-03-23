const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.navlinks');
const cont=document.querySelector('.container');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('navactive');
    cont.classList.toggle('contdrop');
});

const baseUrl="https://ba93-14-139-254-36.ngrok-free.app/";

localStorage.setItem("baseUrl", baseUrl);