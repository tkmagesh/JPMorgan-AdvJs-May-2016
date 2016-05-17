describe("Greeter", function(){
	it("Should have name defined", function(){
		//Arrange
		var greeter = new Greeter();
		//Act

		//Assert
		expect(greeter.name).toBeDefined();
	});

	it("Should greet the user in afternoon", function(){
		//Arrange
		var mockDateService = {
			getTime : function(){

			}
		};
		spyOn(mockDateService, "getTime").and.returnValue(new Date(2016,4,17,15,0,0));

		var greeter = new Greeter(mockDateService);
		var expectedMessage = 'Hi Magesh, Good Evening!'
		//Act
		greeter.name = 'Magesh';
		greeter.greet();
		
		//Assert
		expect(greeter.message).toBe(expectedMessage);
		expect(mockDateService.getTime).toHaveBeenCalled();
	});

	it("Should greet the user in morning", function(){
		//Arrange
		var mockDateService = {
			getTime : function(){

			}
		};
		spyOn(mockDateService, "getTime").and.returnValue(new Date(2016,4,17,9,0,0));
		var greeter = new Greeter(mockDateService);
		var expectedMessage = 'Hi Magesh, Good Morning!'
		//Act
		greeter.name = 'Magesh';
		greeter.greet();
		
		//Assert
		expect(greeter.message).toBe(expectedMessage);
		expect(mockDateService.getTime).toHaveBeenCalled();
	});
});