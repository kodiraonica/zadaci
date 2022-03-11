let integer = 12;
if (integer <= 3) {
    console.log(`Month ${integer} is part of the first quarter.`);
}
else if (integer <= 6) {
    console.log(`Month ${integer} is part of the second quarter.`);
}
else if (integer <= 9) {
    console.log(`Month ${integer} is part of the third quarter.`);
}
else if (integer <= 12) {
    console.log(`Month ${integer} is part of the fourth quarter.`);
}
else {
    console.log('Not a month.')
}