/*
Recursion is the concept that a function
can be expressed in terms of itself.
*/

/*
Multiply the first n elements of an array to create
the product of those elements: using a for loop
*/
/*
function multiply(arr, n) {
    var product = 1;
    for (var i = 0; i < n; i++) {
        product *= arr[i];
    }
    return product;
}

// using recursion
function multiply(arr, n) {
    if (n <= 0) {
        return 1;
    } else {
        return multiply(arr, n - 1) * arr[n - 1];
    }
}
*/

/*
Write a recursive function, sum(arr, n), 
that returns the sum of the first n elements of an array arr.
*/

function sum(arr, n) {
    // Only change code below this line
    if (n <= 0) {
        //base case
        return 0;
    } else {
        return sum(arr, n - 1) + arr[n - 1];
    }

    // Only change code above this line
}


