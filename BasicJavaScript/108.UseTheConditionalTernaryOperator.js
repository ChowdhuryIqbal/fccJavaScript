/*
The syntax is a ? b : c, where a is the condition,
    b is the code to run when the condition returns true,
        and c is the code to run when the condition returns false.
*/

/*
function findGreater(a, b) {
    if (a > b) {
        return "a is greater";
    }
    else {
        return "b is greater";
    }
}
// can be re-written using the conditional operator
function findGreater(a, b) {
    a > b ? "a is greater" : "b is greater";
}
*/

function checkEqual(a, b) {
    return a === b ? "Equal" : "Not Equal";
}

checkEqual(1, 2);




