/* 
Set up initial index.html with divs to append to later in the assignment & a start button
Create an Event Listener for the button, which starts a countdown timer
*/


//Set up a variable for Quiz Questions in an array

var quizArray = [
    {
        title: "Question 1",
        choices: ["a", "b", "c", "d"],
        answer: "a"
    },
    {
        title: "Question 2",
        choices: ["a", "b", "c", "d"],
        answer: "a"
    },
    {
        title: "Question 3",
        choices: ["a", "b", "c", "d"],
        answer: "a"
    },
    {
        title: "Question 4",
        choices: ["a", "b", "c", "d"],
        answer: "a"
    },
    {
        title: "Question 5",
        choices: ["a", "b", "c", "d"],
        answer: "a"
    },
    {
        title: "Question 6",
        choices: ["a", "b", "c", "d"],
        answer: "a"
    },
    {
        title: "Question 7",
        choices: ["a", "b", "c", "d"],
        answer: "a"
    },
    {
        title: "Question 8",
        choices: ["a", "b", "c", "d"],
        answer: "a"
    },
    {
        title: "Question 9",
        choices: ["a", "b", "c", "d"],
        answer: "a"
    },
    {
        title: "Question 10",
        choices: ["a", "b", "c", "d"],
        answer: "a"
    },
];

// state query selectors to link HTML elements to JS

var countdown = document.querySelector("#countdown");
var questions = document.querySelector("#questions");
var startQuizBtn = document.querySelector("#startButton");

//test querySelectors:

console.log(countdown);
console.log(startButton);
console.log(questions);

/* Set up timer display to start a countdown when start quiz button is pressed.
Adapted from web search for countdown timers */

var questionsIndex  = 0;
var score = 0;
var ulCreate = document.createElement("ul");

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
    render(questionsIndex);
  });

// Adds the questions and multiple choice options to the page: 
function render(questionsIndex) {
    // clear existing copy on page
    questions.innerHTML = "";
    ulCreate.innerHTML = "";
    
    // For loops to loop through all info in array
    for (var i = 0; i < quizArray.length; i++) {

        // Add question "titles" to page 
        var askQuestion = quizArray[questionsIndex].title;
        var showAnswers = quizArray[questionsIndex].choices;
        questions.textContent = askQuestion;
    }
    
    // New for each for question choices
    showAnswers.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questions.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}

function compare(event) {
    var element = event.target;


    if (element.matches("li")) {

        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
        // Correct condition 
        if (element.textContent == quizArray[questionsIndex].answer) {
            score++;
            createDiv.textContent = "You got the answer right!!";
            // Correct condition 
        } else {
            // Deduct -10 seconds from timeLeft for incorrect answer
            var penalty = 10;
            timeLeft = timeLeft - penalty;
            createDiv.textContent = "Wrong! The correct answer is:  " + quizArray[questionsIndex].answer;
        }

    }
