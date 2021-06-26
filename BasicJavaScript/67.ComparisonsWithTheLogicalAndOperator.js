/*
function testLogicalAnd(val) {
    // Only change code below this line

    if (val >= 25) {
        if (val <= 50) {
            return "Yes";
        }
    }

    // Only change code above this line
    return "No";
}

testLogicalAnd(10);
*/

function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
        return 'Yes';
    }
    return 'No';
}

testLogicalAnd(10);