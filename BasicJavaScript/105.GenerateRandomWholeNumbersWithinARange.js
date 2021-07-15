/*
Instead of generating a random whole number between zero 
and a given number like we did before, we can generate a
random whole number that falls within a range of two specific numbers.
*/

/*
Here's the formula we'll use. 
Take a moment to read it and 
try to understand what this code is doing:

Math.floor(Math.random() * (max - min + 1)) + min
*/

function randomRange(myMin, myMax) {
    // Only change code below this line
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
    // Only change code above this line
}