describe("greet module", function(){
	beforeEach(module("myApp.greet"));

	describe("greetController", function(){
		it("should have the name initialized", inject(function($controller){
			var dummyScope = {};

			var greetController = $controller('greetController', {$scope : dummyScope});

			expect(dummyScope.name).toBe('something');
		}));
	});

	describe("toCaps filter", function(){
		it("should do its work", inject(function($filter){
			var toCapsFilter = $filter('toCaps');
			var input = 'something',
				expectedOutput = 'SOMETHING';

			var result = toCapsFilter(input);

			expect(result).toBe(expectedOutput);
		}));
	})
});