function* foo() {
	yield 1;
	yield 2;
	yield 3;
	yield 4;
	yield 5;
	return 6;
}

let fo = foo();

for (let v of fo) {
	console.log(v);
}

// 1
// 2
// 3
// 4
// 5
