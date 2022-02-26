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



/*Testing mySome
result = [2, 5, 8, 1, 4].some(x => x > 10);  // false
result = [12, 5, 8, 1, 4].some(x => x > 10);
console.log(result);
*/