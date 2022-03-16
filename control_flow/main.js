/*
Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
*/
const month = 1;

switch (month) {
    case 1:
        console.log(`January ${month} is part of the first quarter`);
        break;
    case 2:
        console.log(`February ${month} is part of the first quarter`);
        break;
    case 3:
        console.log(`March ${month} is part of the first quarter`);
        break;
    case 4:
        console.log(`April ${month} is part of the first quarter`);
        break;
    case 5:
        console.log(`May ${month} is part of the first quarter`);
        break;
    case 6:
        console.log(`June ${month} is part of the first quarter`);
        break;
    case 7:
        console.log(`July ${month} is part of the first quarter`);
        break;
    case 8:
        console.log(`August ${month} is part of the first quarter`);
        break;
    case 9:
        console.log(`September ${month} is part of the first quarter`);
        break;
    case 10:
        console.log(`October ${month} is part of the first quarter`);
        break;
    case 11:
        console.log(`November ${month} is part of the first quarter`);
        break;
    case 12:
        console.log(`December ${month} is part of the first quarter`);
        break;
    default:
        console.log("There is only 12 months!");
}