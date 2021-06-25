/*
    we can create local and global variable with the same name
    but, local variable will take precedence over the global varialbe

    var someVar = "Hat";
function myFun() {
  var someVar = "Head";
  return someVar;
}

myFun() will return 'Head', though globally the variable is "Hat"
*/

// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  var outerWear = 'sweater';   
  // Only change code above this line
  return outerWear;
}

myOutfit();

