let num1 = 7;
let num2 = num1; // let num2 = 7
num2 =9;
console.log(num1);
console.log(num2);


let person = {
  name:'Roaa'
}
let copyPerson = person;
person.name = 'Leen';
console.log(person);
console.log(copyPerson);

// let copyPerson = { ...person }; //spread operator.
// let copyPerson = Object.assign({}, person); //cloning