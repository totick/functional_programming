const greet = (greeting) => {
  return (name) => {
    console.log(`${greeting} ${name}`);
  };
};

const sayHello = greet('Salve');

sayHello('Antonio');
sayHello('Luigi');

const saluda = greet('Hola');

saluda('José');
saluda('Pedro');
