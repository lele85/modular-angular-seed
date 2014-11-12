describe('Application', function() {

  beforeEach(function() {
    browser.get('#/');
  });

  it("should work", function(){
    expect(element(by.css("h1")).getText()).toBe("Modular Angular Seed");
  });

});