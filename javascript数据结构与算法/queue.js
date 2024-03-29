/** 
 * 队列
 * 先进先出 (FIFO原则)
 * size 返回队列长度
 * isEmpty 返回队列是否有元素
 * push() 队尾添加一个元素
 * shift() 队头移除一个元素,并返回
 * peekF() 返回队列第一个元素
 * clear() 清空队列
 * toString() 返回队列字符串
 * # 声明 private 属性
 * auth: wh
 */

class Queue {
  #list;
  #count;
  #firstCount;

  constructor() {
    this.#init();
  }

  get size() {
    return this.#count - this.#firstCount;
  }

  get isEmpty() {
    return this.#count - this.#firstCount === 0;
  }

  #init() {
    this.#list = {};
    this.#count = 0;
    this.#firstCount = 0;
  }

  push(element) {
    this.#list[this.#count++] = element;
  }

  shift() {
    if(this.isEmpty) {
      return undefined;
    }

    const res = this.#list[this.#firstCount];
    delete this.#list[this.#firstCount++];
    return res;
  }

  peekF() {
    if(this.isEmpty) {
      return undefined;
    }

    return this.#list[this.#firstCount];
  }

  clear() {
    this.#init();
  }

  toString() {
    return Object.values(this.#list).toString();
  }

}

const myQueue = new Queue();
myQueue.push("a");
myQueue.push("b");

console.log(myQueue.toString());

/**
 * 双端队列
 * DoublyQueue
 * 同时满足 先进先出 后进先出 (FIFO + LIFO)
 * 可以队首添加删除 也可以队尾添加删除
 * 这不就是js array ?
 * 唯一不同是 array 时间复杂度高
 * size 返回队列长度
 * isEmpty 返回队列是否有元素
 * push() 队尾添加一个元素
 * pop() 队尾移除一个元素,并返回
 * unshift() 队头添加一个元素
 * shift() 队头删除一个元素,并返回
 * peekF() 返回队列第一个元素
 * peekL() 返回队列最后一个元素
 * clear() 清空队列
 * toString() 返回队列字符串
 * # 声明 private 属性
 */
class DoublyQueue {
  #list;
  #count;
  #firstCount;

  constructor() {
    this.#init();
  }

  get size() {
    return this.#count - this.#firstCount;
  }

  get isEmpty() {
    return this.#count - this.#firstCount === 0;
  }

  #init() {
    this.#list = {};
    this.#count = 0;
    this.#firstCount = 0;
  }

  unshift(element) {
    if(this.isEmpty) {
      this.push(element);
    } else if(this.#firstCount > 0) {
      this.#list[--this.#firstCount] = element;
    } else {
      for(let i = this.#count; i > 0; i--) {
        // 后移
        this.#list[i] = this.#list[i - 1]
      };
      this.#firstCount = 0;
      this.#count++;
      this.#list[0] = element;
    }
  }

  push(element) {
    this.#list[this.#count++] = element;
  }

  shift() {
    if(this.isEmpty) {
      return undefined;
    }

    const res = this.#list[this.#firstCount];
    delete this.#list[this.#firstCount++];
    return res;
  }

  pop() {
    if(this.isEmpty) {
      return undefined;
    }
    this.#count--;
    const result = this.items[this.#count];
    delete this.items[this.#count];
    return result;
  }

  peekF() {
    if(this.isEmpty) {
      return undefined;
    }

    return this.#list[this.#firstCount];
  }

  peekL() {
    if(this.isEmpty) {
      return undefined;
    }

    return this.#list[this.#count-1];
  }

  clear() {
    this.#init();
  }

  toString() {
    return Object.values(this.#list).toString();
  }
}

const test = new DoublyQueue();
test.push("q");
test.push("w");
test.unshift("a");
console.log(test.toString(), test.size);


/**
 * 循环队列
 * 循环队列 利用先进先出原则
 */