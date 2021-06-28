/*
Another use of bracket notation on objects is to access 
a property which is stored as the value of a variable. 
This can be very useful 
for iterating through an object's properties or 
when accessing a lookup table.
*/
/*
var dogs = {
  Fido: "Mutt",  Hunter: "Doberman",  Snoopie: "Beagle"
};
var myDog = "Hunter";
var myBreed = dogs[myDog];
console.log(myBreed);
The string Doberman would be displayed in the console.

Another way you can use this concept is when the 
property's name is collected dynamically during the program execution, 
as follows:

var someObj = {
  propName: "John"
};
function propPrefix(str) {
  var s = "prop";
  return s + str;
}
var someProp = propPrefix("Name");
console.log(someObj[someProp]);
someProp would have a value of the string propName, and the string John would be displayed in the console.
*/
/*
Set the playerNumber variable to 16. Then, 
use the variable to look up the player's name and assign it to player.
*/
// Setup
var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

// Only change code below this line

var playerNumber = 16;       // Change this line
var player = testObj[playerNumber];   // Change this line