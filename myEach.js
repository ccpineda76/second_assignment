Array.prototype.myEach = function (perform_array) {
  for (let j = 0; j < this.length; j++) {
    //"this" refers to the array
    if (this[j] === undefined) {
      continue; //if there is a missing value in the array, go to the next iteration
    }
    perform_array(this[j], j, this); // perform_array is "console.log(x,i,myArray)"
  }
};

Array.prototype.myMap = function (perform_array) {
  let new_array = [];
  for (let i = 0; i < this.length; i++) {
    if (this[i] == undefined) {
      new_array.push(this[i]); //Push the empty null value into the new array if encountered
      continue; //If element is missing then go to next iteration
    }
    new_array.push(perform_array(this[i], i, this));
  }
  return new_array;
};

// SOME //
Array.prototype.mySome = function (perform_array) {
  for (let i = 0; i < this.length; i++) {
    if (perform_array(this[i], i, this) == true) {
      return true;
    }
  }
  return false;
};

// REDUCE //
Array.prototype.myReduce = function (perform_array) {
  let resulter = 0;
  //console.log(perform_array);
  //console.log(resulter);
  for (let i = 0; i < this.length; i++) {
    resulter = perform_array(resulter, this[i]);
  }
  return resulter;
};

/*Testing Reduce
 0 + 1 + 2 + 3 + 4
let total = [ 0, 1, 2, 3 ].myReduce(
  ( previousValue, currentValue ) => previousValue + currentValue,
  0
)
console.log(total);
*/