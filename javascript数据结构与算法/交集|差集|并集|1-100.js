// 1- 100
const a = new Array(100).fill(0).map((item, index) => index + 1);

console.log(a);

const arr1 = [1,3,5,7,8];
const arr2 = [2,3,4,5,7];

// 交集
const _arr1 = [...new Set(arr1)];
const res1 = [];
arr2.forEach(item => {
  if(_arr1.includes(item)) {
    res1.push(item)
  }
});

console.log(res1);

// 差集
const _arr2 = [...new Set(arr2)];
const res2 = [];
arr1.forEach(item => {
  if(!_arr2.includes(item)) {
    res2.push(item)
  }
});

console.log(res2);

// 并集
console.log([...new Set([...arr1, ...arr2])]);


