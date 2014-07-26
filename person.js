

function Person(age, name){
	this.age = age;
	this.name = name;
	this.sayName = function() {
		console.log("My name is " + this.name);
	}
}

var chelsea = new Person(25, "Chelsea")

var sam = {};
sam.age = 25;
sam.name = "Sam";


chelsea.sayName();