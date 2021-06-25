/*
local scope = variables declared within function
local scope = function parameters also has local scope
*/

function myLocalScope() {

    // Only change code below this line
    var myVar = 'local variable';
    console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);