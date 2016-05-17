var dateService = {
	getTime : function(){
		return new Date();
	}
};

function Greeter(dateService){
	this.dateService = dateService;
	this.name = '';
	this.message = '';
}
Greeter.prototype.greet = function(){
	var currentTime = this.dateService.getTime();
	if (currentTime.getHours() < 12){
		this.message = 'Hi ' + this.name + ', Good Morning!';
	} else {
		this.message = 'Hi ' + this.name + ', Good Evening!';
	}
}
