// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce for more details
// Don't worry about initialValue at first. You can always add it in later.

function myReduce(arr, callback, initialValue) {
	if (!arr.length) return initialValue;
	if (initialValue){
		let accumulator = callback(initialValue, arr[1], 0,arr);
		for (let i = 1; i < arr.length; i++) {
			accumulator = callback(accumulator, arr[i+1], i,arr);
		}
		return accumulator;
	} else {

		let accumulator = arr[0];
		accumulator = callback(accumulator, arr[1], 1,arr);
		for (let i = 1; i < arr.length-1; i++) {
			accumulator = callback(accumulator, arr[i+1],i+1,arr);
		}
		return accumulator;
	}
}

/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myReduce;
