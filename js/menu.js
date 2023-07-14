/* Cuando hago CLICK .button, .nav TOGGLE 'activo' */
var button = document.querySelector('.button');
var nav = document.querySelector('.nav');
button.addEventListener('click', function () {
    nav.classList.toggle('activo');
});
const text = "Full Stack Developer studies at Coderhouse | Developer with extensive experience in independent projects.";
let index = 0;
let speed = 100;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}

window.addEventListener('load', typeWriter);