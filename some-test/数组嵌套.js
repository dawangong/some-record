function group(array, subGroupLength, index = 0 ,newArray = []) {
	while (index < array.length) {
		newArray.push(array.slice(index, index += subGroupLength));
	}
	return newArray;
}


var arr = group([1, 2, 3, 4, 5], 2);
console.log(arr);
