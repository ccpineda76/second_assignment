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

// INCLUDES //
Array.prototype.myIncludes = function (perform_array) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] == perform_array) {
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
    if (this[i] == search_array){
      lastindex = i;
    }
  }
  return lastindex;
};

// KEYS //
Object.myKeys = function(object_letters) {
  let empty_array = [];
  for (element in object_letters){
    empty_array.push(element);
  }
  return empty_array;
};

// VALUES //
Object.myValues = function(object_letters) {
  let empty_array = [];
  for (element in object_letters){
    empty_array.push(object_letters[element])
  }
  return empty_array;
};


//Testing myValues
const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.myValues(object1));
// expected output: Array ["a", "b", "c"]

