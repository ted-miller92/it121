// create h2 element with shop info

var descriptionH2 = document.createElement('h2');                           //create an h2 element
var descriptionText = document.createTextNode('A local friendly bike shop');//create a text node
descriptionH2.appendChild(descriptionText);                                 //put text inside h2 element

var descriptionPosition = document.getElementById('description');           //reference where to put the h2 element
descriptionPosition.appendChild(descriptionH2);                             //append h2 element to the div with id "description"    



//Create a function that display whether shop is open, based on current time of day
function openMessage(){
    var date = new Date();                              //create a new Date variable and get the current hour
    var currentHour = date.getHours();

    var hoursParagraph = document.createElement('p');   //create a new empty p element

    var openMessage;                                    //create a message that differs based on whether or not the time variable is between 9AM and 5PM
    if (currentHour >= 9 && currentHour <= 17){
        openMessage = document.createTextNode('We are open! Come by and visit.');
    } else {
        openMessage = document.createTextNode('Sorry, we are closed. Come by tomorrow!');
    }

    var hoursDiv = document.getElementById('hours');    //retrieving the element with id of "hours"
    hoursParagraph.appendChild(openMessage);            //appending the message to the p element
    hoursDiv.appendChild(hoursParagraph);               //appending the p element to the div that exists in the document
}



//add a class of "service" to each element in the "services" div
var services = document.getElementById('main');
for (var i = 0; i < services.children.length; i++){
    services.children[i].className = 'service';
}



//Create stripes
var colors = ['#0077c8','#c8102e', '#111', '#fedd00', '#43b02a'];   //array holds the five hex values of colors

for (var i = 0; i < colors.length; i++){                            //loop that creates a div of a color and appends it to the "stripe container"
    var stripe = document.createElement('div');
    stripe.style.backgroundColor = colors[i];
    stripe.style.height = '2vw';
    var stripeContainer = document.getElementById('stripes');
    stripeContainer.appendChild(stripe);
}

openMessage();  //call the "openMessage" function