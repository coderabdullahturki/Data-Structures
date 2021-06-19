let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let mySet = new Set(myArray);

console.log("Result from set method :",[...mySet]);
console.log(mySet.size);


// Implementing Set from Array

let myArr2 = [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1];

function setFromArray(arr) {
  let b = [];
  let len = arr.length;

  for(let i = 0; i < len; i++) {
    if(b.indexOf(arr[i]) === -1) {
      b.push(arr[i]);
    }

  }
  return b;

}

console.log("Result from array to set implementation :",setFromArray(myArr2));
console.log(setFromArray(myArr2).length);


// Check array elements were duplicated or not

function checkDuplicates(arr) {
     var mySet = new Set(arr);
     return mySet.size < arr.length;
     }
     console.log(checkDuplicates([1,3,2,3,4,5,1])); // true
     console.log(checkDuplicates([1,2,3,4,5])); // false



// Intersection of common elements of two sets 

function interSets(setA, setB) {

  let intersection = new Set();

  for(let elem of setB) {

    if(setA.has(elem)) {
      intersection.add(elem);
    }

  }
  return [...intersection];
}

let a = new Set([3,7]), b = new Set([1,2,3,4,5,6,7]);

console.log(interSets(a,b)); // output : [3,7] 


  

