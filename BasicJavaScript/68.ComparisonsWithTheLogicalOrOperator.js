/*
if (num > 10) {
    return "No";
}
if (num < 5) {
    return "No";
}
return "Yes";
use logical OR to remove multiple If statements

if (num > 10 || num < 5) {
    return "No";
}
return "Yes";
*/
/*
function testLogicalOr(val) {
    // Only change code below this line

    if (val < 10) {
        return "Outside";
    }

    if (val > 20) {
        return "Outside";
    }

    // Only change code above this line
    return "Inside";
}

console.log(testLogicalOr(15));
*/

function testLogicalOr(val) {
    // Only change code below this line

    if (val < 10 || val > 20) {
        return 'Outside';
    }
    // Only change code above this line
    return "Inside";
}

console.log(testLogicalOr(15));