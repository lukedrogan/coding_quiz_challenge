/* 
Set up initial index.html with divs to append to later in the assignment & a start button
Create an Event Listener for the button, which starts a countdown timer
*/


//Set up a variable for Quiz Questions in an array

var quizArray = [
    {
        title: "What are variables used for in JavaScript?",
        choices: ["For storing or holding data.", 
        "For changing a value's data type.", 
        "For changing language settings.", 
        "For doing arithmetic in our code."],
        answer: "For storing or holding data."
    },
    {
        title: "Which of the following is an example of a single line comment?",
        choices: ["console.log()", 
        "console.log('Is this a comment?');",
        "//Is this a comment?", 
        "'Is this a comment?'"],
        answer: "//Is this a comment?"
    },
    {
        title: "What is the correct way to call the random method on the Math global object?",
        choices: ["Math(random)", 
        "math.random()", 
        "random.Math()", 
        "Math.random()"],
        answer: "Math.random()"
    },
    {
        title: "What is string interpolation?",
        choices: ["Joining multiple strings together using operators like +.", 
        "Changing the value of a variable.", 
        "Printing a string to the console.", 
        "Using template literals to embed variables into strings."],
        answer: "Using template literals to embed variables into strings."
    },
    {
        title: "What is string concatenation?",
        choices: ["When you print a string to the console.", 
        "When you assign a string to a variable.", 
        "When you join strings together.", 
        "When you change a variable's value."],
        answer: "When you join strings together."
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
var createDiv;

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
    render();
  });

// Adds the questions and multiple choice options to the page: 
function render() {
    // clear existing data on page
    questions.innerHTML = "";
    ulCreate.innerHTML = "";
    
    // Loop through all info in array
    var askQuestion = quizArray[questionsIndex].title;
    var showAnswers = quizArray[questionsIndex].choices;
    var questionTitle = document.createElement("h3")
    questionTitle.textContent = askQuestion;
    questions.appendChild(questionTitle)
    for (var i = 0; i < showAnswers.length; i++) {

        var listItem = document.createElement("li");
        listItem.textContent = showAnswers[i];
        listItem.addEventListener("click", (compare));
        questions.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        
    }
}

function compare(event) {
    var element = event.target;


    if (element.matches("li")) {

        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
       
        if (element.textContent === quizArray[questionsIndex].answer) {
            score++;
            createDiv.textContent = "You got the answer right!!";
            alert("Correct")
           
        } else {
            // Deduct 10 seconds from timeLeft for every wrong answer
            var penalty = 10;
            timeLeft = timeLeft - penalty;
            createDiv.textContent = "Wrong! The correct answer is:  " + quizArray[questionsIndex].answer;
            alert("Wrong")
        }
        // Question Index determines number question user is on
        questionsIndex++;
        if (questionsIndex === quizArray.length) {
            // All done will append last page with user stats
            allDone();
        } else {
            render();
        }
    }
    
    
    
}
// All done will append last page
function allDone() {
    questions.innerHTML = "";
    var finalMessage = document.createElement("h3")
    finalMessage.textContent = "End of quiz!" + " " + "You got  " + score + " question(s) right!!"
    questions.appendChild(finalMessage);
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

    if (initials.length === 0) {

        alert("Please enter your initials")

    } else {
        var finalScore = {
            initials: initials,
            score: timeRemaining
        }
        console.log(finalScore);
       var gameScores = JSON.parse(window.localStorage.getItem("highscores")) || []; 
           gameScores.push(finalScore);
           window.localStorage.setItem("highscores", JSON.stringify(gameScores))
    
        
        window.location.replace("./highscore.html");
    }
});

}
