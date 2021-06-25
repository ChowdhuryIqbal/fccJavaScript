/*
    a function with no return statement is JavaScript
    returns 'undefined', but the inner code will execute as usual
*/

// Setup
var sum = 0;

function addThree() {
    sum = sum + 3;
}

// Only change code below this line
function addFive() {
    sum += 5;
}

// Only change code above this line

addThree();
addFive();