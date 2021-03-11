/* 
Set up initial index.html with divs to append to later in the assignment & a start button
Create an Event Listener for the button, which starts a countdown timer
*/


var timeLeft = 120;
var startButton = document.getElementById('startButton');
var timeEl = document.getElementById('timer');

startButton.addEventListener('click', setTime())
