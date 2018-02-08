let arr = [1, 2, 3];
let arr_ = [];
Array.from(arr, v => {
	arr_.push(v + 1);
});

console.log(arr_);
