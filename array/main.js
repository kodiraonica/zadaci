/* EXERCISE 1: 
Write a function toArray that takes 2 values and returns these values in an array.
Example: toArray(5, 9) should return the array [5, 9]. */
function toArray(a, b) {
  return [a, b];
}
toArray(5, 9);


/*EXERCISE 2:
Write a function concatUp that concatenate two arrays. The longer array should be appended to the shorter array. 
If both arrays are equally long, the second array should be appended to the first array.
Example: concatUp([1, 2], [3]) should return [3, 1, 2] and 
concatUp([5, 7], [6, 8]) should return [5, 7, 6, 8]. */
function concatUp(a, b) {
  if (a.length > b.length) {
    return b.concat(a);
  } else {
    return a.concat(b);
  }
}
concatUp([1, 2], [3]);


/* EXERCISE 3:
Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
348597 => [7,9,5,8,4,3]
0 => [0] */
function digitize(n) {
  return String(n).split("").map(Number).reverse();
}
digitize(348597);


/* EXERCISE 4:
Create a function that takes an array containing only numbers and return the first element.
getFirstValue([1, 2, 3]) ➞ 1 */
function getFirstValue(arr) {
	return arr[0];
}