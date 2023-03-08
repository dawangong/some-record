/** 
 * 栈
 * 后进先出 (LIFO原则)
 * size 返回栈长度
 * isEmpty 返回栈内是否有元素
 * push() 添加1个新元素到栈顶
 * pop() 移除栈顶元素 返回被移除的元素
 * peek() 返回栈顶元素
 * clear() 清空栈
 * toString() 返回栈字符串
 * # 声明 private 属性
 * auth: wh
 */


/**
 * T(n) = O(n)
 * S(n) = O(n)
 */
class Stack {
  #list;

  constructor() {
    this.#list = [];
  }

  get size () {
    return this.#list.length;
  }

  get isEmpty () {
    return this.size === 0;
  }

  push(element) {
      this.#list.push(element);
  }

  pop() {
    return this.#list.pop();
  }

  peek() {
    return this.#list[this.size - 1]
  }

  clear() {
    this.#list = [];
  }

  toString() {
    return this.#list.toString();
  }
}

const myStack = new Stack();

myStack.push("a");
myStack.push("b");
console.log(myStack.size, myStack.isEmpty, myStack.toString());


/**
 * T(n) = O(1)
 * S(n) = O(n)
 */
class ObjStack {
  #list;
  #count;

  constructor() {
    this.#init();
  }

  get size () {
    return this.#count;
  }

  get isEmpty () {
    return this.#count === 0;
  }

  #init() {
    this.#list = {};
    this.#count = 0;
  }

  push(element) {
      this.#list[this.#count++] = element;
  }

  pop() {
    if(this.isEmpty) {
      return undefined;
    }
    const res = this.#list[--this.#count];
    delete this.#list[this.#count];
    return res;
  }

  peek() {
    if(this.isEmpty) {
      return undefined;
    }
    return this.#list[this.#count - 1];
  }

  clear() {
    this.#init();
  }

  toString() {
    return Object.values(this.#list).toString();
  }
}

const myObjStack = new ObjStack();
myObjStack.push("1");
myObjStack.push("2");

console.log(myObjStack.size, myObjStack.toString());

/**
 * 利用栈 实现10进制转换2进制
 */
const convertToBinary = (num) => {
  let quo = num;
  let rem;
  const res = new ObjStack();
  while(quo > 0) {
    quo = Math.floor(quo / 2);
    rem = quo % 2;
    res.push(rem);
  }

  return res.toString();
}

console.log(convertToBinary(10));