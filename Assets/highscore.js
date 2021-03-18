var highScore = document.querySelector("#highScore");
var reset = document.querySelector("#reset");
var goBack = document.querySelector("#goBack");

function showHighscores() {
  // Retreives local stroage
  var allScores = localStorage.getItem("highscores");
  allScores = JSON.parse(allScores);

  if (allScores !== null) {
    for (var i = 0; i < allScores.length; i++) {
      var createLi = document.createElement("li");
      createLi.textContent = allScores[i].initials + " " + allScores[i].score;
      highScore.appendChild(createLi);
    }
  }
}
// Event listener to move to index page
goBack.addEventListener("click", function () {
  window.location.replace("./index.html");
});

// Clear scores using event listener
reset.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});
showHighscores();
