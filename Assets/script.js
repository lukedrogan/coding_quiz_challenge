/* 
Set up initial index.html with divs to append to later in the assignment & a start button
Create an Event Listener for the button, which starts a countdown timer
*/


var timeLeft = 120;
var startButton = document.getElementById('startButton');
var timeEl = document.getElementById('timer');

startButton.addEventListener('click', setTime())

//Set up a variable for Quiz questions array

var quizQuestions = [
    {
        title: "Question 1",
        choices: ["a", "b", "c", "d"],
        answer: "answer"
    },
    {
        title: "Question 2",
        choices: ["a", "b", "c", "d"],
        answer: "answer"
    },
    {
        title: "Question 3",
        choices: ["a", "b", "c", "d"],
        answer: "answer"
    },
    {
        title: "Question 4",
        choices: ["a", "b", "c", "d"],
        answer: "answer"
    },
    {
        title: "Question 5",
        choices: ["a", "b", "c", "d"],
        answer: "answer"
    },

];