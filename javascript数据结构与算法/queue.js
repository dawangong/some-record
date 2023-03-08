/** 
 * 队列
 * 先进先出 (FIFO原则)
 * size 返回队列长度
 * isEmpty 返回队列是否有元素
 * enqueue() 队尾添加一个元素
 * dequeue() 队头移除一个元素,并返回
 * peek() 返回队列第一个元素
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

  enqueue(element) {
    this.#list[this.#count++] = element;
  }

  dequeue() {
    if(this.isEmpty) {
      return undefined;
    }

    const res = this.#list[this.#firstCount];
    delete this.#list[this.#firstCount++];
    return res;
  }

  peek() {
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
myQueue.enqueue("a");
myQueue.enqueue("b");

console.log(myQueue.toString());