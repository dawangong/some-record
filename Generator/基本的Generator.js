function* generator() {
	yield '111';
	yield '222';
	yield '333';
	return 'ok';
}

let hw = generator();
// 调用返回一个指向内部状态的指针对象（迭代器对象）

console.log(hw.next());
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());

console.log(hw.next());