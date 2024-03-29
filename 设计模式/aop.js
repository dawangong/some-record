/**
 * aop编程 将业务之外的逻辑抽离 复用后从外部注入
 * auth wh
 */
const fn1 = () => {
  console.log(2);
};

Function.prototype.before = function (fn) {
  const thisArg = this;
  return function() {
    fn.apply(this, arguments);
    thisArg.apply(this, arguments);
  }
};

Function.prototype.after = function (fn) {
  const thisArg = this;
  return function() {
    thisArg.apply(this, arguments);
    fn.apply(this, arguments);
  }
};

fn1.before(() => {
  console.log(1);
}).after(() => {
  console.log(3);
})()