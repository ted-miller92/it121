//Establish some variables
var totalScore = -999;      //this is -999 to offset when 999 is entered to stop entries
var scoreQuantity = -1;     //this is -1 to offset the number of entries when 999 is entered
var score;                  //variable to score each score entry

//Collect scores and add to total score until user enters 999

while (score != 999){
    score = parseInt(prompt("Enter test score\nOr enter 999 to end entries"));
    totalScore += score;
    scoreQuantity ++;
}

var averageScore = totalScore / scoreQuantity; //Calculate average

alert("Average score is " + averageScore);     //Alert result