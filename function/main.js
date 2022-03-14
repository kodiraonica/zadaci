/* ZADATAK 1:  
Write a function that takes two numbers (a and b) as argument.
Sum a and b.
Return the result.
*/
function myFunction(a, b) {
  const result = a + b;
  return result;
}
myFunction(1, 2);


/* ZADATAK 2:
Extract the first half a.
Return the result. */
function myFunction2(a) {
  return a.slice(0, a.length / 2);
}
myFunction2("1234");
myFunction2("gedcba");


/* ZADATAK 3:
If the number is even, return true.
Otherwise, return false. 
*/
function myFunction3(a) {
  if (a % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
myFunction3(-4);
myFunction3(5);
/*Author's solution:
function myFunction(a) {
  return a % 2 === 0
}*/


/*ZADATAK 4:
Function that can transform a string into a number.
*/
function myFunction4(num) {
    return Number(num) ;
}
myFunction4('-7');

