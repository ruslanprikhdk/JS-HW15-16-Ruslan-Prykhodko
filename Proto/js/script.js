function Human () {
  this.name = 'Marry';
  this.age = '23 years';
  this.sex = 'female';
  this.height = '170 cm';
  this.weight = '55 kg'
}

function Worker () {
}

function Student () {
}

Worker.prototype = new Human ();
Student.prototype = new Human ();

Worker.prototype.toWork = function (workplace, salary) {
  this.workplace = workplace;
  this.salary = salary
}

Student.prototype.watchMovies = function(studyplace, scholarship) {
  this.studyplace = studyplace;
  this.scholarship = scholarship;
}

var Worker1 = new Worker;
var Worker2 = new Worker;
var Worker3 = new Worker;
var Student1 = new Student;
var Student2 = new Student;
var Student3 = new Student;

Worker1.toWork('Google', '100,000 USD');
Worker2.toWork('GM', '70,000 USD');
Worker3.toWork('Facebook', '120,000 USD');
Student1.watchMovies('Harvard', '30,000 USD pa');
Student2.watchMovies('Cambridge', '20,000 GBP pa');
Student3.watchMovies('Oxford', '25,000 GBP pa');

console.log('Worker1', Worker1);
console.log('Worker2', Worker2.__proto__);
console.log('Worker3', Worker3.__proto__);
console.log('Student1', Student1.__proto__);
console.log('Student2', Student2.__proto__);
console.log('Student3', Student3);
