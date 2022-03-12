/* Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.*/

let month = 3;

switch (month){
case 1:
console.log (`Month ${month} is part of the first quarter);
break;
case 2:
console.log (`Month ${month} is part of the first quarter);
break;
case 3:
console.log (`Month ${month} is part of the first quarter);
break;
case 4:
console.log (`Month ${month} is part of the second quarter);
break;
case 5:
console.log (`Month ${month} is part of the second quarter);
break;
case 6:
console.log (`Month ${month} is part of the second quarter);
break;
case 7:
console.log (`Month ${month} is part of the third quarter);
break;
case 8:
console.log (`Month ${month} is part of the third quarter);
break;
case 9:
console.log (`Month ${month} is part of the third quarter);
break;
case 10:
console.log (`Month ${month} is part of the fourth quarter);
break;
case 11:
console.log (`Month ${month} is part of the fourth quarter);
break;
case 12:
console.log (`Month ${month} is part of the fourth quarter);
break;
default: 
console.log ( "It's 12 months a year; only numbers between 1 and 12");
}

