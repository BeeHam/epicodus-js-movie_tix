describe('Ticket', function() {
  it("creates a new Ticket with the given specifications", function() {
    var testTicket = new Ticket("Titanic", "matinee", 21);
    expect(testTicket.movie).to.equal("Titanic");
    expect(testTicket.showTime).to.equal("matinee");
    expect(testTicket.age).to.equal(21);
  });

  it("adds the movieRunPrice method to all tickets", function() {
    var testTicket = new Ticket("Titanic", "matinee", 21);
    expect(testTicket.movieRunPrice()).to.equal(5);
  });

  it("adds the showTimePrice method to all tickets", function() {
    var testTicket = new Ticket("Titanic", "matinee", 21);
    expect(testTicket.showTimePrice()).to.equal(5);
  });

  it("adds the agePrice method to all tickets", function() {
    var testTicket = new Ticket("Titanic", "matinee", 21);
    expect(testTicket.agePrice()).to.equal(5);
  });
});
