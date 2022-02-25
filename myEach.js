Array.prototype.myEach = function (perform_array) {
  for (let j = 0; j < this.length; j++) {
    //"this" refers to the array
    if (this[j] === undefined) {
      continue;
    }
    perform_array(this[j], j, this); // perform_array is "console.log(x,i,myArray)"
  }
};

// TEST //
// Test myEach against the native forEach to ensure that myEach works as the same as forEach
let myArray = [1, 2, , 4, 5]; // Array called by the function

// Test with 1 parameter: element
console.log("myEach (1 parameter): element");
myArray.myEach((x) => console.log(x)); // Parameter: x => console.log(x)
console.log("forEach (1 parameter): element");
myArray.forEach((x) => console.log(x)); // Parameter: x => console.log(x)

// Test with 2 parameters: element, index
console.log("myEach (2 parameters): element, index");
myArray.myEach((x, i) => console.log(x, i)); // Parameter: (x,i) => console.log(x,i)
console.log("forEach (2 parameters): element, index");
myArray.forEach((x, i) => console.log(x, i)); // Parameter: (x,i) => console.log(x,i)

// Test with 3 parameters: element, index, array
console.log("myEach (3 parameters): element, index, array");
myArray.myEach((x, i, myArray) => console.log(x, i, myArray)); // Parameter: (x,i,myArray) => console.log(x,i,myArray)
console.log("forEach (3 parameters): element, index, array");
myArray.forEach((x, i, myArray) => console.log(x, i, myArray)); // Parameter: (x,i,myArray) => console.log(x,i,myArray)

// Original array is not affected
console.log("Original array:");
console.log(myArray);
