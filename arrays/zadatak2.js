/*
Write a function concatUp that concatenate two arrays. The longer array should be appended to the shorter array. If both arrays are equally long, the second array should be appended to the first array.

Example: concatUp([1, 2], [3]) should return [3, 1, 2] and concatUp([5, 7], [6, 8]) should return [5, 7, 6, 8].
*/

function concatUp(a, b) {
    let c = [];
    if (a.length > b.length) {
        c = b.concat(a);
    } else {
        c = a.concat(b);
    }
    return c;
}