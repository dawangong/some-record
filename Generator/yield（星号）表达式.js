function* foo() {
  yield 'a';
  yield 'b';
}

function* bar() {
  yield 'x';
  yield* foo();
  yield 'y';
}

let bars = bar();

console.log(bars.next());
console.log(bars.next());
console.log(bars.next());
console.log(bars.next());
console.log(bars.next());

//如果在 Generator 函数内部，调用另一个 Generator 函数，默认情况下是没有效果的。
//可以通过yield* 去实现。
//yield*后面的 Generator 函数（没有return语句时），等同于在 Generator 函数内部，部署一个for...of循环。
//即 yield*的效果就是在执行一个for-of循环
//数组本身具有迭代器接口，故可以如下：
function* gen(){
  yield* ["a", "b", "c"];
}

console.log(gen().next()); 
console.log(gen().next()); 
console.log(gen().next()); 
//实际上，任何数据结构只要有 Iterator 接口，就可以被yield*遍历。