/* Write a function that takes two arrays as arguments.
Merge both arrays and remove duplicate values.
Sort the merge result in ascending order.
Return the resulting array. */
function myFunction(a, b) {
    return a.concat(b.filter((item) => a.indexOf(item) < 0)).sort((a, b) => a - b);
}
myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42]);


