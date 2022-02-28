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
    if (this[i] === undefined) {
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
  let previous_value = this[0];
  for (let i = 1; i < this.length; i++) {
    index = i;
    previous_value = perform_array(previous_value, this[i], index);
  }
  return previous_value;
};

// INCLUDES //
Array.prototype.myIncludes = function (perform_array, from_index = 0) {
  if (from_index >= this.length) {
    return false;
  }
  for (let i = from_index; i < this.length; i++) {
    if (this[i] === perform_array) {
      return true;
    } else if (Number.isNaN(this[i]) && Number.isNaN(perform_array)) {
      return true;
    }
  }
  return false;
};

// INDEXOF //
Array.prototype.myIndexOf = function (perform_array, starting_value = 0) {
  for (let i = starting_value; i < this.length; i++) {
    if (this[i] == perform_array) {
      return i;
    }
  }
  return -1;
};

// PUSH //
Array.prototype.myPush = function (...added_elements) {
  let iterator = 0;
  let added_index = 0;
  let combined_array_length = this.length + added_elements.length;
  for (let i = this.length; i < combined_array_length; i++) {
    this[i] = added_elements[added_index];
    added_index++;
  }
  for (let i = 0; i < this.length; i++) {
    iterator++;
  }
  return iterator;
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function (search_array) {
  let lastindex = 0;
  for (let i = 0; i < this.length; i++) {
    if (this[i] == search_array) {
      lastindex = i;
    }
  }
  return lastindex;
};

/*

console.log([1, 2, NaN].myIncludes(NaN)) //true
console.log([1, 2, 3].myIncludes(2)); //true
console.log([1, 2, 3].myIncludes(4)); //false
console.log([1, 2, 3].myIncludes(3, 3)); //false
console.log([1, 2, 3].myIncludes(3, -1)); //true
console.log(["1", "2", "3"].myIncludes(3)); // false

const array1 = [1, 2, 3];

console.log(array1.myIncludes(2));
// expected output: true

const pets = ["cat", "dog", "bat"];

console.log(pets.myIncludes("cat"));
// expected output: true

console.log(pets.myIncludes("at"));
// expected output: false
*/