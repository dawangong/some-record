const arr = [1,4,5,99,2];

const bubble = arr => {
  if (!arr || arr.length < 2) return arr;
  for(let i = 0; i< arr.length - 1; i++) {
    for(let j = 0; j< arr.length - 1 - i; j ++) {
      if(arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
      }
    }
  }
  return arr;
};
console.log(bubble(arr));;

const quick = arr => {
  if (!arr || arr.length < 2) return arr;
  const left = [];
  const right = [];
  const base = arr[0];
  arr.forEach(item => {
    if(item < base) {
      left.push(item);
    }
    if(item > base) {
      right.push(item);
    }
  });
  return [...quick(left), base, ...quick(right)];
};
console.log(quick(arr));

const select = arr => {
  let minIndex;
  for(let i = 0; i< arr.length - 1; i++) {
    minIndex = i;
    for(let j = i + 1; j< arr.length - 1 - i; j ++) {
      if(arr[j] < arr[minIndex]) {
        [arr[j], arr[minIndex]] = [arr[minIndex], arr[j]];
      }
    }
  }
  return arr;
};

console.log(select(arr));
