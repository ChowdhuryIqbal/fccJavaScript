/*
var ourStorage = {
    "desk": {
        "drawer": "stapler"
    },
    "cabinet": {
        "top drawer": {
            "folder1": "a file",
            "folder2": "secrets"
        },
        "bottom drawer": "soda"
    }
};
ourStorage.cabinet["top drawer"].folder2;
ourStorage.desk.drawer;
*/

/*
Access the myStorage object and assign the 
contents of the glove box property to the gloveBoxContents variable.
 Use dot notation 
for all properties where possible, otherwise use bracket notation.
*/

var myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };
  
  var gloveBoxContents = myStorage.car.inside['glove box'];
  
  console.log(gloveBoxContents);