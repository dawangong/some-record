let arr = [1, 2, [1, 3, 4, 5, [3, 4], 5, 7], 668];
const arrs = String(arr).split(',').map(item => Number(item));
console.log(arrs);
