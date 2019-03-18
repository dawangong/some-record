let arr = [1, 2, [1, 3, 4, 5, [3, 4], 5, 7], 668];
const arrs = arr.toString().split(',').map((item) => {
	return Number(item);
});
console.log(arrs);
