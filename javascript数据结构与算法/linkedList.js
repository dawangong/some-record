/** 
 * 链表
 * 节点指针联系在一起 非连续性存储
 * size 节点数
 * isEmpty 是否为空
 * push() 链表尾部增加一个元素
 * insert() 指定位置新增元素 返回成功失败
 * getAt() 获取特定位置节点 没有返回undefined
 * indexOf() 获取元素索引 没有返回-1
 * remove() 移除指定元素 并返回
 * removeAt() 移除指定位置元素 并返回
 * toString() 返回字符串
 * getHead() 获取头部
 * # 声明 private 属性
 * auth: wh
 */
const {
  baseEqual,
  Node
} = require("./utils");

class LinkedList {
  #
  count;#
  head;

  constructor() {
    this.#init();
  }

  get size() {
    return this.#count;
  }

  get isEmpty() {
    return this.#count === 0;
  }

  # init() {
    this.#count = 0;
    this.#head;
  }

  getHead() {
    return this.#head;
  }

  push(ele) {
    const node = new Node(ele);
    let current;
    if (!this.#head) {
      this.#head = node;
    } else {
      current = this.#head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.#count++;
  }

  getAt(index) {
    if (index >= 0 && index < this.#count) {
      let current = this.#head;

      for (let i = 0; i < index; i++) {
        current = current.next;
      }
      return current;
    }
    return undefined;
  }

  removeAt(index) {
    if (index >= 0 && index < this.#count) {
      let current = this.#head;

      if (index === 0) {
        this.#head = current.next;
      } else {
        let pre = this.getAt(index - 1);
        current = pre.next;
        // jump
        pre.next = current.next;
      }
      this.#count--;
      return current.ele;
    }
    return undefined;
  }

  insert(ele, index) {
    if (index >= 0 && index < this.#count) {
      const node = new Node(ele);
      if (index === 0) {
        let current = this.#head;
        node.next = current;
        this.#head = node;
      } else {
        let pre = this.getAt(index - 1);
        let current = pre.next;
        pre.next = node;
        node.next = current;
      }

      this.#count++;
      return true;
    }
    return false;
  }


  indexOf(ele) {
    let current = this.#head;
    for (let i = 0; i < this.#count; i++) {
      if (baseEqual(ele) === baseEqual(current.ele)) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }

  remove(ele) {
    const index = this.indexOf(ele);
    return this.removeAt(index);
  }

  toString() {
    if (!this.#head) {
      return "";
    }
    let str = "";
    let current = this.#head;
    for (let i = 0; i < this.#count; i++) {
      str = `${str},${current.ele}`;
      current = current.next;
    }
    return str;
  }

}


const a = new LinkedList();
a.push("1");
a.push("2");
a.insert("5", 0);

console.log(a.size, a.toString());

/**
 * 双向链表
 * 可以从尾到头迭代
 * 能追踪前一个元素
 * 迭代错过了可以返回上一个元素
 */
class DoublyLinkedList extends LinkedList {
  #tail;

  constructor() {
    super();
    this.#tail;
  }

  insert(ele, index) {
    if (index >= 0 && index < this.#count) {
      const node = new Node(ele);
      let current = this.#head;
      if (index === 0) {
        if(current) {
          node.next = current;
          current.prev = node;
          this.#head = node;
        } else {
          this.#head = node;
          this.#tail = node;
        }
      } else if(index === this.#count - 1) {
        current = this.#tail;
        current.next = node;
        node.pre = current;
        this.#tail = node;
      } else {
        let pre = this.getAt(index - 1);
        let current = pre.next;
        pre.next = node;
        node.next = current;
        current.prev = node;
        node.prev = pre;
      }

      this.#count++;
      return true;
    }
    return false;
  }
}

/**
 * 单向循环链表
 * 最后一个next指向头
 * 双向循环链表
 * 头prev和尾next互相指向
 */