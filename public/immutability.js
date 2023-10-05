/*
Immutability examples
*/

// Using the freeze method making the object immutable.
const person1 = Object.freeze({
  firstName: 'Pedro'
});

// Not possible because of the use of the freeze method above. Protecting immutability of the object.
person1.lastName = 'Sanchez';
person1.firstName = 'Paco';

console.log(person1.firstName);
console.log(person1.lastName);

// Using the freeze method making the array immutable.
const indexes = Object.freeze([0, 1, 2, 3, 4, 5]);

//Not possible because of the use of the freeze method above.
indexes[0] = 100;
console.log('First index value:', indexes[0]);

/*
Stay away from manipulative arrays as push. 
TypeError: Cannot add property 6, object is not extensible.
*/
//indexes.push(indexes.length);
//console.log('Last index value:', indexes[indexes.length - 1]);

const arr = [0, 1];

/**
 * Wrong way to add an element to an array by manipulating (mutating) the same array.
 * @param {Array} arr
 * @returns {Array}
 */
const addElementMutable = (arr) => arr.push(arr.length);

addElementMutable(arr);
console.log('Added value to arr:', arr);

const arr2 = Object.freeze([0, 1]);

/**
 * Correct way to add an element to an array by copying the whole array.
 * @param {Array} arr
 * @returns {Array}
 */
const addElementImmutable = (arr) => [...arr, arr.length];
const result = addElementImmutable(arr2);

console.log('Added value to arr by copying it:', result);
