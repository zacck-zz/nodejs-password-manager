var person = {
  name: 'Zacck',
  Age: 27
};

var personJSON = JSON.stringify(person);

console.log(personJSON);
console.log(typeof personJSON);

//convert to object

var personObject = JSON.parse(personJSON);

console.log(personObject.name);
console.log(typeof personObject);

console.log('**** CHALLENGE AREA ***********');

var animal = '{"name": "Alice"}';


var animalObject = JSON.parse(animal);

animalObject.age = 7;

var animalString = JSON.stringify(animalObject);

console.log(typeof animalString, animalString)
