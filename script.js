// complete this js code
function person (name,age){
	this.name = name;
	this.age = age;
}
person.prototype.greet= function(){
	console.log(` Hello, my name is alice, I am 23 years old.`);
}
function Employee(name,age,jobTitle){
	person.call(name,age);
	this.jobTitle = jobTitle;
}

Employee.prototype = person.prototype;
Employee.prototype.constructor = Employee;

Employee.prototype.jobGreet = fonction(){
	console.log(` Hello, my name is alice, I am 23 years old, and my job title is manager.`)
}


// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
