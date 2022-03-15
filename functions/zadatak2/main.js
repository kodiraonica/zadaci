// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result

function myFunction(a) {
    const halfString = a.length / 2;
    console.log(halfString);
    return a.slice(0, halfString);
}