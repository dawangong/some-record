/**
 * 迭代器模式
 * 内部迭代器,外部迭代器
 * 提供访问对象的一个方式,js中的foreach就是内部迭代器产物
 * auth wh
 */

// 外部迭代器实现判断两个数组全等

class Iterator {
  constructor(arr) {
    this.current = 0;
    this.arr = arr;
  }

  next() {
    this.current += 1;
  }

  isDone() {
    return this.current >= this.arr.length - 1;
  }

  getCurrent() {
    return this.arr[this.current];
  }
};

const a = new Iterator([1, 2, 3]);
const b = new Iterator([1, 3, 3]);

const compare = (a, b) => {
  let res = true;
  while(!a.isDone() && !b.isDone()) {
    if (a.getCurrent() !== b.getCurrent()) {
      console.log("while...");
      res = false;
      break;
    }
    a.next();
    b.next();
  }
  return res;
}

console.log(compare(a, b));