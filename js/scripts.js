function Ticket(movie, showTime, age) {
  this.movie = movie;
  this.showTime = showTime;
  this.age = parseInt(age);
}


Ticket.prototype.agePrice = function() {

  var basePrice = 0;  //first-run, adult, evening

  if (this.age <= 11) {
    return basePrice + 3;
  } else if (this.age >= 65) {
    return basePrice + 4;
  } else {
    return basePrice + 5;
  }
}
