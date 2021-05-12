//Prompt user for their name
var name = prompt("Let's play the sum game. \nPlease enter your name");

//Prompt user for two numbers, store in vars
var firstNum = parseInt(prompt("Enter first number"));
var secondNum = parseInt(prompt("Enter second number"));

// store sum of two vars in variable "sum"
var sum = firstNum + secondNum;

//write to the element with id "container" the greeting and summation statement
document.getElementById("container").innerHTML = "Hi, " + name + "! " + "The sum of " + firstNum + " + " + secondNum + " is " + sum;