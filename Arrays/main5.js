/*
Zadatak 5 (Ponavljanje)

Merge two arrays with duplicate values

Write a function that takes two arrays as arguments
Merge both arrays and remove duplicate values
Sort the merge result in ascending order
Return the resulting array
*/

function myFunction(a, b) {
    return a.concat(b.filter(item => a.indexOf(item) < 0)).sort(function(a, b) {
        return a - b
    })
}

myFunction([1, 6, 8, 4], [2, 8, 4, 9, 1]);