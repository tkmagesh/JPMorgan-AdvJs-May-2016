function Employee(id, name, salary){
	this.id = id;
	this.name = name;
	this.salary = salary;
	this.display = function(){
		console.log(this.id, this.name, this.salary);
	};
}

var emp = new Employee(100, 'Magesh', 100000);