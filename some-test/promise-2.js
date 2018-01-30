console.log('Hi!');

let promise = new Promise(function(resolve, reject) {
  console.log('Promise');
  resolve();
});

promise.then(function() {
  console.log('resolved.');
});


console.log('Hi!');
console.log('Hi!');

// Hi!
// Promise
// Hi!
// Hi!
// resolved
// 
// Promise 新建后立即执行，所以首先输出的是Promise。然后，then方法指定的回调函数，将在当前脚本所有同步任务执行完才会执行，所以resolved最后输出。