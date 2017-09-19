function myFilter(arr, callback, thisArg) {
	let filteredElements = [];
	for (let i = 0; i < arr.length; i++) {
		if (callback(arr[i],i,arr)) {
			filteredElements.push(arr[i]);
		}
	}
	return filteredElements;
}




















module.exports = myFilter;