const readlineSync = require("readline-sync");
let score = 0;

var name = readlineSync.question("What is your name? ");

console.log("Hi! " + name.toUpperCase());
console.log("Lets play a quiz, 'Do you KNOW me?'");

questions = [
    {
        question: "Where do I live?",
        answer: "Kolkata"
    },
    {
        question: "What is my father's name?",
        answer: "Imran"
    },
    {
        question: "What is my favourite food?",
        answer: "Biryani"
    },
    {
        question: "Who is my best friend?",
        answer: "Rim"
    },
    {
        question: "What is my favourite sport?",
        answer: "Swimming"
    }
]

for (let i = 0; i < questions.length; i++) {
    currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
}

function play(question, answer) {
    let userAnswer = readlineSync.question(question + " ");
    if (userAnswer.toUpperCase() === answer.toUpperCase()) {
        console.log("You are Right!");
        score = score + 1
        console.log("SCORE: " + score);
    } else {
        console.log("Wrong Answer!")
        console.log("SCORE: " + score);
    }
}