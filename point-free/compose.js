const add = (a, b) => a + b;
const double = x => 2 * x;
const reduce  = x => x - 1;

// const compose = (...fn) => {
//   let next;
//   const [firstFn, ...fns] = fn;
//   return (...arg) => {
//     next = firstFn(...arg);
//     let n = 0;
//     while (n < fns.length) {
//       next = fns[n](next);
//       n++;
//     }
//     return next;
//   }
// };

const compose = (...fns) => (...args) => fns.reduce((params, fn, index) => index === 0 ? fn(...params) : fn(params), args);

const fn = compose(add, double, reduce);

const result = fn(1, 2); // 5

console.log(result);
