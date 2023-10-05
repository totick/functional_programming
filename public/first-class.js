/*
Functional Programming 
*/

const greet = (greeting) => {
  return (name) => {
    console.log(`${greeting} ${name}`);
  };
};

const salve = greet('Salve');

salve('Antonio');
salve('Luigi');

const hola = greet('Hola');

hola('José');
hola('Pedro');

/*
Object Oriented Programming
*/

class Greeter {
  constructor(greeting) {
    this.greeting = greeting;
  }
  greet(name) {
    console.log(`${this.greeting} ${name}`);
  }
}

const ciao = new Greeter('Ciao');
ciao.greet('Araceli');

const howdy = new Greeter('Howdy');
howdy.greet('Hanna');
