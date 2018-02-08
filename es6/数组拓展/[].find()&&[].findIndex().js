let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let res = arr.find((v, i, arr) => {
	return v > 4;
})

console.log(res);

//数组实例的find方法，用于找出第一个符合条件的数组成员。
let arrs = [1, 2, 3, 4, 5, 6, 7, 8];
let ress = arrs.findIndex((v, i, arr) => {
	return v > 1;
})

console.log(ress);
//数组实例的findIndex方法的用法与find方法非常类似，返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1。

//这两个方法都可以接受第二个参数，用来绑定回调函数的this对象。
