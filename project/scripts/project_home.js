const date = new Date();

const dropdownButtonOne = document.getElementById("button-one");
const dropdownOne = document.getElementById("dropdown-one");

const dropdownButtonTwo = document.getElementById("button-two");
const dropdownTwo = document.getElementById("dropdown-two");

const dropdownButtonThree = document.getElementById("button-three");
const dropdownThree = document.getElementById("dropdown-three");

const dropdownButtonFour = document.getElementById("button-four");
const dropdownFour = document.getElementById("dropdown-four");


document.getElementById("currentyear").innerHTML = '\u00A9' + date.getFullYear();
document.getElementById("lastModified").innerHTML = 'Last modified: ' + document.lastModified;

dropdownButtonOne.addEventListener('click', () => {
    dropdownButtonOne.classList.toggle('open');
    dropdownOne.classList.toggle('open');
});

dropdownButtonTwo.addEventListener('click', () => {
    dropdownButtonTwo.classList.toggle('open');
    dropdownTwo.classList.toggle('open');
});

dropdownButtonThree.addEventListener('click', () => {
    dropdownButtonThree.classList.toggle('open');
    dropdownThree.classList.toggle('open');
});

dropdownButtonFour.addEventListener('click', () => {
    dropdownButtonFour.classList.toggle('open');
    dropdownFour.classList.toggle('open');
});