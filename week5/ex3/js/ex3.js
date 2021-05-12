var score = 35;     // Score
var msg;            // Message
 
if (score >= 50) {  // If score is 50 or higher
  msg = 'Congratulations!';
  msg += ' Proceed to the next round.'; 
} else {
    msg = 'Try again!';
}
 
var el = document.getElementById('answer');
el.textContent = msg;