var myEach = require('./myEach');
var myMap = require('./myMap');
var myReduce = require('./myReduce');
var myFilter = require('./myFilter')
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

var total = myReduce(numArray,function(sum, value) {
  return sum + value;
}, 0);
var total2 =myReduce(numArray,function(sum, value) {
  return sum + value;
}, 0);

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

console.log(longWords);
console.log(long2);












