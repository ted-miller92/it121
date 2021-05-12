var score = 45;     // Score
var msg;            // Message
 
if(score >= 50) {  // If score is 50 or higher
  msg = 'Congratulations!';
  msg += ' Proceed to the next round.'; 
} else {
  msg = 'Score is too low to proceed';
  msg += ' Try again';
}
 
var el = document.getElementById('answer');
el.textContent = msg;