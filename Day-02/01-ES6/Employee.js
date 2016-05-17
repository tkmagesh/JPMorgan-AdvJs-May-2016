class Employee{
	constructor(id, name, salary){
		this.__id = id;
		this.__name = name;
		this.__salary = salary;
	}
	get id(){
		console.log('id getter');
		return this.__id;
	}
	set id(value){
		console.log('id setter');
		this.__id = value;
	}
	display(){
		return `${this.id}, ${this.name}, ${this.salary}`;
	}
}

class FullTimeEmployee extends Employee{
	constructor(id, name, salary, grade){
		super(id, name, salary);
		this.grade = grade;
	}
	display(){
		return `${super.display()}, ${this.grade}`;
	}
	static isFullTimeEmployee(emp){
		return emp instanceof FullTimeEmployee;
	}
}