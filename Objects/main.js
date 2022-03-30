/* Zadatak 1

Write a function that takes an object (a) and a string (b) as argument
Return true if a has a property with key b
Return false otherwise
*/

function myFunction(a, b) {
    return a.hasOwnProperty(b);
}
myFunction({
    one: 1,
    two: 2,
    three: 3
}, 'four') //false


/*Zadatak 2

Write a function that takes an object (a) as argument
 Return the sum of all object values
 */

 function myFunction(a) {
    let sum = 0;
    for (value in a) {
        sum += a[value];
    };
    return sum;
}
myFunction({
    a: 2,
    b: 3
}) //5