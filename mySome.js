function mySome(arr, callback) {
	for (let i = 0; i < arr.length; i++) {
		return callback(arr[i],i,arr) ? true: false;
	}
}









module.exports = mySome;
