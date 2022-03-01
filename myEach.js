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
      new_array.myPush(this[i]); //Push the empty null value into the new array if encountered
      continue; //If element is missing then go to next iteration
    }
    new_array.myPush(perform_array(this[i], i, this));
  }
  return new_array; //returning new array that was pushed in new values
};

// SOME //
Array.prototype.mySome = function (perform_array) {
  for (let i = 0; i < this.length; i++) {
    if (perform_array(this[i], i, this) == true) { //if element passes the test of the provided function, return true
      return true;
    }
  }
  return false; //otherwise return false
};

// REDUCE //
Array.prototype.myReduce = function (perform_array) {
  let previous_value = this[0]; //starting at first index
  for (let i = 1; i < this.length; i++) {
    index = i; //recording index
    previous_value = perform_array(previous_value, this[i], index); 
  }
  return previous_value;
};

// INCLUDES //
Array.prototype.myIncludes = function (perform_array, from_index = 0) {
  if (from_index >= this.length) { //if the starting index is larger than the array size, return false
    return false;
  }
  for (let i = from_index; i < this.length; i++) { 
    if (this[i] === perform_array) { //if element is strictly equal to the value we are searching for, then return true
      return true;
    } else if (Number.isNaN(this[i]) && Number.isNaN(perform_array)) { //if both values are NaN, return true
      return true;
    }
  }
  return false; //otherwise return false
};

// INDEXOF //
Array.prototype.myIndexOf = function (perform_array, starting_value = 0) {
  if (starting_value < 0) { //if the starting value is negative
    for (let i = this.length + starting_value; i < this.length; i++) { //since value is negative, subtract array length with starting value 
      if (this[i] === perform_array) { //if element is equal to value we are searching for, return the index number
        return i;
      }
    }
  }
  else if (starting_value >= 0) { //if starting value is equal to zero or positive
    for (let i = starting_value; i < this.length; i++) {
      if (this[i] === perform_array) {
        return i;
      }
    }
  }
  return -1; //return -1 otherwise
};

// PUSH //
Array.prototype.myPush = function (...added_elements) {
  let iterator = 0;
  let added_index = 0;
  let combined_array_length = this.length + added_elements.length; //adding both lengths to limit where i will stop in for loop
  for (let i = this.length; i < combined_array_length; i++) { //start from the end of the array (length) to start adding new values
    this[i] = added_elements[added_index];
    added_index++; //increment added_index 
  }
  for (let i = 0; i < this.length; i++) {
    iterator++; //increment iterator
  }
  return iterator;
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function (search_array, starting_value = this.length - 1) {
  if (starting_value < 0) { //check if negative, because if it is negative, the for loop condition changes
    for (let i = this.length + starting_value; i >= 0; i--) { //Moving backwards 
      if (this[i] === search_array) {
        return i;
      }
    }
  }
  for (let i = starting_value; i >= 0; i--) {//check if positive, because if it is negative, the for loop condition changes
    if (this[i] === search_array) {
      return i;
    }
  }
  return -1;
};

// KEYS //
Object.myKeys = function (object_letters) {
  let empty_array = [];
  if (Array.isArray(object_letters) === true) { //different operation if array
    for (let i = 0; i < object_letters.length; i++) {
      empty_array[i] = i;
    }
    return empty_array;
  }
  for (element in object_letters) { //for each element in array like object
    empty_array.myPush(element); 
  }
  return empty_array;
};

// VALUES //
Object.myValues = function (object_letters) {
  let empty_array = [];
  for (element in object_letters) {
    empty_array.myPush(object_letters[element]) //pushing value instead of the element itself
  }
  return empty_array;
};


const kvArray = [{ key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 }];

const reformattedArray = kvArray.myMap(({ key, value}) => ({ [key]: value }));
console.log(reformattedArray);
// reformattedArray is now [{1: 10}, {2: 20}, {3: 30}],

// kvArray is still:
// [{key: 1, value: 10},
//  {key: 2, value: 20},
//  {key: 3, value: 30}]
