/* 
Set up initial index.html with divs to append to later in the assignment & a start button
Create an Event Listener for the button, which starts a countdown timer
*/


//Set up a variable for Quiz questions array

var quizArray = [
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

//use query selectors to return HTML elements

var countdown = document.querySelector("#countdown");
var startQuizBtn = document.querySelector("#startButton");
var questions = document.querySelector("#questions");


//test querySelectors:

console.log(countdown);
console.log(startButton);
console.log(questions);

/*Set up timer display to start a countdown when start quiz button is pressed.
Adapted from 09-Ins_Timers-Interval:*/


startQuizBtn.addEventListener("click", function() {
    var timeLeft = 81;
    var timeInterval = 0;

    if (timeInterval === 0) {
        timeInterval = setInterval(function () {
            timeLeft--;
            countdown.textContent = timeLeft;

            if (timeLeft <= 0) {
                clearInterval(timeInterval);
                allDone();
                countdown.textContent = "Game Over";
            }
        }, 1000);
    }
  });

