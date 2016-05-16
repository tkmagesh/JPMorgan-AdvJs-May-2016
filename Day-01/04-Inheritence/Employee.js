function Employee(id, name){
	this.id = id;
	this.name = name;
}

Employee.prototype.salary = 10000;
Employee.prototype.display = function(){
	console.log(this.id, this.name, this.salary);
}