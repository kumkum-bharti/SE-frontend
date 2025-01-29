const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.navlinks');
const cont=document.querySelector('.container');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('navactive');
    cont.classList.toggle('contdrop');
});
