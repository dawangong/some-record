//判断数字是否有限
console.log(Number.isFinite(15));
console.log(Number.isFinite(Infinity));
//判断是否NaN
console.log(Number.isNaN(13));
console.log(Number.isNaN(NaN));
//挂在Number上逐渐模块化js
//ES6 将全局方法parseInt()和parseFloat()，移植到Number对象上面，行为完全保持不变。

//判断是否为整数
console.log(Number.isInteger(5));
//true
console.log(Number.isInteger(5.0));
//true
console.log(Number.isInteger(5.3));
//false