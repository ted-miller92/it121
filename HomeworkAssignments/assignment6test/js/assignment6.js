var newDate = new Date();

function makeWeek(){                // This Function makes a 7-column flexbox representing the week, highlighting the current day
    for (var i = 0; i < 7; i++){        //for loop that creates 7 divs, each representing a day of the week
        var dayOfWeek;                  //create a var to hold the particular day of the week
        switch (i){                     //Switch statement to assign whatever day it is to the iteration of the for loop
            case 0:
                dayOfWeek = 'Sunday';
                break;
            case 1:
                dayOfWeek = 'Monday';
                break;
            case 2:
                dayOfWeek = 'Tuesday';
                break;
            case 3:
                dayOfWeek = 'Wednesday';
                break;
            case 4:
                dayOfWeek = 'Thursday';
                break;
            case 5:
                dayOfWeek = 'Friday';
                break;
            case 6:
                dayOfWeek = 'Saturday';
                break;
            default:
                dayOfWeek = 'Any other day';
                break;
        }

        //create an element that is a "day"
        var dayElement = document.createElement('div');
        var dayText = document.createTextNode(dayOfWeek);
        dayElement.appendChild(dayText);
        dayElement.className = 'day';

        //append "day" element to div of "week"
        var position = document.getElementById('week');
        position.appendChild(dayElement);


        //Assign class of currentDay to the appropriate "day" element
        
        currentDay = newDate.getDay();
        if(i == currentDay){
            dayElement.className += ' currentDay';
        }
    }
}
makeWeek();