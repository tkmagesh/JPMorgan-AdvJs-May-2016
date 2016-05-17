var Employee = (function(){
	let idSymbol = Symbol();
	function Employee(id, name, salary){
		this[idSymbol] = id;
		this.name = name;
		this.salary = salary;
	}
	Employee.prototype.getId = function(){
		return this[idSymbol];
	}
	return Employee;
})();