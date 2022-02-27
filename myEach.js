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


//Testing Push
const animals = ["pigs", "goats", "sheep"];

const count = animals.myPush("cows");
console.log(count);
// expected output: 4
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

let myArray = [1,2,3,4,5];   // Array called by the function
console.log("myPush:");
console.log(myArray.myPush(6,7,8));   // Output returned array length
console.log(myArray);   // Output [1,2,3,4,5,6,7,8]

myArray = [1,2,3,4,5];   // Array called by the function
console.log("Push:");
console.log(myArray.push(6,7,8));   // Output returned array length
console.log(myArray);   // Output [1,2,3,4,5,6,7,8]