function Hotel(name, rooms, booked){
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;

    this.checkAvailability = function(){
        return this.rooms - this.booked;
    }
}

var marriot = new Hotel('Marriot', 100, 30);

var holidayInn = new Hotel('Holiday Inn', 50, 10);

var elName =  document.getElementById('hotelName');
elName.textContent = "Hotel Name: " + marriot.name;