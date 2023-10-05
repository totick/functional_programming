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
