let arr = [1, 2, [1, 3, 4, 5, [3, 4], 5, 7], 668];
let arrs = [];
arr.toString().split(',').forEach((item) => {
	arrs.push(Number(item));
});
console.log(arrs);
