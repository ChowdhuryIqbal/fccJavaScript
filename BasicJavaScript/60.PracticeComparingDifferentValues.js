/*
    3 == '3': returns true
    3 === '3': returns false
    typeof 3: returns number
    typeof '3': returns string 
*/

// Setup
function compareEquality(a, b) {
    if (a === b) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

compareEquality(10, "10");