/* Cuando hago CLICK .button, .nav TOGGLE 'activo' */
const button = document.querySelector('.button');
const nav = document.querySelector('.nav');
button.addEventListener('click', function () {
    nav.classList.toggle('activo');
});
const text = "Full Stack Developer | Developer with extensive experience in independent projects.";
let index = 0;
let speed = 35;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}
window.addEventListener('load', typeWriter);