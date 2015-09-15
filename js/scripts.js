function Ticket(movie, showTime, age) {
  this.movie = movie;
  this.showTime = showTime;
  this.age = parseInt(age);
}

Ticket.prototype.price = function() {
  var basePrice = 12;  //first-run, adult, evening

  if (this.age <= 11) {
    return basePrice - 3;
  } else if (this.age >= 65) {
    return basePrice - 2;
  } else {
    return basePrice;
  }
}
