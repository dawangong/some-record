let promise = new Promise((resolve, reject) => {
	console.log('111');	//需要先发生的同步任务
	resolve('2333');	//最后需要执行的回调函数
});

//立即 resolved 的 Promise 是在本轮事件循环的末尾执行，总是晚于本轮循环的同步任务。

//使用：
promise.then(data => {
	console.log(data);
	return data;
	//return 可以让下一个then方法得到return的返回值作为参数，then方法返回的是一个新的promise实例
}).then(data => {
	console.log(data);
});




