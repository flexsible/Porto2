import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';

//hamburger

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".drawer-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu(event) {
    event.preventDefault();
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

//navlink
const navLink = document.querySelectorAll(".drawer-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}