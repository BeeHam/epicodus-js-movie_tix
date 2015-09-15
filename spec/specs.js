describe('Ticket', function() {
  it("creates a new Ticket with the given specifications", function() {
    var testTicket = new Ticket("Titanic", "matinee", 21);
    expect(testTicket.movie).to.equal("Titanic");
    expect(testTicket.showTime).to.equal("matinee");
    expect(testTicket.age).to.equal(21);
  });

  it("adds the price method to all tickets", function() {
    var testTicket = new Ticket("Titanic", "matinee", 21);
    expect(testTicket.price()).to.equal(8);
  });
});
