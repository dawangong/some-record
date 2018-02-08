const promise1 = new Promise(function (resolve, reject) {
	throw new Error('test');
});
promise1.catch(function (error) {
	console.log(error);
});
// Error: test
// reject方法的作用，等同于抛出错误。

const promise2 = new Promise(function (resolve, reject) {
	reject(new Error('test'));
});
promise2.catch(function (error) {
	console.log(error);
});

//catch语句会捕获promise中抛出的任何错误（不论形式）

const promise3 = new Promise(function (resolve, reject) {
	resolve('ok');
	throw new Error('test');
});
promise3
	.then(function (value) {
		console.log(value)
	})
	.catch(function (error) {
		console.log(error)
	});
// ok


//如果 Promise 状态已经变成resolved，再抛出错误是无效的.
//因为 Promise 的状态一旦改变，就永久保持该状态，不会再变了.
//它们(promise)之中任何一个抛出的错误，都会被最后一个catch捕获。
