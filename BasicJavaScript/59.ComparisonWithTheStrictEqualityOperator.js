/*
    (==) equality operator coverts both values to the 
    same type, and then checks the equality

    (===) strict equality does not perform type conversion
    it checks both value and their type,

    3 === 3: will return true
    3 === '3': will return false
*/

// Setup
function testStrict(val) {
    if (val === 7) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

testStrict(10);