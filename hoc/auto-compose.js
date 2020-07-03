const add = (a, b) => a + b;
const double = x => 2 * x;
const reduce  = x => x - 1;

const autoCompose = (...fn) => {
  let next;
  const [firstFn, ...fns] = fn;
  return (...arg) => {
    next = firstFn(...arg);
    let n = 0;
    while (n < fns.length) {
      next = fns[n](next);
      n++;
    }
    return next;
  }
};

const fn = autoCompose(add, double, reduce);

const result = fn(1, 2); // 5

console.log(result);
