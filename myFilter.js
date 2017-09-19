function myFilter(arr, callback, thisArg) {
	let filteredElements = [];
	for (var i = 0; i < arr.length; i++) {
		filteredElements.push(callback(arr[i]),i, arr)
	}
}

module.exports = myFilter;
