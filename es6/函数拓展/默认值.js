let add = (x = 3, y = 4) => {
	return x + y;
};

console.log(add());
console.log(add(1, 2));
console.log(add.length);
//0
//设置了默认值的函数参数长度会失真
let _add = (a, b) => {
	return a + b;
};
console.log(_add.length);
//2
