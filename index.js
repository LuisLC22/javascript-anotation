/**
 * This script describe the transform that have been Object at Javascript
 */


/**
 * Case 1
 * Inefficien the object are similary and create 2 function equals
*/
const luis ={
  name: 'Luis'
}

luis.greet = function(){
  console.log(`Hi nice to meet you, I\'m ${this.name}`)
}

luis.greet()

let carlos ={
  name: 'Caros'
}

carlos.greet = function(){
  console.log(`Hi nice to meet you, I\'m ${this.name}`)
}

carlos.greet()


/**
 * Case 2
 * Usign a function like a constructor to return an object
 * we created the function in all people
*/
function Person(name){
  const person={
    name: name
  }

  person.greet =function(){
    console.log(`Hi nice to meet you, I\'m ${this.name}`)
  }

  return person
}


const luis = Person('Luis')
luis.greet()
const carlos = Person('Carlos')
carlos.greet()

/*
 *Case 3
 *Usign a objet and a fucntion constructor to reference the methods
 */
//Objeto
const personMethods={
  greet: function(){
    console.log(`Hi nice to meet you, I\'m ${this.name}`)
  }
}

//Constructor
function Person(name){
  const person={
    name: name
  }

  person.greet = personMethods.greet;
  return person
}

const luis = Person('Luis')
luis.greet()
const carlos = Person('Carlos')
carlos.greet()



/**
 *Case 4 Usign Object.create(protoPerson)
 */
//Objet
let personMethods ={
  greet: function(){
    console.log(`Hi nice to meet you, I\'m ${this.name}`)
  }
}

//Function Contructor
function Person(name, gender){
  let person = Object.create(personMethods)   //En este punto se crea un objeto proto y la herencia prototypal
  person.name = name
  return person
}

//Creación de objeto mediante el contructor
const luis = Person('Luis')
luis.greet()
const carlos = Person('Carlos')
carlos.greet()




/**
 *Case 5 Usign the object prototype to inherit
 */
//Function as a contructor
function Person(name){
  const person= Object.create(Person.prototype)
  person.name = name
  return person
}

//Usign inheritance prototype
Person.prototype.greet= function(){
  console.log(`Hi nice to meet you, I\'m ${this.name}`)
}

const luis = Person('Luis')
luis.greet()
const carlos = Person('Carlos')
carlos.greet()




//2.5 Construct Funciton NEW
function Person(name, gender){
  this.name = name
  this.gender= gender
}

Person.prototype.speak= function(){
  console.log(`I'm ${this.name} and my gender is ${this.gender}`)
}

let Victoria = new Person('Victoria','Female')
Victoria.speak();



//3
class Person{
  constructor(name, gender){
    this.name= name
    this.gender= gender
  }

  speak(){
    console.log(`I'm ${this.name} and my gender is ${this.gender}`)
  }
}

let Victoria= new Person('Victoria','Female')
Victoria.speak()
