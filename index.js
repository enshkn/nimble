// Driver
// Passanger
// Booking

class Driver {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  drive() 
  {
    console.log(`${this.name} is driving`);
  }

  pickUp(passenger) {
    console.log(`${this.name} picked up ${passenger.name}`);
  }

  endBooking(passenger) {
    console.log(`${this.name} dropped off ${passenger.name}`);
  }
}

class Passenger {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.bookings = [];
  }

  book(driver,origin, destination) 
  {
    const booking = new Booking(driver, this, origin, destination);
    this.bookings.push(booking);
    console.log(booking);
    return booking;
  }

  printBookingHistory() {
    this.bookings.forEach(printBooking)
  }

}

class Booking {
  constructor(driver, passenger, origin, destination) {
    this.driver = driver;
    this.passenger = passenger;
    this.origin = origin;
    this.destination = destination;
    this.state = 'waiting';
  }
}



const enes = new Passenger('Enes', 'Istanbul');
const hakan = new Driver('Hakan', 'Istanbul'); 

const booking1 = enes.book(hakan, 'Belem', 'Lisboa');
const booking2 = enes.book(hakan, 'Lisboa', 'Alges');
const booking3 = enes.book(hakan, 'Alges', 'Sintra');
const booking4 = enes.book(hakan, 'Sintra', 'Cascais');
const booking5 = enes.book(hakan, 'Cascais', 'Oriente');

function printBooking(booking) {
  console.log(`The booker ${booking.passenger.name} hired the driver ${booking.driver.name} from ${booking.origin} to ${booking.destination}`);
}

enes.printBookingHistory();