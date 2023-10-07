/*
Examples with Imperative programming style.

Imperative code is more difficult to understand than declarative code.
*/

const numbers = [3, 1, 5, 8, 4, 56];

for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  console.log(element);
}

let hasValues = false;
if (numbers.length > 0) hasValues = true;

console.log('has values: ', hasValues);

/*
With declarative programming you rely to do the same thing as above but using functions instead.
Declarative code is much readable than imperative code.

Declarative code does not use loops as e.g:
for-loop
while-loop
do-while-loop

Declarative code does not use:
switch-statements
if-else

Example with Declarative programming style
*/

// Avoiding the usage of loops
numbers.forEach((item) => console.log(item));

// Avoiding the usage of if-statements.
const hasNumbers = numbers.length ? true : false;

console.log('Has numbers:', hasNumbers);
