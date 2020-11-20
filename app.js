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