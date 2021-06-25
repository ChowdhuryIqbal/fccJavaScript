/*
    .pop() is used to pop a value off of the end of an array. 
    .pop() function returns the value which has been removed 
    from the end of an array

    var threeArr = [1, 4, 6];
    var oneDown = threeArr.pop();
    console.log(oneDown);
    console.log(threeArr);
    The first console.log will display the value 6, 
    and the second will display the value [1, 4].
*/

// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
var removedFromMyArray = myArray.pop();

console.log(removedFromMyArray);
console.log(myArray);

