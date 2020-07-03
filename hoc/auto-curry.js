// 自动柯里化
const autoCurry = fn => {
  const check = (rest, argList) => rest === 0 ? fn(...argList) : arg => check(rest - 1, [...argList, arg]);
  return check(fn.length, []);
};

const add = autoCurry((a, b, c) => a + b + c);

const result = add(1)(2)(3);

console.log(result);
// 6

// 延迟计算
// 参数复用
