const date = new Date();
document.getElementById("currentyear").innerHTML = '\u00A9' + date.getFullYear();
document.getElementById("lastModified").innerHTML = 'Last modified: ' + document.lastModified;

const form = document.querySelector("form");
const thanksMessage = document.getElementById("thanks");
const username = document.getElementById("username");

function thankAndClearForm() {
    thanksMessage.innerHTML = `Thank you for your question, ${username.value}. Expect to hear back from us soon!`;
    form.reset();
}