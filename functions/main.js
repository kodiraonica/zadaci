/*
 Write a function that takes two numbers (a and b) as argument
 Sum a and b
 Return the result
*/

function myFunction1(a, b) {
    let sum = a + b;
    return sum;
} 
console.log (myFunction1(3, 4));

/*
Write a function that takes a string (a) as argument
Extract the first half a
Return the result
*/

function myFunction2 (string) {
    if (string.length % 2 == 0){
        return string.slice(0, string.length / 2);
    }
    return string
}

console.log(myFunction2("JavaScript"));

/*
Write a function that takes a number as argument
If the number is even, return true
Otherwise, return false
*/

function myFunction3(x) {
    if (x % 2 == 0) {
        return true;
    } else {
        return false;
    }

}
 console.log(myFunction3(3));

 /*
 Function that can transform a string into a number
 */

let myFunction4 = function (str){
    let num = Number(str);
    console.log(num);
    return null;
}
console.log(myFunction4("345"));