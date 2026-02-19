const date = new Date();
document.getElementById("currentyear").innerHTML = '\u00A9' + date.getFullYear();
document.getElementById("lastModified").innerHTML = 'Last modified: ' + document.lastModified;

const quizQuestion = document.getElementById("quiz-question");
const quizAnswerOne = document.getElementById("answer-text-one");
const quizAnswerTwo = document.getElementById("answer-text-two");
const quizAnswerThree = document.getElementById("answer-text-three");
const answerButton = document.getElementById("answerButton");
const form = document.querySelector("form");
const radioAnswers = document.getElementsByName("answer");
const outcome = document.getElementById("outcome");
const questions = [
  {
    question: "What food should make up most of your rabbit's diet?",
    answerOne: "Lettuce",
    answerTwo: "Carrots",
    answerThree: "Hay"
  },
  {
    question: "What size cage should my rabbit live in?",
    answerOne: "None, they should have a dedicated indoor space",
    answerTwo: "As big as you can get",
    answerThree: "None, they should live outdoors"
  },
  {
    question: "Is it okay to carry my rabbit around?",
    answerOne: "Rabbits love being carried",
    answerTwo: "Only if you absolutely have to",
    answerThree: "Yes, just don't put them in your purse"
  }];

let currentQuestion = 0;
let correctCount = Number(window.localStorage.getItem("correctCount")) || 0;

function fillQuizQuestion(question) 
{
    quizQuestion.textContent = question.question;
    quizAnswerOne.textContent = question.answerOne;
    quizAnswerTwo.textContent = question.answerTwo;
    quizAnswerThree.textContent = question.answerThree;
}
 
function checkAnswer()
{
    let correct = false;
    let value = 0;
    
    radioAnswers.forEach(radio => {
        if (radio.checked) {
            value = radio.value
        }
    });

    console.log(value);

    if (currentQuestion == 0) {
        if (value == 3) {
            correct = true;
        }
    }
    else if (currentQuestion == 1) {
        if (value == 1) {
            correct = true;
        }
    }
    else {
        if (value == 2) {
            correct = true;
        }
    }

    if (correct) {
        correctCount += 1;
        localStorage.setItem("correctCount", correctCount);
        outcome.innerHTML = `Correct!`;
    }
    else {
        if (currentQuestion == 0) {
            outcome.innerHTML = `Sorry, the correct answer was "${questions[currentQuestion].answerThree}."`;
        }
        else if (currentQuestion == 1) {
            outcome.innerHTML = `Sorry, the correct answer was "${questions[currentQuestion].answerOne}."`;
        }
        else {
            outcome.innerHTML = `Sorry, the correct answer was "${questions[currentQuestion].answerTwo}."`;
        }
    }

    outcome.innerHTML += ` You have gotten ${correctCount} questions correct.`;
    currentQuestion += 1;

    if (currentQuestion >= questions.length) {
        currentQuestion = 0;
    }

    form.reset();
    fillQuizQuestion(questions[currentQuestion]);
}

fillQuizQuestion(questions[currentQuestion]);