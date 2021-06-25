/*
var arr = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [[10,11,12], 13, 14]
];
arr[3];
arr[3][0];
arr[3][0][1];
arr[3] is [[10, 11, 12], 13, 14], arr[3][0] is [10, 11, 12], and arr[3][0][1] is 11.
*/

var myArray = [
    [1,2,3], 
    [4,5,6], 
    [7,8,9], 
    [[10,11,12], 13, 14]
    ];
  
    //Using bracket notation select an element from myArray such that myData is equal to 8.
  var myData = myArray[2][1];
  console.log(myData);