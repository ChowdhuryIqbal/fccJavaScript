/*
Use Math.random() to generate a random decimal.
Multiply that random decimal by 20.
Use another function, Math.floor() 
to round the number down to its nearest whole number.

Remember that Math.random() can never quite return a 1 and,
because we're rounding down, it's impossible to actually get 20. 
This technique will give us a whole number between 0 and 19.
*/

//Use this technique to generate and 
//return a random whole number between 0 and 9.

function randomWholeNum() {

    // Only change code below this line

    return Math.floor(Math.random() * 10);
}