const date = new Date();
const hamButton = document.getElementById("hamburger");
const nav = document.querySelector("ul");

document.getElementById("currentyear").innerHTML = '\u00A9' + date.getFullYear();
document.getElementById("lastModified").innerHTML = 'Last modified: ' + document.lastModified;

hamButton.addEventListener('click', () => {
    hamButton.classList.toggle('open');
    nav.classList.toggle('open');
});