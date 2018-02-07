//yield表达式本身没有返回值，或者说总是返回undefined。
//next方法可以带一个参数，该参数就会被当作上一个yield表达式的返回值。

function* f() {
  for(var i = 0; true; i++) {
    var reset = yield i;
    if(reset) { i = -1; }
  }
}

var g = f();

console.log(g.next()); // { value: 0, done: false }
console.log(g.next()); // { value: 1, done: false }
console.log(g.next(true));// { value: 0, done: false }


//当next方法带一个参数true时，变量reset就被重置为这个参数（即true），因此i会等于-1，下一轮循环就会从-1开始递增。