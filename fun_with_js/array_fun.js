// const myArray = [] % DebugPrint(myArray);

//Types of Array
// continuous(Packed), Holey

//Types of continuous(Packed), Holey
// SMI (small integer)
// Packed Element
// Double (float, string, function)

const arrTwo = [1, 2, 3, 4, 5];
// PACKED_SMI_ELEMENTS

arrTwo.push(6.0);
// PACKED_DOUBLE_ELEMENTS

arrTwo.push("7");
// PACKED_ELEMENTS

arrTwo[11] = 10;
// HOLY_ELEMENTS

arrayHoly = [1, 2, 3, , , 6, 7, 8];
//In above array the only seperator used with no value are creating Holey Array.

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9]);

// bound check
// hasOwnProperty(arrTwo, 9)
// hasOwnProperty(arrTwo.prototype, 10)
// hasOwnProperty(Object.prototype, 10)

// Thats why holes are expensive in array

const arrayThree = [1, 2, 3, 4, 5];

console.log(arrayThree[4]);

// P_SMI > P_DOUBLE > P_PACKED
// H_SMI > H_DOUBLE > H_PACKED

const arrayFour = new Array(3);
arrayFour[1] = "1"; // HOLEY_ELEMENTS
arrayFour[2] = "2"; // HOLEY_ELEMENTS
arrayFour[3] = "3"; // HOLEY_ELEMENTS

const arrayFive = [];
arrayFive.push("1"); //PACKED_ELEMENTS
arrayFive.push("2"); //PACKED_ELEMENTS
arrayFive.push("3"); //PACKED_ELEMENTS

const arraySix = [1, 2, 3, 4, 5];
arraySix.push(NaN); // Then the above array will be PACKED_DOUBLE
arraySix.push(Infinity); // Then the above array will be PACKED_DOUBLE

// for, for-of, forEach
/* These method are recommended to use more
because this are more optimized method rather than if we create our own */

/*  
Important if we downgrade the Aray then there is no change we can make it upgrade again so be careful
when creating array and pushing the elements in array also the best and optimized array is Packed_SIM
array then double, and String in Packed. After Packed we have holey array in holey we have same
Holey_SIM, H_DOUBLE and H_Elements(String). Also how check are perform in JS array which are very much
expensive so best optimized array will be cost effective and beneficial.
*/
