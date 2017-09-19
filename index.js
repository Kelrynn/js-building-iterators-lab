var myEach = require('./myEach');
var myMap = require('./myMap');
var myReduce = require('./myReduce');
var myFilter = require('./myFilter');
var mySome = require('./mySome');
var myEvery = require('./myEvery');
/* *********************************************************************
  You can edit this file
  It will make use of your code in myEach.js, myMap.js and myReduce.js
  To run it on the console do: `node index.js`
***********************************************************************/

var numArray = [0,1,10,100,1000];


/* myEach */


myEach(numArray, function print(element, index, arr) {
   console.log('inside myEach', element, index, arr);
 });




/* myMap */

var input = ["a","b","c"];
var output = myMap(input, function capitalize(v){
    return v.toUpperCase();
});
console.log('Testing myMap');
console.log(output);
console.log(output[0] === "A" && output[1] === "B" && output[2] === "C"); // assertion

console.log("the end");

//myReduce

var total = numArray.reduce(function(sum, value) {
  return sum + value;
}, 0);
var total2 =myReduce(numArray,function(sum, value) {
  return sum + value;
}, 0);
console.log("Testing myReduce()...")
console.log(total);
console.log(total2);




// myFilter

var words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

var longWords = words.filter(function(word){
  return word.length > 6;
});
var long2 = myFilter(words, function(word){
  return word.length > 6;
});
console.log("Testing myFilter()...")

console.log(longWords);
console.log(long2);


//mySome

function isBiggerThan10(element, index, array) {
  return element > 10;
}
console.log("Testing mySome()...")

console.log([2, 5, 8, 1, 4].some(isBiggerThan10));  // false
console.log([12, 5, 8, 1, 4].some(isBiggerThan10)); // true


console.log(mySome([2, 5, 8, 1, 4],isBiggerThan10));  // false
console.log(mySome([12, 5, 8, 1, 4],isBiggerThan10)); // true


//myEvery

function isBigEnough(element, index, array) { 
  return element >= 10; 
} 
console.log("Testing myEvery()...")

console.log([12, 5, 8, 130, 44].every(isBigEnough));   // false 
console.log([12, 54, 18, 130, 44].every(isBigEnough)); // true

console.log(myEvery([12, 5, 8, 130, 44],isBigEnough));   // false 
console.log(myEvery([12, 54, 18, 130, 44],isBigEnough)); // true










