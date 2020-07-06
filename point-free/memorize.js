const memorize = fn => {
  const hash = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    const result = hash.has(key) ? hash.get(key) : fn(...args);
    hash.set(key, result);
    return result;
  }
};

const add = memorize((a, b) => a + b);

console.log(add(1, 2));
console.log(add(1, 2));

