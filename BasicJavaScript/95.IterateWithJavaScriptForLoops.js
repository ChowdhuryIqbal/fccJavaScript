/*
for (a; b; c), where a is the intialization statement,
    b is the condition statement,
        and c is the final expression.

var ourArray = [];
for (var i = 0; i < 5; i++) {
    ourArray.push(i);
}

ourArray will now have the value[0, 1, 2, 3, 4].
*/

// Setup
var myArray = [];

// Only change code below this line
for(var i=1; i<=5 ; i++){
  myArray.push(i);
}

console.log(myArray);