let add = (...param) => {
	let sum = 0;
	param.forEach((v) => {
		sum += v;
	});
	return sum;
};

console.log(add(1, 2, 3, 4));
//rest必须是最后的参数（做收尾）它后面如果有其他形参会报错
console.log(add.length);
//函数的length不包括rest参数

