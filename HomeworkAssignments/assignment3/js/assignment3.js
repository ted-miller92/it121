//This document creates a class or template of a restaurant menu item, then displays the cost, price, and calculates the food cost percentage of that particular item. 

//Add a heading to the document
var heading = document.getElementById("heading")
heading.innerHTML = "<h1>Ted's Burger Restaurant</h1><hr>"

//assign a variable to be a typical cooks wage in dollars per hour
var cooksWage = 15;

//create a class or "template" of a menu item
function menuItem (name, time, cost, price){
    //properties
    this.name = name;       //name of menu item
    this.time = time;       //time needed to prepare (hours)
    this.cost = cost;       //cost of ingredients
    this.price = price;     //price of menu item
    let totalCost = cooksWage*time + cost;  //totalCost is cost plus wage hours

    //methods
    //food cost margin based on total cost and price
    this.foodCost = function(){
        return Math.round(100 * (totalCost / this.price));
    }
    //fetch/assign to variable the div that will contain menu item info
    let menuItemDiv = document.getElementById("menuItems");

    //assign menu item info to variable 'info'
    let info = '<div class="singleItems"><h3>' + name + '</h3><hr><p>Cost: $' + totalCost + '</p><p>Price: $' + price + '</p>'
    //assign food cost info to variable 'foodCostMsg'
    let foodCostMsg = '<p>Food cost percentage: ' + this.foodCost() + '%</p>'

    //write to the document the previously assigned variables
    menuItemDiv.innerHTML += info + foodCostMsg;
}

var burger = new menuItem('Burger', .20, 3, 17);

var salad = new menuItem('Salad', .08, 3, 13);

var sideFries = new menuItem('Side of Fries', 0.04, 0.5, 5);