/*
    .shift() is just opposite to .pop()
    It removes the first element from an array

    var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
removedFromOurArray would have a value of the string Stimpson, 
and ourArray would have ["J", ["cat"]].
*/

// Setup
var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
var removedFromMyArray = myArray.shift();
console.log(removedFromMyArray);