/*
function countup(n) {
    if (n < 1) {
        return [];
    } else {
        const countArray = countup(n - 1);
        countArray.push(n);
        return countArray;
    }
}
console.log(countup(5));
*/
/*
At first, this seems counterintuitive since the value of n decreases, 
but the values in the final array are increasing. 
This happens because the push happens last, after the recursive call has returned. 
At the point where n is pushed into the array, 
countup(n - 1) has already been evaluated and returned [1, 2, ..., n - 1].
*/

// Only change code below this line
// Only change code below this line
function countdown(n){
  if (n <= 0){
    return [];
  } else{
    const countArray = countdown(n - 1);
    countArray.unshift(n);
    return countArray;
  }
}
// Only change code above this line
console.log(countdown(5));
  // Only change code above this line

