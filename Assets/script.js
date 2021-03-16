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
var timeLeft = 81;
var timeInterval = 0;

startQuizBtn.addEventListener("click", function() {
    

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
    // clear existing data on page
    questions.innerHTML = "";
    ulCreate.innerHTML = "";
    
    // Loop through all info in array
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
       
        if (element.textContent === quizArray[questionsIndex].answer) {
            score++;
            createDiv.textContent = "You got the answer right!!";
           
        } else {
            // Deduct 10 seconds from timeLeft for every wrong answer
            var penalty = 10;
            timeLeft = timeLeft - penalty;
            createDiv.textContent = "Wrong! The correct answer is:  " + quizArray[questionsIndex].answer;
        }
    }

// Question Index determines number question user is on
questionsIndex++;

if (questionsIndex >= quizArray.length) {
    // All done will append last page with user stats
    allDone();
    createDiv.textContent = "End of quiz!" + " " + "You got  " + score + "question(s) right!!"
} else {
    render(questionsIndex);
}
questions.appendChild(createDiv);

}
// All done will append last page
function allDone() {
    questions.innerHTML = "";
    countdown.innerHTML = "";

    // Heading:
    var createH1 = document.createElement("h1");
    createH1.setAttribute("id", "createH1");
    createH1.textContent = "All Done!"

    questions.appendChild(createH1);

    // Paragraph
    var createP = document.createElement("p");
    createP.setAttribute("id", "createP");

    questions.appendChild(createP);

    // Calculates time remaining and replaces it with score
    if (timeLeft >= 0) {
        var timeRemaining = timeLeft;
        var createP2 = document.createElement("p");
        clearInterval(timeInterval);
        createP.textContent = "Your final score is: " + timeRemaining;

        questions.appendChild(createP2);
    }
    

var createLabel = document.createElement("label");
createLabel.setAttribute("id", "createLabel");
createLabel.textContent = "Enter your initials:";

questions.appendChild(createLabel);

// input
var createInput = document.createElement("input");
createInput.setAttribute("type", "text");
createInput.setAttribute("id", "initials");
createInput.textContent = "";

questions.appendChild(createInput);

// submit
var createSubmit = document.createElement("button");
createSubmit.setAttribute("type", "submit");
createSubmit.setAttribute("id", "Submit");
createSubmit.textContent = "Submit";

questions.appendChild(createSubmit);

// Event listener to capture initials and local storage for initials and score
createSubmit.addEventListener("click", function () {
    var initials = createInput.value;

    if (initials === null) {

        console.log("Please enter your initials");

    } else {
        var finalScore = {
            initials: initials,
            score: timeRemaining
        }
        console.log(finalScore);
        var allScores = localStorage.getItem("allScores");
        if (allScores === null) {
            allScores = [];
        } else {
            allScores = JSON.parse(allScores);
        }
        allScores.push(finalScore);
        var newScore = JSON.stringify(allScores);
        localStorage.setItem("allScores", newScore);
        
        window.location.replace("./HighScores.html");
    }
});

}
