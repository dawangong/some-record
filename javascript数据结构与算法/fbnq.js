// 1 1 2 3 5 8

const fbnq = n => {
  let arr = [];
  if(n === 1) return arr = [1];
  if(n === 2) return arr = [1, 1];
  if(n > 2) {
    arr = [1, 1];
    for(let i = 2; i < n; i++) {
      arr[i] = arr[i-1] + arr[i-2];
    }
    return arr;
  }
};

console.log(fbnq(1));
console.log(fbnq(3));
console.log(fbnq(5));
