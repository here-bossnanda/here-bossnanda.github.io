const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function() {
    nav.classList.toggle("slide");
});

// FUNCTION TYPING
const texts = [
    "WELCOME, FELLAS;",
    "I AM WEB DEVELOPER",
    "SOFTWARE ENGINNER",
    "FULLSTACK DEVELOPER",
    "PEMPEK CITY PRIDE",
];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typing").textContent = letter;

    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }
    setTimeout(type, 300);
})();

// EFFECT SCROLL SWIPE UP

function scrollAppear() {
    let introText = document.querySelector(".appear-hide");
    let introPosition = introText.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 2;

    if (introPosition < screenPosition) {
        introText.classList.add("appear-show");
    }

    // console.log(introPosition);
}

function scrollAppear2() {
    let introText = document.querySelector(".appear-hide2");
    let introPosition = introText.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 2;

    if (introPosition < screenPosition) {
        introText.classList.add("appear-show");
    }

    // console.log(introPosition);
}

window.addEventListener("scroll", scrollAppear);
window.addEventListener("scroll", scrollAppear2);

// FUNCTION GO TO UP

//Get the button
var mybutton = document.getElementById("btnUp");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// PRELOADER
let spinner = document.querySelector(".loader-bg");

window.addEventListener("load", function() {
    spinner.parentElement.removeChild(spinner);
});